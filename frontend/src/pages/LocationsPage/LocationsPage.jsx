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
import CreateLocation from "../../components/CreateLocations/CreateLocations";
import {BiSort} from "react-icons/bi"





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

    const handleCancelClick = () =>{
        setEditLocationId(null);
    }

    const handleDeleteClick = (location) =>{

        
        let response = axios.delete(`http://127.0.0.1:8000/api/locations/${location}/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })


        fetchLocations();
        alert("Delete Successful")
    }

    const[sort, setSort] = useState("ASC")

    const sorting = (col) =>{
        if(sort === "ASC"){
            const sorted = [...locations].sort((a,b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1

            );
            setLocations(sorted)
            setSort("DSC")
        }
        if(sort === "DSC"){
            const sorted = [...locations].sort((a,b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1

            );
            setLocations(sorted)
            setSort("ASC")
        }
    }




    return ( 
        <div className="locationsPage">
            < Navbar />

            <form onSubmit={handleEditFormSubmit}>
            <div className="container table-responsive">
                <table className="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th onClick={() => sorting("plant_name")} scope="col">Plant <BiSort /></th>
                            <th onClick={() => sorting("location")} scope="col">Location <BiSort /></th>
                            <th scope="col">Actions</th>
                            
                        </tr>

                    </thead>
                    <tbody>
                        {locations.map((location) =>(
                        <Fragment>
                            {editLocationId === location.id ? (
                                < EditLocations editFormData = {editFormData} handleEditFormChange = {handleEditFormChange} handleCancelClick = {handleCancelClick} />
                            ) : (
                                < DisplayLocations location = {location} locations = {locations} handleEditClick = {handleEditClick}  handleDeleteClick = {handleDeleteClick} />
                            )}               
                        </Fragment>                      
                        ))}
                    </tbody>
                    <caption><h1>{user.username} Locations</h1></caption>
                </table>
                
            </div>
        
            </form>
            < CreateLocation fetchLocations ={fetchLocations} />
    </div>
    );
}
 
export default LocationsPage;