import React from "react"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import axios from "axios"

import useAuth from "../../hooks/useAuth"
import DisplayLocations from "../../components/DisplayLocations/DisplayLocations";
import CreatePlantCollection from "../../components/CreatePlantCollection/CreatePlantCollection";



const PlantCollectionPage = (props) => {
    const [user, token] = useAuth()
    const [plantCollections, setPlantCollections] = useState([]);

    useEffect(() => {
        const fetchPlantCollections = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/plantcollection/", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                setPlantCollections(response.data);
            } catch (error) {
                console.log(error.response.data); 
            }
        };
        fetchPlantCollections();
    }, [token]);


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
            <h1> Your Plant Collections!</h1>
            {/* {plantCollections &&
                plantCollections.map((el) =>(
                    <p key={el.id}>
                        {el.plant} {el.sunlight} {el.water} {el.maintenance}
                    </p>
            ))} */}
            <Link to="/addplant"> Add Plant</Link>
            <DisplayLocations plantCollections = {plantCollections} locations = {locations} />
        </div>
     );
}
 
export default PlantCollectionPage;