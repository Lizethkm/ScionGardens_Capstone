




const DisplayLocations = ({location, handleEditClick}, props) => {
    return ( 

        <tr>
            <td>{location.plant}</td>
            <td>{location.location}</td>
            <td>
                <button type ="button" onClick={(event) => handleEditClick(event, location)} >Edit</button>
                <button type="button" >Delete</button>
            </td>

{/* for delete button onClick={(event) => handleDeleteClick(location.id)} */}
        

    </tr>

    
    );
}
 
export default DisplayLocations;