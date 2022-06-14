


const EditLocations = ({editFormData, handleEditFormChange, handleCancelClick}, props) => {
    return ( 
        <tr>
        <td>
            <label>
                Plant:
                <input type="text" required = "required" name="plant_name" value={editFormData.plant_name} onChange={handleEditFormChange}/>
            </label>
        </td>
        <td>
            <label>
                Location:
                <input type="text" required = "required" name="location" value={editFormData.location}  onChange={handleEditFormChange} />
            </label>
        </td>
        <td>
            <button type="submit">Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
    );
}
 
export default EditLocations;