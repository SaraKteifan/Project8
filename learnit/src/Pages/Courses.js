import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Courses() {

    const [data, setdata]= useState([])

    useEffect(
        axios.post('http://localhost/Project9/learnit/API/selectCourse.php?id=1')
        .then (res=> {setdata(res.data)})
    , [])
    const getData1 = ()=> {
        if (!(data && data.length == 0)) {
            console.log("Done!");
            return<>
            <li>{data[0].cr_name}</li>
            <li>{data[0].cr_view}</li>
            </>
        }else{
            console.log("Loading...")
        }
    }
  return (
    <div>
    {getData1()}
    </div>
  )
}

export default Courses
