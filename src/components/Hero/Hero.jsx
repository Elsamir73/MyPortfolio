import { site } from "../../data/site";
import profile from "../../assets/profile.jpeg";
import styles from "./Hero.module.css";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "MySQL",
  "WordPress",
];

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className="kicker">{site.role}</p>
          <h1 className={styles.title}>Hi, I&rsquo;m {site.name}.</h1>
          <p className={styles.lede}>
            I build fast, responsive websites with React, JavaScript and PHP,
            and I&rsquo;ve worked hands-on with WordPress, MySQL and the
            day-to-day side of running a site.
          </p>
          <ul className={styles.tech} aria-label="Primary technologies">
            {technologies.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
          <div className={styles.ctas}>
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a
              className="btn btn-outline"
              href={site.cv}
              download
            >
              Download CV
            </a>
            <a
              className="btn btn-outline"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <img
          className={styles.photo}
          src={profile}
          alt="Portrait of Samir Pathak"
          width="300"
          height="300"
        />
      </div>
    </section>
  );
};

export default Hero;
