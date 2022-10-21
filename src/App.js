import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Login from "./Pages/Home/Login/Login.jsx";
import Register from "./Pages/Home/Register/Register";
import GraphicDesign from "./Pages/Home/Services/GraphicDesign/GraphicDesign";
import WebDevelopment from "./Pages/Home/Services/WebDevelopment/WebDevelopment";
import VideoAnimation from "./Pages/Home/Services/VideoAnimation/VideoAnimation";
import DigitalMarketing from "./Pages/Home/Services/DigitalMarketing/DigitalMarketing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App" style={{ color: "#333333" }}>
      <FloatingWhatsApp
        phoneNumber="+8801773120528"
        accountName="Mehraf All IT Solutions"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/graphic-design" element={<GraphicDesign />}></Route>
        <Route path="web-development" element={<WebDevelopment />}></Route>
        <Route path="video-animation" element={<VideoAnimation />}></Route>
        <Route path="digital-marketing" element={<DigitalMarketing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
