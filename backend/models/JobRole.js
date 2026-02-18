const mongoose = require("mongoose");

const jobRoleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    skills: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobRole", jobRoleSchema);
