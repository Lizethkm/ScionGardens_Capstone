



const DisplayPlantCollection = ({plantCollection, handleEditClick, handleDeleteClick}, props) => {



    return ( 
        


        <tr scope="row">
            
            <td>{plantCollection.plant}</td>
            <td>{plantCollection.sunlight}</td>
            <td>{plantCollection.water}</td>
            <td>{plantCollection.maintenance}</td>
            <td>
                <button type ="button" onClick={(event) => handleEditClick(event, plantCollection)}>Edit</button>
                <button type="button" onClick={(event) => handleDeleteClick(plantCollection.id)}>Delete</button>
            </td>

            

        </tr>

     );
}
 
export default DisplayPlantCollection;