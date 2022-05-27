const EditPlantCollections = ( {editFormData, handleEditFormChange}, props) => {


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
                    Sunlight:
                    <input type="text" required = "required" name="sunlight" value={editFormData.sunlight}  onChange={handleEditFormChange} />
                </label>
            </td>
            <td>
                <label>
                    Water:
                    <input type="text" required = "required" name="water" value={editFormData.water} onChange={handleEditFormChange}/>
                </label>
            </td>
            <td>
                <label>
                    Maintenance:
                    <input type="text" required = "required" name="maintenance" value={editFormData.maintenance} onChange={handleEditFormChange}/>
                </label>
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>
    );
}
 
export default EditPlantCollections;