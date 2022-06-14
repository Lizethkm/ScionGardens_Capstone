import React, { useState } from 'react';
import {BiSort} from "react-icons/bi"









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
        <table className="table table-sm table-dark">
            <thead>
                <tr>
                    <th onClick={() => sorting("plant_name")} scope="col">Plant <BiSort /></th>
                    <th onClick={() => sorting("location")} scope="col">Location <BiSort /></th>
                    {/* <th scope="col">Reminder</th> */}
                    <th scope="col">Actions</th>
                    
                </tr>

            </thead>
            <tbody>
                {props.homeLocations.map((el) =>(
                
                    <tr key={el.id}>
                       <td>{el.plant_name}</td> 
                       <td>{el.location}</td> 
                    </tr> 

                                      
                ))}

            </tbody>
            {/* <tbody>
                {props.reminders.filter((el) => {
                    debugger
                    if (el.plant_plant === props.homeLocations.plant_name.map((el) => {
                        return el.plant_name
                    })){
                        return true
                    }
                }).map((el) => {
                    <tr key={el.id}>
                        <td>{el.reminder}</td>
                    </tr>
                })}
            </tbody> */}
            <caption><h1>Locations</h1></caption>
        </table>
        
    </div>
    );
}
 
export default SortTable;