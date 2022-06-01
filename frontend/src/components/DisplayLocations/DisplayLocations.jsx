




const DisplayLocations = ({location, handleEditClick, handleDeleteClick}, props) => {
    return ( 

        <tr >
            <td scope="row">{location.plant}</td>
            <td scope="row">{location.location}</td>
            <td scope="row">
                <button type ="button" onClick={(event) => handleEditClick(event, location)} >Edit</button>
                <button type="button" onClick={(event) => handleDeleteClick(location.id)} >Delete</button>
            </td>
    </tr>

    
    );
}
 
export default DisplayLocations;