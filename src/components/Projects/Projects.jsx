import projects from "../../data/projects.json";
import styles from "./Projects.module.css";

// Pick up any project screenshots dropped into src/assets/projects/.
// Missing files resolve to undefined, so cards simply render without images.
const images = import.meta.glob(
  "../../assets/projects/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const ProjectCard = ({ project }) => {
  const image = project.image
    ? images[`../../assets/projects/${project.image}`]
    : undefined;
  return (
    <article className={styles.card}>
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
      <h4 className={styles.cardTitle}>{project.title}</h4>
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
};

const ProjectGroup = ({ label, items }) => (
  <div className={styles.group}>
    <h3 className={styles.groupTitle}>{label}</h3>
    <div className={styles.grid}>
      {items.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </div>
);

const Projects = () => {
  const live = projects.filter((p) => p.group === "live");
  const personal = projects.filter((p) => p.group === "personal");
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="kicker">Projects</p>
        <h2 className="section-title">Things I&rsquo;ve built.</h2>
        <ProjectGroup
          label="Live in production"
          items={live}
        />
        <ProjectGroup
          label="Personal projects"
          items={personal}
        />
      </div>
    </section>
  );
};

export default Projects;

