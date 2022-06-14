import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth"



let initialValues = {
    plant: "",
    sunlight: "",
    water: "",
    maintenance: "",
}

const CreatePlantCollection = (props) => {

    const [user, token] = useAuth()

    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(initialValues, postNewPlantCollection)

    async function postNewPlantCollection(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/plantcollection/", formData, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            props.fetchPlantCollections()
            reset();

        } catch (error) {
            console.log(error.response.data)
            
        }
    }
    


    return ( 
        <div className="container">

            <form className="form add" onSubmit={handleSubmit}>
                <label >
                    Plant:{""}
                    <input type="text" name="plant" value={formData.plant} onChange={handleInputChange} />
                </label>
                <label >
                    Sunlight:{""}
                    <input type="text" name="sunlight" value={formData.sunlight} onChange={handleInputChange} />
                </label>
                <label >
                    Water:{""}
                    <input type="text" name="water" value={formData.water} onChange={handleInputChange} />
                </label>
                <label >
                    Maintenance:{""}
                    <input type="text" name="maintenance" value={formData.maintenance} onChange={handleInputChange} />
                </label>
                <button className="addButton">Add Plant</button>
            </form>
        </div>
    );
}
 
export default CreatePlantCollection;