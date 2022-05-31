import React from "react"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import DisplayReminders from "../../components/DisplayReminders/DisplayReminders";
import EditReminders from "../../components/EditReminders/EditReminders";


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
        plant: "",
        reminder: ""
    })

    const handleEditClick = (event, reminder) => {
        event.preventDefault();
        setEditReminderId(reminder.id); 

        const formValues = {
            plant: reminder.plant,
            Reminder: reminder.reminder,
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
            plant: editFormData.plant,
            Reminder: editFormData.reminder
        }

        let response = axios.put(`http://127.0.0.1:8000/api/reminders/${editedReminder.id}/`, editedReminder, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        setEditReminderId(null);
        setEditFormData(null);
        fetchReminders(); 
    };

    const handleDeleteClick = (reminder) =>{

        
        let response = axios.delete(`http://127.0.0.1:8000/api/reminder/${reminder}/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })


        fetchReminders();
        alert("Delete Successful")
    }




    return ( 
        <div>
        <h1>Your reminder!</h1>
        <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Plant</th>
                        <th>Reminder</th>
                        <th>Actions</th>
                        
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
            </table>
        </form>
        <Link to="/addReminder"> Add Reminder</Link>
        
    </div>
    );
}
 
export default ReminderPage;