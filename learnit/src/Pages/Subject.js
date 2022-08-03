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
      // const response3 = await axios.get('http://localhost/Project9/src/API/showCourse.php');
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
    axios.get('http://localhost/Project9/learnit/API/selectTopic.php?id='+id)
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
        <div className="container">
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
              {/* <a href="#" className="btn-startgames lf">
                    <span className="ic-dw" /> Для Windows
                  </a>
                  <a href="#" className="btn-startgames linux lf">
                    <span className="ic-dw" /> Для Linux
                  </a>
                  <a href="#" className="btn-startgames macosx lf">
                    <span className="ic-dw" /> Для MacOs
                  </a> */}
                  <br/>
                  <hr/>
                <p style={{margin: "40px 0 20px"}}>
                <span className="name-rog">
                <div className="hr-line" />
                Choose a <span id='name'></span> Courses:

              </span>
              </p>

              <div>
                <div id="card0" className="card" style={{ "display": "inline-flex", "-webkit-flex-direction": "column", "-ms-flex-direction": "column", "flex-direction": "column", "-webkit-box-pack": "space-between", "-webkit-justify-content": "space-between", "-ms-flex-pack": "space-between", "justify-content": "space-between", "-webkit-transition": "all 0.2s linear 0s", "transition": "all 0.2s linear 0s" }}>
                  <div id="image0" className="image">
                    <img src="images/cosmo.jpg" style={{ "width": "270px", "height": "151px" }} />
                    <div style={{ "width": "240px", "padding": "15px" }}>
                      <div id="title0" className="title">Introduction to Cosmetic Formulation and Technology</div><div id="describ0" className="describ">explain what the main factor is that legally differentiates cosmetics and drugs in the United States.</div></div></div><div id="details0" className="details"><div style={{ "display": "inline-block" }}><svg style={{ "width": "18px", "height": "18px" }} xmlns="http://www.w3.org/2000/svg" className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa" viewBox="0 0 32 32" width={32} height={32}><path d="M26 6V0H6v6h2v5.68l5 2v4.64l-5 2V26H6v6h20v-6h-2v-5.68l-5-2v-4.64l5-2V10h-2v.33l-5 2v7.36l5 2V26H10v-4.32l5-2v-7.36l-5-2V6zm-2 24H8v-2h16zM8 2h16v2H8z" /></svg>16weeks</div><div style={{ "display": "inline-block", "margin-left": "15px" }}><svg style={{ "width": "18px", "height": "18px" }} xmlns="http://www.w3.org/2000/svg" className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa" viewBox="0 0 32 32" width={32} height={32}><path d="M15 9v6.59l-2.66 2.65 1.42 1.42L17 16.41V9h-2z" /><path d="M28 16a11.9 11.9 0 00-.37-2.88l-1.94.48A9.57 9.57 0 0126 16a10 10 0 11-2.5-6.56L25 8.12a12.23 12.23 0 00-3-2.49V0H10v5.61a12 12 0 000 20.75V32h12v-5.66A12 12 0 0028 16zM12 2h8v2.7a11.86 11.86 0 00-8 0zm8 28h-8v-2.72a11.78 11.78 0 008 0z" /></svg>3hrs peer week</div></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="right-block">
                <div className="n-m">Мониторинг Серверов</div>
                <div className="server online">
                  <div className="second circle">
                    <strong />
                  </div>
                  <div className="server_name">
                    <a href="#">01 Сервер</a>
                  </div>
                  <div className="server_players">Онлайн: 50/100</div>
                </div>
                <div className="server online">
                  <div className="second circle">
                    <strong />
                  </div>
                  <div className="server_name">
                    <a href="#">01 Сервер</a>
                  </div>
                  <div className="server_players">Онлайн: 50/100</div>
                </div>
                <div className="server online">
                  <div className="second circle">
                    <strong />
                  </div>
                  <div className="server_name">
                    <a href="#">01 Сервер</a>
                  </div>
                  <div className="server_players">Онлайн: 50/100</div>
                </div>
                <div className="server online">
                  <div className="second circle">
                    <strong />
                  </div>
                  <div className="server_name">
                    <a href="#">01 Сервер</a>
                  </div>
                  <div className="server_players">Онлайн: 50/100</div>
                </div>
                <div className="server online">
                  <div className="second circle">
                    <strong />
                  </div>
                  <div className="server_name">
                    <a href="#">01 Сервер</a>
                  </div>
                  <div className="server_players">Онлайн: 50/100</div>
                </div>
                <div className="server online">
                  <div className="second circle">
                    <strong />
                  </div>
                  <div className="server_name">
                    <a href="#">01 Сервер</a>
                  </div>
                  <div className="server_players">Онлайн: 50/100</div>
                </div>
                <div className="server online not-hr">
                  <div className="second circle">
                    <strong />
                  </div>
                  <div className="server_name">
                    <a href="#">01 Сервер</a>
                  </div>
                  <div className="server_players">Онлайн: 50/100</div>
                </div>
                <div className="server online not-hr">
                  <div className="second circle">
                    <strong />
                  </div>
                  <div className="server_name">
                    <a href="#">01 Сервер</a>
                  </div>
                  <div className="server_players">Онлайн: 50/100</div>
                </div>
                <p className="tdx-strom">
                  <span className="online-o" /> Общий онлайн: 2173
                </p>
              </div>
              <div className="right-block vk">
                <div className="n-m">Мониторинг Серверов</div>
                <div className="widget-vk">WIDGET VK</div>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default Download
