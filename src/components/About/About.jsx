import React from "react";
import styles from "./About.module.css";
import image1 from "../../assets/contact/about/aboutImage.png";
import image2 from "../../assets/contact/about/cursor.png";
import image3 from "../../assets/contact/about/server.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={image1}
          alt="About image of me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={image2} alt="About image of me" />
            <div className={styles.aboutItemText}>
              <h3>Fronend Developer</h3>
              <p>
                I'm a frontend developer with experience in building and
                optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={image3} alt="About image of me" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIS
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
