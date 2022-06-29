import LoginNavBar from "../../components/NavBar/LoginNavBar";
import "./AboutUsPage.css"
import wateringGarden from "../../assests/wateringGarden.jpg"


const AboutUsPage = (props) => {


    return ( 
        <div className="aboutUsPage">
            < LoginNavBar />
            <div >
                
                <div>
                    <img classname="aboutImage" src={wateringGarden} alt="watering plants" />
                </div>
                <div className="aboutUs">
                    <h1>About Scion Gardens</h1>
                    <h2>Welcome to Scion Gardens</h2>
                    <h3>Our goal is to ensure your plants get the attention and care they deserve! </h3>                
                </div>

            </div>            
        </div>

     );
}
 
export default AboutUsPage;