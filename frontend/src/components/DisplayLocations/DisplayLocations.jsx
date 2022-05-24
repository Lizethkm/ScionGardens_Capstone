




const DisplayLocations = (props) => {



    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Plant</th>
                        <th>Sunlight</th>
                        <th>Water</th>
                        <th>Maintenance</th>
                        <th>Location</th>
                        
                    </tr>

                </thead>
                <tbody>
                {props.plantCollections.map((el) =>{
                    return (
                        <tr>
                            <td>{el.plant}</td>
                            <td>{el.sunlight}</td>
                            <td>{el.water}</td>
                            <td>{el.maintenance}</td>
                        </tr>
                    )
                })}
                {props.locations.map((el) => {
                    return (
                        <tr>
                            <td>{el.location}</td>
                            <td>{el.plant_id}</td>
                        </tr>
                )
                })}
                </tbody>

            </table>

            

        </div>
     );
}
 
export default DisplayLocations;