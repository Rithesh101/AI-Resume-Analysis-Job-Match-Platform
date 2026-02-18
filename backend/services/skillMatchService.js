const calculateSkillGap = (resumeSkills, requiredSkills) => {
  const matchedSkills = requiredSkills.filter(skill =>
    resumeSkills.includes(skill)
  );

  const missingSkills = requiredSkills.filter(skill =>
    !resumeSkills.includes(skill)
  );

  const matchPercentage =
    (matchedSkills.length / requiredSkills.length) * 100;

  return {
    matchedSkills,
    missingSkills,
    matchPercentage: Math.round(matchPercentage),
  };
};

module.exports = { calculateSkillGap };
