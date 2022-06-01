import "./Footer.css";
import logo from "../../assests/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      < Link to="/" style={{textDecoration: "none"}}>
      <img className="footerLogo" src={logo} alt="Logo Image"></img>
      <p>Scion Gardens © 2022</p>{" "}        
      </Link>

    </footer>
  );
};

export default Footer;
