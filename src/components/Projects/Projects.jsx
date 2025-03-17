import React from "react";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import projectImg from "../../assets/projects/projects.png";

const Projects = () => {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <div>
        {projects.map((project, id) => (
          <div key={id}>
            <img src={projectImg} alt={`Image of ${project.title}`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul>
              {project.skills.map((skill, skillId) => (
                <li key={skillId}>{skill}</li>
              ))}
            </ul>

            <div>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
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
