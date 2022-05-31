import React from "react"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import DisplayLocations from "../../components/DisplayLocations/DisplayLocations";
import EditLocations from "../../components/EditLocations/EditLocations";





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
        plant: "",
        location: ""
    })

    const handleEditClick = (event, location) => {
        event.preventDefault();
        setEditLocationId(location.id); 

        const formValues = {
            plant: location.plant,
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
            plant: editFormData.plant,
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




    return ( 
        <div>
        <h1>Your Locations!</h1>
        <form onSubmit={handleEditFormSubmit}>
        <table>
            <thead>
                <tr>
                    <th>Plant</th>
                    <th>Location</th>
                    <th>Actions</th>
                    
                </tr>

            </thead>
            <tbody>
                {locations.map((location) =>(
                <Fragment>
                    {editLocationId === location.id ? (
                        < EditLocations editFormData = {editFormData} handleEditFormChange = {handleEditFormChange} />
                    ) : (
                        < DisplayLocations location = {location} locations = {locations} handleEditClick = {handleEditClick} />
                    )}               
                </Fragment>                      
                ))}
            </tbody>
        </table>
        </form>
        <Link to="/addlocation"> Add Location</Link>
        
    </div>
    );
}
 
export default LocationsPage;