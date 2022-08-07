import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useNavigate } from "react-router-dom";


function Download() {
  
  const sub_id = sessionStorage.getItem("sub_id");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [coursesData, setCourses] = useState([]);

  if (sessionStorage.getItem("tp_id")!=null && sessionStorage.getItem("tp_id")!=undefined)
  {sessionStorage.setItem("tp_id", 0)}

  const loadBlog = async () => {
      const response = await axios.get('http://localhost/Project9/learnit/API/selectSubject.php?id='+sub_id);
      const response2 = await axios.get('http://localhost/Project9/learnit/API/selectTopic.php?id='+sub_id);
      // const response3 = await axios.get('http://localhost/src/API/showCourse.php');
      setData(response.data);
      setData2(response2.data);
      // setCourses(response3.data);
  };
  useEffect(() => {
      loadBlog();
  }, []);
  const setData3=(data)=>{
    setCourses(data);

  }

  const loadBlog2 =  (id) => {
    axios.get('http://localhost/learnit/API/selectTopic.php?id='+id)
    .then(res=>{
      
     setData3(res.data);
    });

};


  const getSubName = ()=> {
    if ((data && data.length > 0)) {
      return data[0].sub_name
    }else{
        console.log("Loading...")
    }
}

const getSubView = ()=> {
  if ((data && data.length > 0)) {
    return data[0].sub_view
  }else{
      console.log("Loading...")
  }
}

const clickHandel= (el)=>{
  sessionStorage.setItem('cr_id',el.tp_id);
  navigate("/Courses", { replace: true });
}
const getTpName = () => {
  if ((data2 && data2.length > 0)) {
      return data2.map(el => <a href="#"  onClick={()=>clickHandel(el)} className="btn-startgames lf">
      <span className="ic-dw" /> {el.tp_name}
    </a>)
  } else {
      console.log("Loading...")
  }
}
  return (
    <>
      <>
        {/* Home Section START */}
        <span className="no-intro" />
        {/* Home Section END */}
        <div className="container" style={{ minHeight: "75vh" }}>
          <div className="row">
            <div className="col-lg-9 col-md-9">
              <span className="name-rog">
                <div className="hr-line" />
                {getSubName()}
              </span>
              <div className="promo-donate">
                <div className="col-md-1 dv lv">
                  <span className="ic-info" />
                </div>
                <div className="col-md-10 lv">
                  <h3 className="th-name">{getSubView()}</h3>
                  {/* <p className="desctop">
                    Для игры на наших серверах требуется наш игровой клиент, без
                    него невозможно зайти на наши сервера.
                    <br />
                    <br />
                    Лаунчер - это программа запуска наших игровых клиентов, эта
                    программа автоматически загружает нужные модификации и
                    обновления наших клиентов.
                    <br />
                    Так же для работы лаунчера необходима установленная Java
                    (загрузить её можно ниже)
                  </p> */}

                </div>
              </div>
              {getTpName()}

            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default Download
