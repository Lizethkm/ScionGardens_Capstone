import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import CreateLocation from "../../components/CreateLocations/CreateLocations";
import { Link } from "react-router-dom";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [reminders, setReminders] = useState([]);
  // const [cars, setCars] = useState([]);
  

  useEffect(() => {
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
    fetchReminders();
  }, [token]);




  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);



  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
      <h4>Reminders</h4>
      {reminders && 
      reminders.map((el) => (
        <p key={el.id}>
          {el.priority} {el.reminder} {el.expired_date} {el.plant_name}
        </p>
      ))}


    < Link to="addlocation/"> Add Location</Link>
    </div>
  );
};

export default HomePage;
