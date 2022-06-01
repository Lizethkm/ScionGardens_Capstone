import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

import "./HomePage.css"


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [reminders, setReminders] = useState([]);

  

  const fetchReminders = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/reminders/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setReminders(response.data);
    } catch (error) {
      console.log(error.response.data); 
    }
  };

  

  useEffect(() => {

    fetchReminders();
  }, [token]);






  return (
    <div className="homePage">
      <div className="container">

        <h1 className="homeGreeting">Welcome {user.username}!</h1>

        <h3> Expired Reminders</h3>

        {reminders && 
        reminders.filter((el) =>{
          if(el.expired_date < el.updated_date){
            return true
          }
        }).map((el) => (
          <p key={el.id}>
            {el.reminder} {el.plant_plant} {el.expired_date} 
          </p>
          
        ))}
    
      </div>      
    </div>

  );
};

export default HomePage;
