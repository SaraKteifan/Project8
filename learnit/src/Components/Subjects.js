import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate } from "react-router-dom";


function Subjects() {
    const navigate = useNavigate();
    const [subjects, setSubjects]= useState([])
    useEffect(() => {
        const loadSubjects = async () => {
        const response = await axios.get('http://localhost/Project9/learnit/backend/subjects.php');
    
        setSubjects(response.data);
    };
    
    loadSubjects();
    }, []);

    if (sessionStorage.getItem("sub_id")!=null && sessionStorage.getItem("sub_id")!=undefined)
    sessionStorage.setItem('sub_id', 0);
    
    const clickHandel  = (id)=>{
        sessionStorage.setItem('sub_id', id);
        navigate("/Subject", { replace: true });
    }

    return (
    <>
    {subjects.map((sub,index)=>(
      <div className="news-link">
            <img className="poster" src={sub.sub_img} />
            {/* <span className="hot-news">HOT</span> */}
            <h3 className="news-log">{sub.sub_name}</h3>
            <p className="description">
            {sub.sub_view}
            </p>
            <a href="#" onClick={()=>clickHandel(sub.sub_id)} className="btn-view">
              <span className="ic-sx24" /> See More
            </a>
            <span className="time-data">August 2022</span>
        </div>
    ))}
    </>
  )
}

export default Subjects
