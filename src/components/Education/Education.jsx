import education from "../../data/education.json";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="kicker">Education</p>
        <h2 className="section-title">Education.</h2>
        <div className={styles.list}>
          {education.map((item) => (
            <div
              key={item.credential}
              className={`${styles.item} ${
                item.placeholder ? styles.itemPlaceholder : ""
              }`}
            >
              <h3>{item.credential}</h3>
              <p className={styles.meta}>
                {item.institution}
                {item.period && (
                  <span>
                    {" "}
                    &middot; {item.period}
                  </span>
                )}
              </p>
              {item.placeholder && (
                <p className={styles.note}>
                  Placeholder &mdash; update{" "}
                  <code>src/data/education.json</code> with your education
                  details.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
