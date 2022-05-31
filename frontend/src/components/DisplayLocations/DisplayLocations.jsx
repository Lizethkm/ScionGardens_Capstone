




const DisplayLocations = ({location}, props) => {
    return ( 

        <tr>
            <td>{location.plant}</td>
            <td>{location.location}</td>
            <td>
                <button type ="button" >Edit</button>
                <button type="button" >Delete</button>
            </td>
{/* for edit button onClick={(event) => handleEditClick(event, location)} */}
{/* for delete button onClick={(event) => handleDeleteClick(location.id)} */}
        

    </tr>

    
    );
}
 
export default DisplayLocations;