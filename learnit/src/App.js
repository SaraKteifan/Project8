import React from "react";
import Comments from "./Components/comments/Comments";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Download from "./Pages/Download";
import Donate from "./Pages/Donate";
import Home from "./Pages/Home";
import HowStart from "./Pages/HowStart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import RoomScheduler from "./Pages/RoomScheduler";
import "@progress/kendo-theme-default/dist/all.css";
import Contact from "./Pages/Contact";
import Unit from "./Pages/Unit";
import Lesson from "./Pages/Lesson";
import './comments.css'
import Subjects from "./Components/Subjects";


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
        <Route path="/About" element={<About/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Scheduler" element={<RoomScheduler/>}/>
        <Route path="/Unit" element={<Unit/>}/>
        <Route path="/Lesson" element={<Lesson/>}/>


        {/* <Route path="/Contact" element={<Contact/>}/> */}
        <Route path="/Subjects" element={<Subjects/>}/>
        <Route path="/Comments" element={<Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"/>}/>
        
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>
  );
}

export default App;
