import "../style/Socials.css";
import {clsx} from "clsx"

function Socials(props) {

  const classNames = clsx([props.color, "socials_wrapper", props.className])
  return (
    <div className={classNames}>
      <a
        className="social github"
        href="https://github.com/Gamygams1234/" target="_blank"
      >
        <i className={`fa-brands fa-github ${props.color}`}></i>
      </a>
      {/* <a
        className="social twitter"
        href="/"
      >
        <i className={`fa-brands fa-twitter ${props.color}`}></i>
      </a> */}
      <a
        className="social linkedin"
        href="https://www.linkedin.com/in/gamailelburgos/" target= "_blank"
      >
        <i className={`fa-brands fa-linkedin ${props.color}`}></i>
      </a>
    </div>
  );
}

export default Socials;
