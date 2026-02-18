const asyncHandler = require("../utils/asyncHandler");
const { extractTextFromPDF } = require("../services/resumeService");
const fs = require("fs");

// @desc Upload and parse resume
// @route POST /api/resume/upload
// @access Private
const uploadResume = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("No file uploaded");
  }

  const filePath = req.file.path;

  const extractedText = await extractTextFromPDF(filePath);

  // delete file after extraction
  fs.unlinkSync(filePath);

  res.json({
    message: "Resume processed successfully",
    extractedText: extractedText.substring(0, 1000), // limit for now
  });
});

module.exports = { uploadResume };
