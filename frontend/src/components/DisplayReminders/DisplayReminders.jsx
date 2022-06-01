


const DisplayReminders = ({reminder, handleEditClick, handleDeleteClick}, props) => {
    return ( 

        <tr scope="row">
            <td>{reminder.priority}</td>
            <td>{reminder.plant_plant}</td>
            <td>{reminder.reminder}</td>
            <td>{reminder.expired_date}</td>
            <td>
                <button type ="button" onClick={(event) => handleEditClick(event, reminder)} >Edit</button>
                <button type="button" onClick={(event) => handleDeleteClick(reminder.id)} >Delete</button>
            </td>
    </tr>

    
    );
}
 
export default DisplayReminders;