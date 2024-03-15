import { Link } from "react-router-dom";

import Aside from "../../components/Aside";
import "../../style/Fylo.css";

import AOS from "aos";
import "aos/dist/aos.css";

import leftArrow from "../../images/icons/arrow-left.svg";
import rightArrow from "../../images/icons/arrow-right.svg";
import { useEffect } from "react";

function Fylo() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="detail_wrapper">
        <div className="detail_fylo" data-aos="zoom-in" data-aos-duration="1000"></div>
        <section className="detail_content">
          <div data-aos="fade-in" data-aos-duration="500"  className="desctription_wrapper">
            <span className="line"></span>
            <div className="detail_description">
              <h2 className="secondary_title">Fylo</h2>
              <p className="description">
                This project was built in pure HTML and CSS. I had mobile and
                desktop designs to work to and built it so that it was
                fully-responsive. I took a mobile-first approach and used modern
                CSS like Flexbox and Grid for layout purposes.
              </p>
              <p className="green_text first_line">
                Interaction Design / Front End Development
              </p>
              <p className="green_text second_line">HTML / CSS</p>
              <a href="/">
                <button className="secondary_button">visit website</button>
              </a>
              <a href="/">
                <button className="secondary_button">View Repository</button>
              </a>
            </div>
            <span className="line"></span>
          </div>{" "}
          <div data-aos="fade-in-left" data-aos-duration="500" className="detail_project_background">
            <h2 className="secondary_title">Project Background</h2>
            <p className="description">
              This project was a front-end challenge from Frontend Mentor. It’s
              a platform that enables you to practice building websites to a
              design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I’ve learned
              something new with each project, helping me to improve and adapt
              my style.
            </p>
            <h2 className="secondary_title">Static Previews</h2>
            <div data-aos="fade-down" data-aos-duration="1000" className="screenshot fylo_first_screenshot"></div>
            <div data-aos="fade-down" data-aos-duration="1000" className="screenshot fylo_second_screenshot"></div>
          </div>
        </section>
        <div className="sites_nav">
          <div className="swipe_left">
            <Link
              to="/portfolio/insure"
              className="nav_link arrow_link"
            >
              <img
                className="arrow"
                src={leftArrow}
                alt="left-arrow-icon"
              />
            </Link>
            <h2 className="secondary_title">Insure</h2>
            <p className="grey">Previous Project</p>
          </div>
          <div className="center_line"></div>
          <div className="swipe_right">
            <Link
              to="/portfolio/manage"
              className="nav_link arrow_link"
            >
              <img
                className="arrow"
                src={rightArrow}
                alt="right-arrow-icon"
              />
            </Link>
            <h2 className="secondary_title">Manage</h2>
            <p className="grey">Next Project</p>
          </div>
        </div>
      </div>
      <Aside />
    </>
  );
}

export default Fylo;
