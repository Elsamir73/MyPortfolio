import projects from "../../data/projects.json";
import styles from "./Projects.module.css";

// Pick up any project screenshots dropped into src/assets/projects/.
// Missing files resolve to undefined, so cards simply render without images.
const images = import.meta.glob(
  "../../assets/projects/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="kicker">Projects</p>
        <h2 className="section-title">Things I&rsquo;ve built.</h2>
        <div className={styles.grid}>
          {projects.map((project) => {
            const image = project.image
              ? images[`../../assets/projects/${project.image}`]
              : undefined;
            return (
              <article key={project.title} className={styles.card}>
                {image && (
                  <div className={styles.imageWrap}>
                    <img
                      className={styles.image}
                      src={image}
                      alt={`Preview of ${project.title}`}
                      loading="lazy"
                      width="640"
                      height="400"
                    />
                  </div>
                )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

