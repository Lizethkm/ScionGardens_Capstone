import LoginNavBar from "../../components/NavBar/LoginNavBar";

import "./AboutUsPage.css"
import wateringGarden from "../../assests/wateringGarden.jpg"
import { useContext } from "react";

import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/NavBar/NavBar";


const AboutUsPage = (props) => {
    const { logoutUser, user } = useContext(AuthContext);

    return ( 
        
        <div className="aboutUsPage">
            
                <li>
                {user ? (
                    <Navbar />
                ) : (
                    < LoginNavBar />
                )}
            </li>
            
            <div className="aboutUs" style={{ height: "695px"}} >
                
                <div classname="aboutImage">
                    <img  src={wateringGarden} alt="watering plants" style={{height: "600px" }}/>
                </div>
                <div className="aboutUsInfo">
                    <h1>About Scion Gardens</h1>
                    
                    <h3>Our goal is to ensure your plants get the attention and care they deserve! </h3> 
                    <p> With the Scion Gardens App you will be able to add your plants, set a location, add how much sunlight, water, and maintenance they will need. As well as, setting Reminders of different tasks and assign it to a specific
                        plant. </p>  
                        <h4> A Happy Plant is a Growing Plant! </h4>             
                </div>

            </div>            
        </div>

     );
}
 
export default AboutUsPage;