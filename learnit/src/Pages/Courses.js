import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Courses.css'

function Courses() {
    const [courses, setCourses] = useState([])
    const [title, setTitle] = useState('All Cources')

    useEffect(() => {

        const loadCourses = async () => {
            if(sessionStorage.getItem('cr_id')=='null'){
                console.log('api null');
                const response = await axios.get('http://localhost/Project9/learnit/backend/courses.php');
                setCourses(response.data);
            }else{
                console.log('api notttttt null');
                const response = await axios.get('http://localhost/Project9/learnit/API/selectCourse.php?id='+sessionStorage.getItem('cr_id'));
                setCourses(response.data);
                setTitle(response.data[0].tp_name)
            }

        };

        loadCourses();
    }, []);

    

    console.log(courses);
    return (
        <>
        <div className='container'>
        <h1>{title}</h1>
        <hr></hr>
        {courses.map((course,index)=>(
            
                <div id="card0" className="card" style={{ "display": "inline-flex", "-webkit-flex-direction": "column", "-ms-flex-direction": "column", "flex-direction": "column", "-webkit-box-pack": "space-between", "-webkit-justify-content": "space-between", "-ms-flex-pack": "space-between", "justify-content": "space-between", "-webkit-transition": "all 0.2s linear 0s", "transition": "all 0.2s linear 0s" }}>
                    <div id="image0" className="image">
                        <img src={course.cr_img} style={{ "width": "270px", "height": "151px" }} />
                        <div style={{ "width": "240px", "padding": "15px" }}>
                            <div id="title0" className="title">{course.cr_name}</div><div id="describ0" className="describ">{course.cr_view}</div></div></div><div id="details0" className="details"><div style={{ "display": "inline-block" }}><svg style={{ "width": "18px", "height": "18px" }} xmlns="http://www.w3.org/2000/svg" className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa" viewBox="0 0 32 32" width={32} height={32}><path d="M26 6V0H6v6h2v5.68l5 2v4.64l-5 2V26H6v6h20v-6h-2v-5.68l-5-2v-4.64l5-2V10h-2v.33l-5 2v7.36l5 2V26H10v-4.32l5-2v-7.36l-5-2V6zm-2 24H8v-2h16zM8 2h16v2H8z" /></svg> {course.weeks}weeks</div><div style={{ "display": "inline-block", "margin-left": "15px" }}><svg style={{ "width": "18px", "height": "18px" }} xmlns="http://www.w3.org/2000/svg" className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa" viewBox="0 0 32 32" width={32} height={32}><path d="M15 9v6.59l-2.66 2.65 1.42 1.42L17 16.41V9h-2z" /><path d="M28 16a11.9 11.9 0 00-.37-2.88l-1.94.48A9.57 9.57 0 0126 16a10 10 0 11-2.5-6.56L25 8.12a12.23 12.23 0 00-3-2.49V0H10v5.61a12 12 0 000 20.75V32h12v-5.66A12 12 0 0028 16zM12 2h8v2.7a11.86 11.86 0 00-8 0zm8 28h-8v-2.72a11.78 11.78 0 008 0z" /></svg>{course.hpw} hrs per week</div></div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Courses
