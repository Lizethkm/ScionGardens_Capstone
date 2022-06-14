import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";




let initialValues = {
    priority: "",
    plant: "",
    reminder: "",
    expired_date: "",
}


const CreateReminders = (props) => {
   const [user, token] = useAuth()
   const [formData, handleInputChange, handleSubmit, reset ] = useCustomForm(initialValues, postNewReminders)

   async function postNewReminders(){
       try {
           let response = await axios.post("http://127.0.0.1:8000/api/reminders/", formData, {
               headers: {
                   Authorization: "Bearer " + token
               }
           })
           props.fetchReminders();
           reset();
       } catch (error) {
           console.log(error.response.data)
       }
   }
   
   
   
   
    return ( 
        <div className="container">

            <div className="container">
                    
                    <form className="form add" onSubmit={handleSubmit}>
                        <label>
                                Priority:{""}
                                <input type="text" name="priority" value={formData.priority} onChange={handleInputChange} />
                            </label>
                            <label>
                                Plant:{""}
                                <input type="text" name="plant_plant" value={formData.plant_plant} onChange={handleInputChange} />
                            </label>
                            <label>
                                Reminder:{""}
                                <input type="text" name="reminder" value={formData.reminder} onChange={handleInputChange} />
                            </label>
                            <label>
                                Expiration Date:{""}
                                <input type="date" name="expired_date" value={formData.expired_date} onChange={handleInputChange} />
                            </label>

                            <button className="addButton">Add Reminder</button>
                    </form>
                </div>            
        </div>
    
    );
}
 
export default CreateReminders;