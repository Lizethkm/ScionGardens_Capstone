import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";
import Navbar from "../NavBar/NavBar";



let initialValues = {
    location: "",
    plant: "",
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
            <label className="addLabel">
                    Location:{""}
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
                </label>
                <label className="addLabel">
                    Plant:{""}
                    <input type="text" name="plant" value={formData.plant} onChange={handleInputChange} />
                </label>

                <button>Add Location</button>
            </form>
        </div>
    );
}
 
export default CreateLocation;