import { Link } from "react-router-dom";
import React, {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../style/Aside.css";

function Aside() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <aside className="contact_footer">
      <h2 data-aos="fade-right" className="section_title">Interested in doing a project together?</h2>
      <span className="middleline"></span>
      <Link data-aos="fade-left" to="/contact">
        <button className="secondary_button">Contact me</button>
      </Link>
    </aside>
  );
}

export default Aside;
