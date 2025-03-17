import React from "react";
import skills from "../../data/skills.json";
import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import reactImg from "../../assets/skills/react.png";

const imageMap = {
  HTML: htmlImg,
  CSS: cssImg,
  React: reactImg,
};

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        {skills.map((skill, id) => (
          <div key={id}>
            <h3>{skill.name}</h3>
            <img src={imageMap[skill.name]} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
