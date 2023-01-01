import React, { useState } from "react";
import { Link } from "react-router-dom";
import { default as Hamburger } from "hamburger-react";

import "../style/Header.css";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <a
        className="logo"
        href="/"
      >
        <div className="logo_wrapper"></div>
      </a>
      <nav>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={28}
        />
        {isOpen ? (
          <div className="nav_wrapper">
            <ul className="main_nav">
              <li>
                <Link
                  onClick={() => setOpen(!isOpen)}
                  to="/"
                  className="nav_link"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(!isOpen)}
                  to="/portfolio"
                  className="nav_link"
                >
                  portfolio
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(!isOpen)}
                  to="/contact"
                  className="nav_link"
                >
                  contact me
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export default Header;
