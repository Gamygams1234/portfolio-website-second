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
              Hey, I'm Allex Spencer and I love building beautiful webistes
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
          <div className="portrait_wrapper"></div>
          <div className="section_wrapper">
            <span className="underline"></span>
            <h2 className="section_title">About Me</h2>
            <p className="text">
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
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
