import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Aside from "../components/Aside";
import "../style/Portfolio.css";
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-zoom-in" className="project">
        <div className="project_cover devjobs_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Devjobs</h2>
          <p className="description">
            This project entailed developing a fully responsive full-stack application enabling users to search for jobs and employers to post
            listings. MongoDB, Express, React, and Node.js were utilized in creating this platform.
          </p>
          <p className="green_text first_line">Interaction Design / Full Stack Development</p>
          <p className="green_text second_line">Mongo DB / Express / React / CSS</p>
          <Link to="/portfolio/devjobs" className="nav_link">
            <button className="secondary_button">view project</button>
          </Link>
          <span className="line"></span>
        </div>
      </div>
      <div data-aos="fade-zoom-in" className="project project_reverse">
        <div className="project_cover bookmark_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Muglife</h2>
          <p className="description">
            Mug Life stands as a testament to my proficiency in developing robust e-commerce solutions using the MERN stack. Crafted with meticulous
            attention to detail, this platform prioritizes user experience, ensuring seamless shopping encounters across both mobile and desktop
            devices.
          </p>
          <p className="green_text first_line">Interaction Design / Full Stack Development</p>
          <p className="green_text second_line">Mongo DB / Express / React / CSS</p>
          <Link to="/portfolio/muglife" className="nav_link">
            <button className="secondary_button">view project</button>
          </Link>
          <span className="line"></span>
        </div>
      </div>
      <div  data-aos="fade-zoom-in" className="project">
        <div className="project_cover insure_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Memory</h2>
          <p className="description">
            Memory is a web game which is mostly built with Javascript, HTML and CSS. I built a fully-responsive web game built for mobile and for
            desktop. The icons used in the design are from Font Awesome.
          </p>
          <p className="green_text first_line">Interaction Design / Front End Development</p>
          <p className="green_text second_line">HTML / CSS / JS / SCSS</p>
          <Link to="/portfolio/memory" className="nav_link">
            <button className="secondary_button">view project</button>
          </Link>
          <span className="line"></span>
        </div>
      </div>
      {/* <div className="project project_reverse">
        <div className="project_cover fylo_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Fylo</h2>
          <p className="description">
            This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I
            took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.
          </p>
          <Link to="/portfolio/fylo" className="nav_link">
            <button className="secondary_button">view project</button>
          </Link>
          <span className="line"></span>
        </div>
      </div>{" "} */}
      <div  data-aos="fade-zoom-in" className="project project_reverse">
        <div className="project_cover manage_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Manage</h2>
          <p className="description">
            This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the testimonial slider.
          </p>
          <p className="green_text first_line">Interaction Design / Front End Development</p>
          <p className="green_text second_line">HTML / CSS / JS </p>
          <Link to="/portfolio/manage" className="nav_link">
            <button className="secondary_button">view project</button>
          </Link>
          <span className="line"></span>
        </div>
      </div>
      <Aside />
    </>
  );
}

export default Portfolio;
