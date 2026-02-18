const generateRoadmap = (missingSkills) => {
  if (missingSkills.length === 0) {
    return ["You already meet all required skills. Great job!"];
  }

  const roadmap = missingSkills.map((skill, index) => {
    return `Week ${index + 1}: Focus on learning ${skill}. Build a mini project using ${skill}.`;
  });

  return roadmap;
};

module.exports = { generateRoadmap };
