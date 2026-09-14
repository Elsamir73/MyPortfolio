import { site } from "../../data/site";
import styles from "./About.module.css";

const facts = [
  { term: "Role", detail: "Frontend Developer" },
  { term: "Education", detail: "BCA, NIST College" },
  { term: "Based in", detail: site.location },
  { term: "Open to", detail: "Junior roles & internships" },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="kicker">About</p>
        <h2 className="section-title">
          A developer focused on clean, fast interfaces.
        </h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              I&rsquo;m Samir Pathak, a frontend developer based in{" "}
              {site.location}. I recently completed my Bachelor of Computer
              Applications at NIST College, and along the way I&rsquo;ve worked
              as a PHP developer intern at EEE Innovation Ghar and as a
              website operator at I.O.E Thangka.
            </p>
            <p>
              Most of my work sits where clean UI meets solid backends: React
              and vanilla JavaScript on the front, PHP, MySQL and WordPress
              behind it. I enjoy the operational side of websites too, from
              writing SEO-friendly content to tracking down bugs and keeping
              pages reliable and fast.
            </p>
            <p>
              Right now I&rsquo;m looking for junior frontend roles or
              internships where I can ship real features, learn from senior
              engineers, and keep growing.
            </p>
          </div>
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.term} className={styles.fact}>
                <dt>{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;

