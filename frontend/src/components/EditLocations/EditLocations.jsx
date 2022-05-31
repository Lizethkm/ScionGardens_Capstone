


const EditLocations = ({editFormData, handleEditFormChange}, props) => {
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
                Location:
                <input type="text" required = "required" name="location" value={editFormData.location}  onChange={handleEditFormChange} />
            </label>
        </td>
        <td>
            <button type="submit">Save</button>
        </td>
    </tr>
    );
}
 
export default EditLocations;