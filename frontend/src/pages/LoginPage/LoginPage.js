import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import LoginNavBar from "../../components/NavBar/LoginNavBar";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div> 
      < LoginNavBar />

      <div className="loginPage">
        
            <div className="container" >
              <form className="form" onSubmit={handleSubmit}>

                <label>
                  Username:{" "}
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Password:{" "}
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </label>
                {isServerError ? (
                  <p className="error">Login failed, incorrect credentials!</p>
                ) : null} 
                <button className="loginButton">Login</button>
                <button className="loginButton"><Link style={{ textDecoration: "none", color: "green"}} to="/register">Register</Link></button>
              </form>
              
              
            </div>              
          </div>      
    </div>
   
  );
};

export default LoginPage;
