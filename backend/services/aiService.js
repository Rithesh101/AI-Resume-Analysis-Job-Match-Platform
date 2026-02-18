const predefinedSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JWT",
  "HTML",
  "CSS",
  "Python",
  "Flask",
  "TensorFlow",
  "PostgreSQL",
];

const extractSkillsFromResume = async (resumeText) => {
  const foundSkills = predefinedSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  return foundSkills;
};

module.exports = { extractSkillsFromResume };
