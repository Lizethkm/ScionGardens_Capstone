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
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data); 
    }
  };

  

  useEffect(() => {

    fetchReminders();
  }, [token]);



  // function compareDates(reminders){

  //   const today = new Date();
  //   const currentDate = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
  //   console.log("Current Date:", currentDate)


  //   debugger
  //   const expiredReminders = reminders.filter((el) => {
  //     if (el.expired_date.getFullYear() < currentDate.getFullYear && el.expired_date.getMonth() < currentDate.getMonth() && el.expired_date.getDate() < currentDate.getDate()){
  //       return true
  //     }
      
  //   })
  //   console.log("Expired Reminders", expiredReminders)
  //   setReminders(expiredReminders)

    
  // }

  
  // compareDates();





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
            {el.priority} {el.reminder} {el.expired_date} {el.plant_name}
          </p>
          
        ))}
    
      </div>      
    </div>

  );
};

export default HomePage;
