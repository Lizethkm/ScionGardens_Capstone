


const EditReminders = ({editFormData, handleEditFormChange}, props) => {
    return ( 
        <tr>
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
            <button type="submit">Save</button>
        </td>
    </tr>
    );
}
 
export default EditReminders;