import "./Footer.css";
import logo from "../../assests/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
        < Link to="/" style={{textDecoration: "none"}}>
      <img className="footerLogo" src={logo} alt="Logo Image"></img>
      <p>Scion Gardens © 2022</p>{" "}        
      </Link>
        </li>
      </ul>


    </footer>
  );
};

export default Footer;
