const skills = [
  { name: "js", color: "#efd81d", width: "95%" },
  { name: "react", color: "#5ed3f3", width: "60%" },
  { name: "sass", color: "#c76494", width: "90%" },
  { name: "html", color: "#dd4b25", width: "95%" },
  { name: "css", color: "#254bdd", width: "95%" },
];

const elSkills = document.querySelectorAll(".skill");
const objSkills = {};

elSkills.forEach((skill) => {
  const name = skill.classList[1];
  const barPercentage = skill.querySelector(".bar-percentage");

  objSkills[name] = {
    name,
    element: skill,
    barPercentage,
  };
});

const configSkills = () => {
  for (const firstKey in objSkills) {
    const { name, barPercentage } = objSkills[firstKey];

    for (const secondKey in skills) {
      const skill = skills[secondKey];
      const { color, width, name: nameSkill } = skill;
      if (name === nameSkill) {
        setTimeout(() => {
          barPercentage.style.background = "#fff";
          barPercentage.style.width = width;
        }, 1000);
      }
    }
  }
};
