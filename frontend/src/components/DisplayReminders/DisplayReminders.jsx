


const DisplayReminders = ({reminder, handleEditClick, handleDeleteClick}, props) => {
    return ( 

        <tr>
            <td>{reminder.plant}</td>
            <td>{reminder.reminder}</td>
            <td>
                <button type ="button" onClick={(event) => handleEditClick(event, reminder)} >Edit</button>
                <button type="button" onClick={(event) => handleDeleteClick(reminder.id)} >Delete</button>
            </td>
    </tr>

    
    );
}
 
export default DisplayReminders;