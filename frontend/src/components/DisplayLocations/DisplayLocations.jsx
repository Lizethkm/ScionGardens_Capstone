




const DisplayLocations = ({location, handleEditClick, handleDeleteClick}, props) => {
    return ( 

        <tr>
            <td>{location.plant}</td>
            <td>{location.location}</td>
            <td>
                <button type ="button" onClick={(event) => handleEditClick(event, location)} >Edit</button>
                <button type="button" onClick={(event) => handleDeleteClick(location.id)} >Delete</button>
            </td>
    </tr>

    
    );
}
 
export default DisplayLocations;