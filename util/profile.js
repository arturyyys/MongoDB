const profile = {
  softwareKnowledge: `JavaScript, Node.js, React...`,
  coreSkills: `Initiative, efficiency, problem-solving, communication, planning...`,
  personalTraits: `Motivated, disciplined, hardworking, proactive, self-learning...`,
  whyChooseMe: `For reliable, efficient results that will be Your solid choice for excellence and impact!`,
  displayProfile: function () {
    console.log(
      `${this.softwareKnowledge}\n${this.coreSkills}\n${this.personalTraits}\n${this.whyChooseMe}`
    );
  },
};
// Contact with me to display everything
profile.displayProfile();
