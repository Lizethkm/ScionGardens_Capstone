


const EditReminders = ({editFormData, handleEditFormChange}, props) => {
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
                <input type="text" required = "required" name="plant" value={editFormData.plant} onChange={handleEditFormChange}/>
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
        </td>
    </tr>
    );
}
 
export default EditReminders;