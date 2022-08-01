import React from "react";
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Download from "./Pages/Download";
import Donate from "./Pages/Donate";
import Home from "./Pages/Home";
import HowStart from "./Pages/HowStart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Cards from "./Pages/Cards";


function App() {
  return (
    <>
     <div className="page-content">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<Register/>}/>
        <Route path="/Donate" element={<Donate/>}/>
        <Route path="/Download" element={<Download/>}/>
        <Route path="/HowStart" element={<HowStart/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Cards" element={<Cards/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>
  );
}

export default App;
