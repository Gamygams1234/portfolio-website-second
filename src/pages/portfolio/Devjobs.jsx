import { Link } from "react-router-dom";

import Aside from "../../components/Aside";
import "../../style/Devjobs.css";

import leftArrow from "../../images/icons/arrow-left.svg";
import rightArrow from "../../images/icons/arrow-right.svg";

function Devjobs() {
  return (
    <>
      <div className="detail_wrapper">
        <div className="detail_bookmark"></div>
        <section className="detail_content">
          <div className="sescription_wrapper">
            <span className="line"></span>
            <div className="detail_description">
              <h2 className="secondary_title">Bookmark</h2>
              <p className="description">
                This project entailed developing a fully responsive full-stack application enabling users to search for jobs and employers to post
                listings. MongoDB, Express, React, and Node.js were utilized in creating this platform.
              </p>
              <p className="green_text first_line">Interaction Design / Front End Development</p>
              <p className="green_text second_line">Mongo DB/ Express / React / CSS</p>
              <a href="https://gb-devjobs.netlify.app/" target="_blank">
                <button className="secondary_button">visit website</button>
              </a>
              <a href="https://github.com/Gamygams1234/devjobs-front" target="_blank">
                <button className="secondary_button">visit Repository</button>
              </a>
            </div>
            <span className="line"></span>
          </div>
          <div className="detail_project_background">
            <h2 className="secondary_title">Project Background</h2>
            <p className="description">
              The task at hand was to create DevJobs, an application where users can conveniently search for job listings and employers can post their
              openings. The project aimed for seamless responsiveness across various screen sizes and intuitive interaction states for all elements.
              Key features included filtering job listings by title, location, and full-time availability, as well as enabling users to view detailed
              job descriptions and apply directly.
            </p>
            <h2 className="secondary_title">Static Previews</h2>
            <div className="screenshot bookmark_first_screenshot"></div>
            <div className="screenshot bookmark_second_screenshot"></div>
          </div>
        </section>
        <div className="sites_nav">
          <div className="swipe_left">
            <Link to="/portfolio/manage" className="nav_link arrow_link">
              <img className="arrow" src={leftArrow} alt="left-arrow-icon" />
            </Link>
            <h2 className="secondary_title">Manage</h2>
            <p className="grey">Previous Project</p>
          </div>
          <div className="center_line"></div>
          <div className="swipe_right">
          <Link to="/portfolio/muglife" className="nav_link arrow_link">
              <img className="arrow" src={rightArrow} alt="right-arrow-icon" />
            </Link>
            <h2 className="secondary_title">Mug Life</h2>
            <p className="grey">Next Project</p>
          </div>
        </div>
      </div>
      <Aside />
    </>
  );
}

export default Devjobs;
