import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Aside from "../../components/Aside";
import "../../style/Bookmark.css";

import leftArrow from "../../images/icons/arrow-left.svg";
import rightArrow from "../../images/icons/arrow-right.svg";
import { useEffect } from "react";

function Bookmark() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="detail_wrapper">
        <div className="detail_muglife" data-aos="zoom-in" data-aos-duration="1000"></div>
        <section className="detail_content">
          <div data-aos="fade-in" data-aos-duration="500" className="description_wrapper">
            <span className="line"></span>
            <div className="detail_description">
              <h2 className="secondary_title">Mug Life</h2>
              <p className="description">
                Mug Life stands as a testament to my proficiency in developing robust e-commerce solutions using the MERN stack. Crafted with
                meticulous attention to detail, this platform prioritizes user experience, ensuring seamless shopping encounters across both mobile
                and desktop devices.
              </p>
              <p className="green_text first_line">Interaction Design / Full Stack Development</p>
              <p className="green_text second_line">Mongo DB / Express / React / CSS</p>
              <a href="https://muglife.onrender.com/" className="project_button" target="_blank">
                <button className="secondary_button">visit website</button>
              </a>
              <a href="https://github.com/Gamygams1234/mug-life-frontend" target="_blank">
                <button className="secondary_button">visit repository</button>
              </a>
            </div>
            <span className="line"></span>
          </div>
          <div data-aos="fade-in-left" data-aos-duration="500" className="detail_project_background">
            <h2 className="secondary_title">Project Background</h2>
            <p className="description">
              As the scrum leader, I orchestrated the team's efforts to ensure seamless execution and delivery. Collaborating closely with my talented
              team members, we crafted an exceptional shopping platform designed to provide an optimal user experience across both mobile and desktop
              devices. Together, our collective efforts culminated in the successful creation of a standout application that reflects our dedication
              to excellence.
            </p>
            <h2 className="secondary_title">Static Previews</h2>
            <div data-aos="fade-down" data-aos-duration="1000" className="screenshot muglife_first_screenshot"></div>
            <div data-aos="fade-down" data-aos-duration="1000" className="screenshot muglife_second_screenshot"></div>
          </div>
        </section>
        <div className="sites_nav">
          <div className="swipe_left">
            <Link to="/portfolio/devjobs" className="nav_link arrow_link">
              <img className="arrow" src={leftArrow} alt="left-arrow-icon" />
            </Link>
            <h2 className="secondary_title">Devjobs</h2>
            <p className="grey">Previous Project</p>
          </div>
          <div className="center_line"></div>
          <div className="swipe_right">
            <Link to="/portfolio/memory" className="nav_link arrow_link">
              <img className="arrow" src={rightArrow} alt="right-arrow-icon" />
            </Link>
            <h2 className="secondary_title">Memory</h2>
            <p className="grey">Next Project</p>
          </div>
        </div>
      </div>
      <Aside />
    </>
  );
}

export default Bookmark;
