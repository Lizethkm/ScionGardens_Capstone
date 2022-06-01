import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import logo from "../../assests/logo.png"


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "gold" }}>
            <h3>Scion Gardens</h3>
            <img src={logo} alt="Logo Image" style={{width: 200, height: 200}}></img>
          </Link>
        </li>
        <li className="plantCollections">
          <Link to="/plantcollections" style={{textDecoration: "none", color: "white"}}>Plant Collections</Link>
        </li>
        <li className="locations">
          <Link to="/locations" style={{textDecoration: "none", color: "white"}}>Locations</Link>
        </li>
        <li className="reminders">
          <Link to="/reminders" style={{textDecoration: "none", color: "white"}}>Reminders</Link>
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
};

export default Navbar;
