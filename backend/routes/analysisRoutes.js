const express = require("express");
const protect = require("../middleware/authMiddleware");
const { getUserAnalyses } = require("../controllers/analysisController");

const router = express.Router();

router.get("/", protect, getUserAnalyses);

module.exports = router;
