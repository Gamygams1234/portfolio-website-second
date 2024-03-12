import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { default as Hamburger } from "hamburger-react";

import "../style/Header.css";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="header_wrapper">
      <header>
        <a className="logo" href="/">
          <div className="logo_wrapper"></div>
        </a>
        {width < breakpoint ? (
          <nav>
            <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
            {isOpen ? (
              <div className="nav_wrapper">
                <ul className="main_nav">
                  <li>
                    <Link onClick={() => setOpen(!isOpen)} to="/" className="nav_link">
                      home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setOpen(!isOpen)} to="/portfolio" className="nav_link">
                      portfolio
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setOpen(!isOpen)} to="/contact" className="nav_link">
                      contact me
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setOpen(!isOpen)} to="/resume" className="nav_link">
                      resume
                    </Link>
                  </li>
                  <li>
                <a className="social github" href="https://github.com/Gamygams1234/" target="_blank">
                  <i className={`fa-brands fa-github black`}></i> <span>Github</span>
                </a>
              </li>

              <li>
                <a className="social linkedin" href="https://www.linkedin.com/in/gamailelburgos/" target="_blank">
                  <i className={`fa-brands fa-linkedin black`}></i> <span>Linkedin</span>
                </a>
              </li>
                </ul>
              </div>
            ) : null}
          </nav>
        ) : (
          <nav>
            <ul className="desktop_nav">
              <li>
                <Link to="/" className="nav_link">
                  home
                </Link>
              </li>
              <li>
                <NavLink to="/portfolio" className="nav_link">
                  portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav_link">
                  contact me
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" className="nav_link">
                  resume
                </NavLink>
              </li>

              <li>
                <a className="social github" href="https://github.com/Gamygams1234/" target="_blank">
                  <i className={`fa-brands fa-github black`}></i>
                </a>
              </li>

              <li>
                <a className="social linkedin" href="https://www.linkedin.com/in/gamailelburgos/" target="_blank">
                  <i className={`fa-brands fa-linkedin black`}></i>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;
