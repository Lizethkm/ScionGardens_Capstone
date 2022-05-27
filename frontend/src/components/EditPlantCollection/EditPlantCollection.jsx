import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';




const EditPlantCollections = ({editFormData, handleEditFormChange}) => {

    // const navigate = useNavigate()
    // const [user, token] = useAuth()

    // async function editPlantCollection(plantclollectionPk){
    //     debugger
    //     try {
    //         let response = await axios.put(`http://127.0.0.1:8000/api/plantcollection/${plantclollectionPk}/`, {
    //             headers: {
    //                 Authorization: "Bearer " + token
    //             }
    //         })
    //         navigate("/plantcollections")
    //     } catch (error) {
    //         console.log(error.response.data)
            
    //     }
    // }
    


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