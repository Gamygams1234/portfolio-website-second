import React, { useRef } from "react";
import { Link } from "react-router-dom";


import "../style/About.css";
import icon from "../images/icons/down-arrows.svg";

function About() {
  const aboutSection = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hero_wrapper">
        <div className="hero_desktop">
          <div className="hero_image"></div>
          <div className="hero_description">
            <h1 className="hero_title">
              Hey, I'm Gamaliel Burgos and I love building beautiful websites
            </h1>
            <button
              onClick={scrollDown}
              className="primary_button"
            >
              <div className="icon">
                <img
                  className="down_arrows"
                  src={icon}
                  alt="down-arrows-icon"
                />
              </div>
              <span>about me</span>
            </button>
          </div>
        </div>
      </div>

      <div className="about">
        <section
          className="about_section"
          ref={aboutSection}
        >
          <div className="portrait_wrapper">
            <img src="../images/gamaliel-portfolio.jpg" alt="" />
          </div>
          <div className="section_wrapper">
            <span className="underline"></span>
            <h2 className="section_title">About Me</h2>
            <p className="text">
            I am a Software Developer who is driven by my passion for creating outstanding web experiences while collaborating seamlessly with cross-functional teams. With a strong foundation in React, CSS, JavaScript, HTML as well as an understanding of Relational Databases, backend languages, and other scripting languages, I bring to the table not only technical expertise but also a deep appreciation for design and user-centricity. I thrive in team environments, valuing open communication, sharing knowledge, and working collectively to achieve our common goals. My goal is to leverage my skills and collaborative spirit to contribute to innovative web projects, ensuring that user interfaces are not just functional but also visually captivating.
            </p>
            <Link to="/portfolio">
              <button className="secondary_button"> Go to portfolio </button>
            </Link>
            <span className="underline bottomline"></span>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
