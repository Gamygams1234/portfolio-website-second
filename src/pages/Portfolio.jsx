import { Link } from "react-router-dom";

import Aside from "../components/Aside";
import "../style/Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="project">
        <div className="project_cover manage_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Manage</h2>
          <p className="description">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
          <Link
            to="/portfolio/manage"
            className="nav_link"
          >
            <button className="secondary_button">view project</button>
          </Link>
          <span className="line"></span>
        </div>
      </div>
      <div className="project project_reverse">
        <div className="project_cover bookmark_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Bookmark</h2>
          <p className="description">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </p>
          <Link
            to="/portfolio/bookmark"
            className="nav_link"
          >
            <button className="secondary_button">view project</button>
          </Link>
          <span className="line"></span>
        </div>
      </div>
      <div className="project">
        <div className="project_cover insure_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Insure</h2>
          <p className="description">
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully-responsive landing page. The only JavaScript this
            project required was to enable the toggling of the mobile
            navigation.
          </p>
          <Link
            to="/portfolio/insure"
            className="nav_link"
          >
            <button className="secondary_button">view project</button>
          </Link>
          <span className="line"></span>
        </div>
      </div>
      <div className="project project_reverse">
        <div className="project_cover fylo_cover"></div>
        <div className="project_description">
          <span className="line"></span>
          <h2 className="secondary_title">Fylo</h2>
          <p className="description">
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully-responsive. I took a mobile-first approach and used modern CSS
            like Flexbox and Grid for layout purposes.
          </p>
          <Link
            to="/portfolio/fylo"
            className="nav_link"
          >
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
