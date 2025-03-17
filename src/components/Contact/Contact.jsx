import React from "react";
import styles from "./Contact.module.css";
import image1 from "../../assets/contact/emailIcon.png";
import image2 from "../../assets/contact/githubIcon.png";
import image3 from "../../assets/contact/linkedinIcon.png";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact </h2>
        <p>Feel free to reach out! </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={image1} alt="email image" />
          <a href="mailto:myemail@email.com">shuzhal777@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={image2} alt="github image" />
          <a href="https://github.com/Elsamir73">github.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={image3} alt="linkedin image" />
          <a href="https://www.linkedin.com/in/samir-pathak7">
            linkedin.com/myname
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
