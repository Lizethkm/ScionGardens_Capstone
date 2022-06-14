import axios from "axios";
import { Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";




let initialValues = {
    location: "",
    plant_name: "",
}


const CreateLocation = (props) => {
   const [user, token] = useAuth()

   const [formData, handleInputChange, handleSubmit, reset ] = useCustomForm(initialValues, postNewLocations)

   async function postNewLocations(){
       try {
           let response = await axios.post("http://127.0.0.1:8000/api/locations/", formData, {
               headers: {
                   Authorization: "Bearer " + token
               }
           })
           props.fetchLocations();
           reset();
       } catch (error) {
           console.log(error.response.data)
       }
   }
   
   
   
   
    return ( 
        <div className="container">

            <form className="form add" onSubmit={handleSubmit}>
                <label>
                    Location:{""}
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
                </label>
                <label>
                    Plant:{""}
                    <input type="text" name="plant_name" value={formData.plant_name} onChange={handleInputChange} />
                </label>
                <button>Add Location</button>
                
            </form>
            
        </div>
    );
}
 
export default CreateLocation;