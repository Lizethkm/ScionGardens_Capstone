import React from "react"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import DisplayLocations from "../../components/DisplayLocations/DisplayLocations";
import EditLocations from "../../components/EditLocations/EditLocations";
import "./LocationsPage.css"
import Navbar from "../../components/NavBar/NavBar";





const LocationsPage = (props) => {

    const [user, token] = useAuth()
    const [locations, setLocations] = useState([]);


    const fetchLocations = async () => {
        try {
            let locations = await axios.get("http://127.0.0.1:8000/api/locations/", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            setLocations(locations.data);
        } catch (error) {
            console.log(error.locations.data);
        }
    };

    useEffect(() => {
        fetchLocations();
    }, [token]);

    const [editLocationId, setEditLocationId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        plant_name: "",
        location: ""
    })

    const handleEditClick = (event, location) => {
        event.preventDefault();
        setEditLocationId(location.id); 

        const formValues = {
            plant_name: location.plant_name,
            location: location.location,
        }

        setEditFormData(formValues)
    }  

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData)
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedLocation = {
            id: editLocationId,
            plant_name: editFormData.plant_name,
            location: editFormData.location
        }

        let response = axios.put(`http://127.0.0.1:8000/api/locations/${editedLocation.id}/`, editedLocation, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        setEditLocationId(null);
        setEditFormData(null);
        fetchLocations(); 
    };

    const handleDeleteClick = (location) =>{

        
        let response = axios.delete(`http://127.0.0.1:8000/api/locations/${location}/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })


        fetchLocations();
        alert("Delete Successful")
    }




    return ( 
        <div className="locationsPage">
            < Navbar />

            <form onSubmit={handleEditFormSubmit}>
                <table className="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Plant</th>
                            <th scope="col">Location</th>
                            <th scope="col">Actions</th>
                            
                        </tr>

                    </thead>
                    <tbody>
                        {locations.map((location) =>(
                        <Fragment>
                            {editLocationId === location.id ? (
                                < EditLocations editFormData = {editFormData} handleEditFormChange = {handleEditFormChange} />
                            ) : (
                                < DisplayLocations location = {location} locations = {locations} handleEditClick = {handleEditClick} handleDeleteClick = {handleDeleteClick} />
                            )}               
                        </Fragment>                      
                        ))}
                    </tbody>
                    <caption><h1>{user.username} Locations</h1></caption>
                </table>
           
            </form>

            <button><Link  to="/addlocation" > Add Location</Link></button> 
    </div>
    );
}
 
export default LocationsPage;