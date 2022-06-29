import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import logo from "../../assests/logo.png"




const LoginNavBar = (props) => {

    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
      <div className="navBar">
        <ul>
          <li>
            < Link to="/">
              <img className="logo" src={logo} alt="Logo Image" />
            </Link>
          </li>
          <li className="brand">
            <Link to="/" style={{ textDecoration: "none", color: "#FFAE00 "}}>
              <h2 className="navBarLabel">Scion Gardens</h2>
              
            </Link>
          </li>
          <li>
            <Link to="/aboutus" style={{ textDecoration: "none", color: "#FFAE00 "}}>
              <h2 className="navBarLabel">About Us</h2>
            </Link>
          </li>
  
          <li>
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </ul>
        
      </div>
    );

}
 
export default LoginNavBar;