import React from "react"
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import axios from "axios"

import useAuth from "../../hooks/useAuth"
import DisplayPlantCollection from "../../components/DisplayPlantCollection/DisplayPlantCollection";
import { Fragment } from "react/cjs/react.production.min";
import EditPlantCollections from "../../components/EditPlantCollection/EditPlantCollection";
import "./PlantCollectionPage.css"
import Navbar from "../../components/NavBar/NavBar";
import CreatePlantCollection from "../../components/CreatePlantCollection/CreatePlantCollection";
import {BiSort} from "react-icons/bi"





const PlantCollectionPage = (props) => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [plantCollections, setPlantCollections] = useState([]);



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

    useEffect(() => {
        fetchPlantCollections()
    }, [token]);




    const [editPlantCollectionId, setEditPlantCollectionId] = useState(null);

    const handleEditClick = (event, plantCollection) => {
    
        event.preventDefault();
        setEditPlantCollectionId(plantCollection.id);

        const formValues = {
            plant: plantCollection.plant,
            sunlight: plantCollection.sunlight,
            water: plantCollection.water,
            maintenance: plantCollection.maintenance,
        }

        setEditFormData(formValues);
    }

    const [editFormData, setEditFormData] = useState({
            plant: "",
            sunlight: "",
            water: "",
            maintenance: "",
        })

    const handleEditFormChange = (event) =>{

        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue= event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);

    }; 

    const handleEditFormSubmit = async(event) => {

        event.preventDefault();

        const editedPlantCollection = {
            id: editPlantCollectionId,
            plant: editFormData.plant,
            sunlight: editFormData.sunlight,
            water: editFormData.water,
            maintenance: editFormData.maintenance,
        }


        
        let response = await axios.put(`http://127.0.0.1:8000/api/plantcollection/${editedPlantCollection.id}/`, editedPlantCollection, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        setEditPlantCollectionId(null);
        setEditFormData(null);
        await fetchPlantCollections();

     
    }

    const handleCancelClick = () =>{
        setEditPlantCollectionId(null);
    }

    const handleDeleteClick = async(plantCollection) => {
        

        let response = axios.delete(`http://127.0.0.1:8000/api/plantcollection/${plantCollection}/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        fetchPlantCollections();

    }

    const[sort, setSort] = useState("ASC")

    const sorting = (col) =>{
        if(sort === "ASC"){
            const sorted = [...plantCollections].sort((a,b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1

            );
            setPlantCollections(sorted)
            setSort("DSC")
        }
        if(sort === "DSC"){
            const sorted = [...plantCollections].sort((a,b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1

            );
            setPlantCollections(sorted)
            setSort("ASC")
        }
    }





    return ( 
        
        
        <div className="plantPage" >
            < Navbar />
            <form onSubmit={handleEditFormSubmit} >
                <div className="container table-responsive">
                    <table className="table table-sm table-dark">
                    <thead>
                        
                        <tr>
                            <th onClick={() => sorting("plant")} scope="col">Plant <BiSort /></th>
                            <th onClick={() => sorting("sunlight")} scope="col">Sunlight <BiSort /></th>
                            <th onClick={() => sorting("water")} scope="col">Water <BiSort /></th>
                            <th onClick={() => sorting("maintenance")} scope="col">Maintenance <BiSort /></th>
                            <th scope="col">Actions</th>
                            
                        </tr>

                    </thead>
                    <tbody>
                        {plantCollections.map((plantCollection) =>(
                        <Fragment>
                            {editPlantCollectionId === plantCollection.id ? (
                                <EditPlantCollections editFormData = {editFormData} handleEditFormChange = {handleEditFormChange} handleCancelClick = {handleCancelClick} />
                            ) : (
                                <DisplayPlantCollection plantCollection = {plantCollection} plantCollections = {plantCollections} handleEditClick = {handleEditClick} handleDeleteClick= {handleDeleteClick} />
                            )}
                        </Fragment>
                        ))}
                    </tbody>
                    <caption><h1>{user.username} Plant Collections</h1></caption>
                </table>
                </div>
                                            
            </form> 
            < CreatePlantCollection fetchPlantCollections = {fetchPlantCollections} />   
                
        </div>   



            
            
     );
}
 
export default PlantCollectionPage;