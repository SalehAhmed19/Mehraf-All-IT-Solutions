import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Login from './Pages/Home/Login/Login.jsx'
import Register from "./Pages/Home/Register/Register";

function App() {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="+8801758971667"
        accountName="Mehraf All IT Solutions"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
