import projects from "../../data/projects.json";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="kicker">Projects</p>
        <h2 className="section-title">Things I&rsquo;ve built.</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tags} aria-label="Technologies used">
                {project.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                {project.live && (
                  <a
                    className={styles.link}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site <span aria-hidden="true">&nearr;</span>
                  </a>
                )}
                {project.source && (
                  <a
                    className={styles.link}
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source <span aria-hidden="true">&nearr;</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

