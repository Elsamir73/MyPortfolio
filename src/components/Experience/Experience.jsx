import history from "../../data/history.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="kicker">Experience</p>
        <h2 className="section-title">Where I&rsquo;ve worked.</h2>
        <ol className={styles.timeline}>
          {history.map((item) => (
            <li key={item.role} className={styles.item}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.meta}>
                {item.organisation} &middot; {item.startDate} &ndash;{" "}
                {item.endDate}
              </p>
              <p className={styles.summary}>{item.summary}</p>
              {item.technologies.length > 0 && (
                <ul className={styles.tech} aria-label="Technologies used">
                  {item.technologies.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

