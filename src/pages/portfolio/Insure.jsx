import { Link } from "react-router-dom";

import Aside from "../../components/Aside";
import "../../style/Insure.css";

import leftArrow from "../../images/icons/arrow-left.svg";
import rightArrow from "../../images/icons/arrow-right.svg";

function Insure() {
  return (
    <>
      <div className="detail_wrapper">
        <div className="detail_insure"></div>
        <section className="detail_content">
          <div className="description_wrapper">
            <span className="line"></span>
            <div className="detail_description">
              <h2 className="secondary_title">Memory Game</h2>
              <p className="description">
                Memory is a web game which is mostly built with Javascript, HTML and CSS. I built a fully-responsive web game built for mobile and for
                desktop. The icons used in the design are from Font Awesome.
              </p>
              <p className="green_text first_line">Interaction Design / Front End Development</p>
              <p className="green_text second_line">HTML / CSS / JS / SCSS</p>
              <a href="https://gb-memory-game-ga.netlify.app/" target="_blank">
                <button className="secondary_button">visit website</button>
              </a>
              <a href="https://github.com/Gamygams1234/ga-memory-game" target="_blank">
                <button className="secondary_button">Visit Repository</button>
              </a>
            </div>
            <span className="line"></span>
          </div>
          <div className="detail_project_background">
            <h2 className="secondary_title">Project Background</h2>
            <p className="description">
              This project was a front-end challenge from General Assembly. In solo play, the game tracks the time elapsed since the first tile click
              and the total number of moves made. A move is counted as two tiles being selected as a potential match. Upon finding all pairs, the
              timer stops, and an end-of-game modal displays the stats.In multiplayer mode, the game tracks the total number of pairs each player has
              found. When a player finds a pair, their score increases by one. The current turn switches to the next player after the current player
              attempts to find a potential match. Expirience with this projet has helped me refine my workflow and solve real-world coding problems
              with styling and Javascript.
            </p>
            <h2 className="secondary_title">Static Previews</h2>
            <div className="screenshot insure_first_screenshot"></div>
            <div className="screenshot insure_second_screenshot"></div>
          </div>
        </section>

        <div className="sites_nav">
          <div className="swipe_left">
            <Link to="/portfolio/muglife" className="nav_link arrow_link">
              <img className="arrow" src={leftArrow} alt="left-arrow-icon" />
            </Link>
            <h2 className="secondary_title">Mug Life</h2>
            <p className="grey">Previous Project</p>
          </div>
          <div className="center_line"></div>
          <div className="swipe_right">
            <Link to="/portfolio/manage" className="nav_link arrow_link">
              <img className="arrow" src={rightArrow} alt="right-arrow-icon" />
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

export default Insure;
