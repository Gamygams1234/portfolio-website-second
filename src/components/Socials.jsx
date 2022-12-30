import "../style/Socials.css";

function Socials(props) {
  return (
    <div className="socials_wrapper">
      <a
        className="social github"
        href="/"
      >
        <i className={`fa-brands fa-github ${props.color}`}></i>
      </a>
      <a
        className="social twitter"
        href="/"
      >
        <i className={`fa-brands fa-twitter ${props.color}`}></i>
      </a>
      <a
        className="social linkedin"
        href="/"
      >
        <i className={`fa-brands fa-linkedin ${props.color}`}></i>
      </a>
    </div>
  );
}

export default Socials;
