import React from "react";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import projectImg from "../../assets/projects/yaknyati.png";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.h2}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <div key={id} className={styles["project-card"]}>
            <div className={styles.image}>
              <img src={projectImg} alt={`Image of ${project.title}`} />
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>

            <ul className={styles.skills}>
              {project.skills.map((skill, skillId) => (
                <li key={skillId} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>

            <div className={styles.links}>
              <a
                href={project.Live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
