// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PlantCollectionPage from "./pages/PlantCollectionPage/PlantCollectionPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CreatePlantCollection from "./components/CreatePlantCollection/CreatePlantCollection";
import EditPlantCollections from "./components/EditPlantCollection/EditPlantCollection";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import CreateLocation from "./components/CreateLocations/CreateLocations";





function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path= "/plantcollections" element={
          <PrivateRoute>
            <PlantCollectionPage />
          </PrivateRoute>
        }
        />
        <Route path= "/addplant" element={
          <PrivateRoute>
            <CreatePlantCollection />
          </PrivateRoute>
        }
        />
        <Route path= "plantcollections/editplant" element={
          <PrivateRoute>
            <EditPlantCollections />
          </PrivateRoute>
        }
        />
        <Route path= "/locations" element={
          <PrivateRoute>
            <LocationsPage />
          </PrivateRoute>
        }
        />
        <Route path= "/addlocation" element={
          <PrivateRoute>
            <CreateLocation />
          </PrivateRoute>
        }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
