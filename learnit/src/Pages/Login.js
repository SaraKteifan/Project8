import React, { useState } from 'react'
import {useSelector,useDispatch } from 'react-redux';
import {login} from "../actions/index";

function Login() {
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
      {/* Home Section START */}
    <span className="no-intro" />
    {/* Home Section END */}
    <div className="container">
      <div className="row">
      <div className="col-md-2"></div>
        <div className="col-lg-9 col-md-8">
          <span className="name-rog">
            <div className="hr-line" /> Login
          </span>
          <div className="section-how">
            <span className="num-1">01</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Email Addres<span className='star'> *</span>
                  <p className="reveria"></p>
                </span>
                <input
                  type="email"
                  name="name"
                  id="name"
                  placeholder="example@test.com"
                  className="registration_short_field"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </form>
            </div>
          </div>
          
          <div className="section-how">
            <span className="num-3">02</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Password<span className='star'> *</span>
                  <p className="reveria"></p>
                </span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="registration_short_field"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </form>
            </div>
          </div>
          <p className='error'>{error.error}</p>
          <div className="down-reg">
          
            <a onClick={()=>dispatch(login(email,password))} className="register">
              Login
            </a>
            <a href="#" className="icon-vks">
              {/* <span className="vk-btn" /> */}
              Sign Up
            </a>
            
            <div className="title-xh">
              <span className="arrow_xd" />
              *All fields are required
            </div>
          </div>
        </div>
      <div className="col-md-2"></div>
      </div>
    </div>
    </>
  )
}

export default Login
