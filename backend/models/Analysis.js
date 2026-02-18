const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    resumeSkills: {
      type: [String],
      required: true,
    },
    requiredSkills: {
      type: [String],
      required: true,
    },
    matchedSkills: {
      type: [String],
      required: true,
    },
    missingSkills: {
      type: [String],
      required: true,
    },
    matchPercentage: {
      type: Number,
      required: true,
    },
    roadmap: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analysis", analysisSchema);
