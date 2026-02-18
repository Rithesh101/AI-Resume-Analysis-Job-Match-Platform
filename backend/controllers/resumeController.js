const asyncHandler = require("../utils/asyncHandler");
const { extractTextFromPDF } = require("../services/resumeService");
const { extractSkillsFromResume } = require("../services/aiService");
const JobRole = require("../models/JobRole");
const { calculateSkillGap } = require("../services/skillMatchService");
const { generateRoadmap } = require("../services/roadmapService");
const Analysis = require("../models/Analysis");


const fs = require("fs");

// @desc Upload and parse resume
// @route POST /api/resume/upload
// @access Private
const uploadResume = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("No file uploaded");
  }

  const { jobTitle } = req.body;

  if (!jobTitle) {
    res.status(400);
    throw new Error("Job title is required");
  }

  const jobRole = await JobRole.findOne({ title: jobTitle });

  if (!jobRole) {
    res.status(404);
    throw new Error("Job role not found");
  }

  const filePath = req.file.path;

  const extractedText = await extractTextFromPDF(filePath);

  fs.unlinkSync(filePath);

  const resumeSkills = await extractSkillsFromResume(extractedText);

  const analysis = calculateSkillGap(
    resumeSkills,
    jobRole.skills
  );
  const roadmap = generateRoadmap(analysis.missingSkills);

  // Save analysis
const savedAnalysis = await Analysis.create({
  user: req.user._id,
  jobTitle,
  resumeSkills,
  requiredSkills: jobRole.skills,
  matchedSkills: analysis.matchedSkills,
  missingSkills: analysis.missingSkills,
  matchPercentage: analysis.matchPercentage,
  roadmap,
});

res.json({
  message: "Resume analyzed successfully",
  analysis: savedAnalysis,
});
});



module.exports = { uploadResume };
