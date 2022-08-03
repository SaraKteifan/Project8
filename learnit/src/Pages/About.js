import React, { useState } from 'react'
import {useSelector,useDispatch } from 'react-redux';
import {login} from "../actions/index";
import './About.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function About() {
  const dispatch=useDispatch();
  const error=useSelector(state=>state.login);
  const user=useSelector(state=>state.login.userId);
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')

  if(user != ''){
    sessionStorage.setItem("user_info", user);
    window.location.href = "/";
  }

  return (
    <>
 
 <>

 
  <div className="section-wrap">
    <section className="page home active">
      <div className="vertical-align">
        <div className="wrap pb-5">
          <h2>What's LearnIt?</h2>
          <div className='row pt-5 mt-5'>
            <div className='col-6'>
          <p>
          LearnIt is an online courses website for university students, it contains all the study courses that the student needs in a simplified way, where the topics are presented in a sequential manner, which makes the learning process interesting and useful. Therefore, the LearnIt site is the best way for students to get the highest grades.


        

         
          </p>
          </div>
          <div className='col-6'>
            <img src='https://assets-global.website-files.com/61a05ff14c09ecacc06eec05/61f58dace4caac4a10db955d_Distance_Learning_Statistics-.png' width={'125%'}></img>
          </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</>


    
 
    <div className="container">
  <div className="row heading pb-5 mb-5">
    <div className="col-md-12 col-md-offset-3">
      <h2 className="text-center bottom-line">Meet Our Team</h2>
      <p className="subheading text-center">Creative Nerds</p>
    </div>
  </div>
  <div className="row team-row">
    <div className="col-md-4 col-sm-6 team-wrap">
      <div className="team-member text-center">
        <div className="team-img">
          <img
            src="https://avatars.githubusercontent.com/u/100211491?v=4"
            alt=""
          />
          <div className="overlay">
            <div className="team-details text-center">
              <p>
                Our web developer team will spend time to make you happy.
              </p>
              <div className="socials mt-20">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h6 className="team-title">Aya AlSawa</h6>
        <span>Product Owner</span>
      </div>
    </div>
    {/* end team member */}
    <div className="col-md-4 col-sm-6 team-wrap">
      <div className="team-member text-center">
        <div className="team-img">
          <img
            src="https://cdn.discordapp.com/attachments/964244406838370324/1004483482350796800/Capture_4.PNG"
            alt=""
            height={'415px'}
          />
          <div className="overlay">
            <div className="team-details text-center">
              <p>
              Our web developer team will spend time to make you happy.
              </p>
              <div className="socials mt-20">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h6 className="team-title">Majd Albalawneh</h6>
        <span>Scrum Master</span>
      </div>
    </div>
    {/* end team member */}
    <div className="col-md-4 col-sm-6 team-wrap">
      <div className="team-member last text-center">
        <div className="team-img">
          <img
            src="https://avatars.githubusercontent.com/u/100211522?v=4"
            alt=""
          />
          <div className="overlay">
            <div className="team-details text-center">
              <p>
              Our web developer team will spend time to make you happy.
              </p>
              <div className="socials mt-20">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h6 className="team-title">Sara Kteifan</h6>
        <span>Full Stack Web Developer</span>
      </div>
    </div>
    {/* end team member */}
  </div>
  <div className="row team-row justify-content-center  mt-5">
    <div className="col-md-4 col-sm-6 team-wrap">
      <div className="team-member text-center">
        <div className="team-img">
          <img
            src="https://cdn.discordapp.com/attachments/1000662055034048632/1004476869967622314/bah.PNG"
            alt=""
          />
          <div className="overlay">
            <div className="team-details text-center">
              <p>
              Our web developer team will spend time to make you happy.
              </p>
              <div className="socials mt-20">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h6 className="team-title">Bahaa AlDeen</h6>
        <span>Full Stack Web Developer</span>
      </div>
    </div>
    {/* end team member */}
    <div className="col-md-4 col-sm-6 team-wrap">
      <div className="team-member text-center">
        <div className="team-img">
          <img
            src="https://avatars.githubusercontent.com/u/62554357?v=4"
            alt=""
          />
          <div className="overlay">
            <div className="team-details text-center">
              <p>
              Our web developer team will spend time to make you happy.
              </p>
              <div className="socials mt-20">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h6 className="team-title">Obada AlShafeey</h6>
        <span>Full Stack Web Developer</span>
      </div>
    </div>
    {/* end team member */}
   
    {/* end team member */}
  </div>
</div>


    </>
  )
}


export default About;