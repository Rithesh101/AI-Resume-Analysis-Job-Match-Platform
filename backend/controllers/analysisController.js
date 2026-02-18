const asyncHandler = require("../utils/asyncHandler");
const Analysis = require("../models/Analysis");

// @desc Get logged-in user's analysis history
// @route GET /api/analysis
// @access Private
const getUserAnalyses = asyncHandler(async (req, res) => {
  const analyses = await Analysis.find({ user: req.user._id }).sort({
    createdAt: -1,
  });

  res.json(analyses);
});

module.exports = { getUserAnalyses };
