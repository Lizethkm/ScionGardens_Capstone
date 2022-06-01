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

import CreateLocation from "./components/CreateLocations/CreateLocations";
import EditLocations from "./components/EditLocations/EditLocations";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import ReminderPage from "./pages/RemindersPage/RemindersPage";
import EditReminders from "./components/EditReminders/EditReminders";
import CreateReminders from "./components/CreateReminders/CreateReminders";







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
          <PrivateRoute >
            <div className="addPage">
              <CreatePlantCollection />  
            </div>
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
            <div className="addPage">
              <CreateLocation />
            </div>
          </PrivateRoute>
        }
        />
        <Route path= "locations/editlocation" element={
          <PrivateRoute>
            <EditLocations />
          </PrivateRoute>
        }
        />
        <Route path= "/reminders" element={
          <PrivateRoute>
            <ReminderPage />
          </PrivateRoute>
        }
        />
        <Route path= "/addreminder" element={
          <PrivateRoute>
            < CreateReminders />
          </PrivateRoute>
        }
        />
        <Route path= "reminders/editreminders" element={
          <PrivateRoute>
            <EditReminders />
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
