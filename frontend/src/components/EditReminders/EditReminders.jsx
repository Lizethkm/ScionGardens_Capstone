


const EditReminders = ({editFormData, handleEditFormChange, handleCancelClick}, props) => {
    return ( 
        <tr>
        <td>
            <label>
                Priority:
                <input type="text" required = "required" name="priority" value={editFormData.priority} onChange={handleEditFormChange}/>
            </label>
        </td>
        <td>
            <label>
                Plant:
                <input type="text" required = "required" name="plant_plant" value={editFormData.plant_plant} onChange={handleEditFormChange}/>
            </label>
        </td>
        <td>
            <label>
                Reminder:
                <input type="text" required = "required" name="reminder" value={editFormData.reminder}  onChange={handleEditFormChange} />
            </label>
        </td>
        <td>
            <label>
                Expiration Date:
                <input type="date" required = "required" name="expired_date" value={editFormData.expired_date}  onChange={handleEditFormChange} />
            </label>
        </td>
        <td>
            <button type="submit">Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
    );
}
 
export default EditReminders;