import React from "react"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import DisplayReminders from "../../components/DisplayReminders/DisplayReminders";
import EditReminders from "../../components/EditReminders/EditReminders";
import "./RemindersPage.css"
import Navbar from "../../components/NavBar/NavBar";



const ReminderPage = (props) => {

    const [user, token] = useAuth()
    const [reminders, setReminders] = useState([]);


    const fetchReminders = async () => {
        try {
            let reminder = await axios.get("http://127.0.0.1:8000/api/reminders/", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            setReminders(reminder.data);
        } catch (error) {
            console.log(error.reminder.data);
        }
    };

    useEffect(() => {
        fetchReminders();
    }, [token]);

    const [editReminderId, setEditReminderId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        priority: "",
        plant_plant: "",
        reminder: "",
        expired_date: "",
    })

    const handleEditClick = (event, reminder) => {
        event.preventDefault();
        setEditReminderId(reminder.id); 

        const formValues = {
            priority: reminder.priority,
            plant_plant: reminder.plant_plant,
            reminder: reminder.reminder,
            expired_date: reminder.expired_date,
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

        const editedReminder = {
            id: editReminderId,
            priority: editFormData.priority,
            plant_plant: editFormData.plant_plant,
            reminder: editFormData.reminder,
            expired_date: editFormData.expired_date,
        }

        let response = axios.put(`http://127.0.0.1:8000/api/reminders/${editedReminder.id}/`, editedReminder, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        setEditReminderId(null);
        setEditFormData(null);
        fetchReminders(); 
    };

    const handleDeleteClick = (reminder) =>{

        
        let response = axios.delete(`http://127.0.0.1:8000/api/reminders/${reminder}/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        
        fetchReminders();
        
    }




    return ( 
        <div className="remindersPage">
            < Navbar />
            
        
        <form onSubmit={handleEditFormSubmit}>
        <div className="container table-responsive">
            <table className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th scope="col">Priority</th>
                        <th scope="col">Plant</th>
                        <th scope="col">Reminder</th>
                        <th scope="col">Expiration Date</th>
                        <th scope="col">Actions</th>
                        
                    </tr>

                </thead>
                <tbody>
                    {reminders.map((reminder) =>(
                    <Fragment>
                        {editReminderId === reminder.id ? (
                            < EditReminders editFormData = {editFormData} handleEditFormChange = {handleEditFormChange} />
                        ) : (
                            < DisplayReminders reminder = {reminder} reminders = {reminders} handleEditClick = {handleEditClick} handleDeleteClick = {handleDeleteClick} />
                        )}               
                    </Fragment>                      
                    ))}
                </tbody>
                <caption><h1>{user.username} Reminders</h1></caption>
            </table>
            
        </div>
        <div className="container">
         <Link style={{ textDecoration: "none", color: "#FFAE00 "}} to="/addReminder"><button className="addButton">Add Reminder</button> </Link>
        </div>
        
        
        </form>
        
        
    </div>
    );
}
 
export default ReminderPage;