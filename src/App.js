import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Booking from "./Components/Booking";
import Vehicles from "./Components/Vehicles";
import Packages from "./Components/Packages";
import ContactUs from "./Components/ContactUs";
import CarState from "./context/cars/Carpk"
import Login from "./Components/login";
import Otp from "./Components/Otp";
import Selectpackage from "./Components/Selectpackage";

function App() {
  return (
    <>
    
      <CarState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<Booking />} />
          <Route exact path="/vehicles" element={<Vehicles />} />
          <Route exact path="/packages" element={<Packages />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/otp" element={<Otp />} />
          <Route exact path="/selectpackage" element={<Selectpackage />} />
        </Routes>
      </Router>
      </CarState>        
    
    
    
      
    </>
  );
}

export default App;
