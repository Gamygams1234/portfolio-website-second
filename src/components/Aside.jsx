import { Link } from "react-router-dom";

import "../style/Aside.css";

function Aside() {
  return (
    <aside className="contact_footer">
      <h2 className="section_title">Interested in doing a project together?</h2>
      <span className="middleline"></span>
      <Link to="/contact">
        <button className="secondary_button">Contact me</button>
      </Link>
    </aside>
  );
}

export default Aside;
