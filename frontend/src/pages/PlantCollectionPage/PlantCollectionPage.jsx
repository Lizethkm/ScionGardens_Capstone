import React from "react"
import { useState, useEffect } from 'react';

import axios from "axios"

import useAuth from "../../hooks/useAuth"



const PlantCollectionPage = () => {
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


    return ( 
        <div>
            <h1> Your Plant Collections!</h1>
            {plantCollections &&
                plantCollections.map((el) =>(
                    <p key={el.id}>
                        {el.plant} {el.sunlight} {el.water} {el.maintenance}
                    </p>
                ))}
        </div>
     );
}
 
export default PlantCollectionPage;