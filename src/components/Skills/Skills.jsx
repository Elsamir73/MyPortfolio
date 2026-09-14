import skills from "../../data/skills.json";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="kicker">Skills</p>
        <h2 className="section-title">Technologies I work with.</h2>
        <div className={styles.groups}>
          {skills.map((group) => (
            <div key={group.group} className={styles.group}>
              <h3>{group.group}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
