import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

import "./HomePage.css"
import Navbar from "../../components/NavBar/NavBar";
import UpcomingReminders from "../../components/UpcomingReminders/UpcomingReminders";
import SortTable from "../../components/SortTable/SortTable";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [reminders, setReminders] = useState([]);

  const [homeLocations, setHomeLocations] = useState([]);
  

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

  const fetchHomeLocations = async () => {
    try {
        let locations = await axios.get("http://127.0.0.1:8000/api/locations/", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        setHomeLocations(locations.data);
    } catch (error) {
        console.log(error.locations.data);
    }
  };

  useEffect(() => {
      fetchHomeLocations();
  }, [token]);




  return (
    <div className="homePage">
      < Navbar />
      <div className="container">

        <h1 className="homeGreeting">Welcome {user.username}!</h1>

        

        <div class="list-group">
          <a href="/reminders" class="list-group-item list-group-item-dark">
          <h3 className="h3"> Expired Reminders</h3>
          </a>
          <a href="/reminders" class="list-group-item list-group-item-action">
          {reminders && 
            reminders.filter((el) =>{
              if(el.expired_date < el.updated_date){
                return true
              }
            }).map((el) => (
              <div key={el.id}>
                <a href="/reminders" class="list-group-item list-group-item-danger">
                  {el.reminder} {el.plant_plant} {el.expired_date}</a>
                
              </div>
              
            ))}

          </a>
        
        </div>



      </div> 
      < SortTable homeLocations = {homeLocations} setHomeLocations = {setHomeLocations} reminders = {reminders}/>
      {/* < UpcomingReminders reminders = {reminders} />      */}
    </div>

  );
};

export default HomePage;
