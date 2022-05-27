import { Link } from "react-router-dom";



const DisplayPlantCollection = ({plantCollection, handleEditClick}, props) => {



    return ( 


        <tr>
            <td>{plantCollection.plant}</td>
            <td>{plantCollection.sunlight}</td>
            <td>{plantCollection.water}</td>
            <td>{plantCollection.maintenance}</td>
            <td>
                <button type ="button" onClick={(event) => handleEditClick(event, plantCollection)}>Edit</button>
            </td>
            

        </tr>

     );
}
 
export default DisplayPlantCollection;