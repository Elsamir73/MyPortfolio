import React from "react";
import { getImageUrl } from "../../utils";
import image1 from "../../assets/hero/mainbg.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I Am Samir</h1>
        <p className={styles.description}>
          I am a frontend developer with 6 months of internship using laravel
          and react. Reach Out if you like to learn more!
        </p>
        <a href="mailto:shuzhal777@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={image1} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.buttomBlur} />
    </section>
  );
};

export default Hero;
