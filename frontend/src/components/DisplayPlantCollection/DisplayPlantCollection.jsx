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
            {/* <td><button className="btn btn-success btn-sm" onClick={(event) => handleEditClick(event, props.plantCollections)}> <Link to="editplant/" >Edit</Link></button></td> */}

        </tr>

     );
}
 
export default DisplayPlantCollection;