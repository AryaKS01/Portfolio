import React from "react";
import "./about.css";
import AboutImg from "../../assets/black.png";

import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">A short introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="about" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            I am Arya Kumar Sundaram, a passionate and dedicated Node.js backend
            developer, specializing in building robust and scalable web
            applications. As a fresher in the industry, I am eager to apply my
            knowledge and skills to contribute to dynamic projects and
            collaborate with talented teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
