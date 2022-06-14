import React, { useState } from 'react';
import {BiSort} from "react-icons/bi"
import { Link } from 'react-router-dom';




const SortTable = (props) => {

    const[sort, setSort] = useState("ASC")

    const sorting = (col) =>{
        if(sort === "ASC"){
            const sorted = [...props.homeLocations].sort((a,b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1

            );
            props.setHomeLocations(sorted)
            setSort("DSC")
        }
        if(sort === "DSC"){
            const sorted = [...props.homeLocations].sort((a,b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1

            );
            props.setHomeLocations(sorted)
            setSort("ASC")
        }
    }


    return (  
        <div className="container">
        <div className="container table-responsive home">
            <table className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th onClick={() => sorting("plant_name")} scope="col"><Link to="/plantcollections" style={{textDecoration: "none", color: "white"}}>Plant</Link><BiSort /></th>
                        <th onClick={() => sorting("location")} scope="col"><Link to="/locations" style={{textDecoration: "none", color: "white"}} >Location</Link><BiSort /></th>
                        <th scope="col">Actions</th>
                        
                    </tr>

                </thead>
                <tbody>
                    {props.homeLocations.map((el) =>(
                    
                        <tr key={el.id}>
                        <td>{el.plant_name}</td> 
                        <td>{el.location}</td> 
                        <td><Link to="/reminders"><button>Reminder</button></Link></td>
                        </tr> 

                                        
                    ))}

                </tbody>
                <caption><h1> Quick View</h1></caption>
            </table>
        </div>
       
        
    </div>
    );
}
 
export default SortTable;