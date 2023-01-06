import { Link } from "react-router-dom";

import "../style/Footer.css";
import Socials from "./Socials";

function Footer() {
  return (
    <div className="footer_wrapper">
      <footer className="footer">
        <div className="logo_white"></div>
        <ul className="footer_nav">
          <li>
            <Link
              to="/"
              className="nav_link"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="nav_link"
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav_link"
            >
              contact me
            </Link>
          </li>
        </ul>
        <Socials color={`white`} />
      </footer>
    </div>
  );
}

export default Footer;
