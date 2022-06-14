import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";
import Navbar from "../NavBar/NavBar";



let initialValues = {
    location: "",
    plant_name: "",
}


const CreateLocation = (props) => {
   const [user, token] = useAuth()
   const navigate = useNavigate()
   const [formData, handleInputChange, handleSubmit ] = useCustomForm(initialValues, postNewLocations)

   async function postNewLocations(){
       try {
           let response = await axios.post("http://127.0.0.1:8000/api/locations/", formData, {
               headers: {
                   Authorization: "Bearer " + token
               }
           })
           navigate("/locations")
       } catch (error) {
           console.log(error.response.data)
       }
   }
   
   
   
   
    return ( 
        <div className="container">
            < Navbar />
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Location:{""}
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
                </label>
                <label>
                    Plant:{""}
                    <input type="text" name="plant_name" value={formData.plant_name} onChange={handleInputChange} />
                </label>
                <button>Add Location</button>
                <Link to="/locations"><button>Cancel</button></Link>
                
            </form>
            
        </div>
    );
}
 
export default CreateLocation;