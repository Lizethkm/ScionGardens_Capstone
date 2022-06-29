// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PlantCollectionPage from "./pages/PlantCollectionPage/PlantCollectionPage";
import ReminderPage from "./pages/RemindersPage/RemindersPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";


// Component Imports
import Footer from "./components/Footer/Footer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";










function App() {
  return (
    <div>
  
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

        <Route path= "/reminders" element={
          <PrivateRoute>
            <ReminderPage />
          </PrivateRoute>
        }
        />


        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
