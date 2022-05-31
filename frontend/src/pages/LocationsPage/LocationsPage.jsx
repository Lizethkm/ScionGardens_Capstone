import React from "react"
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import DisplayLocations from "../../components/DisplayLocations/DisplayLocations";





const LocationsPage = (props) => {

    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [locations, setLocations] = useState([]);


    useEffect(() => {
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
        fetchLocations();
    }, [token]);



    return ( 
        <div>
        <h1>Your Locations!</h1>
        <form >
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
                        <DisplayLocations location = {location} locations = {locations} />
                ))}
            </tbody>
        </table>
        </form>
        <Link to="/addlocation"> Add Location</Link>
        
    </div>
    );
}
 
export default LocationsPage;