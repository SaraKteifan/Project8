import React, { useState } from 'react'
import {useSelector,useDispatch } from 'react-redux';
import {signUp} from "../actions/index";

const usernameRegExp= RegExp(
  /^[A-Za-z0-9_-]*$/
)
const emailRegExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegExp= RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
)

function Register() {
  const dispatch=useDispatch();
  const errors=useSelector(state=>state.signUp.errors);
  const [username,setUsername]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [confirmPassword,setConfirmPassword]= useState('')


  const signUpFun=()=>{
    let errors={usernameError:'',emailError:'',passwordError:'',confirmPasswordError:''};

    if(username !=='' && usernameRegExp.test(username)){
      errors={...errors, 
        usernameError:''}
    }else{
      errors={...errors, 
        usernameError:'Invalid Username, Username can only have letters, numbers, - and _ '}
    };
    
    if(email !=='' && emailRegExp.test(email)){
      errors={...errors, 
        emailError:''}
    }else{
      errors={...errors, 
        emailError:'Invalid email, email must be in the form of example@test.com'}
      };

    if(password !=='' && passRegExp.test(password)){
      errors={...errors, 
        passwordError:''}
    }else{
      errors={...errors, 
        passwordError:'Invalid password, password must contain at least \n - one small letter,\n - one capital letter, \n - one number, \n - one special character, \n - and minimum of 8 characters'}
    };

    if(confirmPassword !== '' && confirmPassword === password){
      errors={...errors,
        confirmPasswordError:''}
    }else{
      errors={...errors,
        confirmPasswordError:'The two passwords do not match'}
      };   

    dispatch(signUp(errors,username,email,password))
  }

  return (
    <>
      <>
    {/* Home Section START */}
    <span className="no-intro" />
    {/* Home Section END */}
    <div className="container">
      <div className="row">
      <div className="col-md-2"></div>
        <div className="col-lg-9 col-md-8">
          <span className="name-rog">
            <div className="hr-line" /> Sign Up
          </span>
          <div className="section-how">
            <span className="num-1">01</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Username<span className='star'> *</span>
              
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  className="registration_short_field"
                  onChange={(e)=> setUsername(e.target.value)}
                />
              </form>
              <br/>
         
            </div>
            
          </div>
          <p className="error">{errors.usernameError}</p>
          <div className="section-how">
            <span className="num-2">02</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Email Address<span className='star'> *</span>
                
                </span>
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  placeholder="example@test.com"
                  className="registration_short_field"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </form>
            </div>
          </div>
          <p className="error">{errors.emailError}</p>
          <div className="section-how">
            <span className="num-3">03</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Password<span className='star'> *</span>
                 
                </span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="registration_short_field"
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </form>
            </div>
          </div>
          <p className="error">{errors.passwordError}</p>
          <div className="section-how">
            <span className="num-4">04</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Confirm Password<span className='star'> *</span>
                  
                </span>
                <input
                  type="password"
                  name="password-repeat"
                  id="password-repeat"
                  placeholder="Confirm Password"
                  className="registration_short_field"
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                />
              </form>
            </div>
          </div>
          <p className="error">{errors.confirmPasswordError}</p>
          <div className="down-reg">
            <a onClick={() => signUpFun()} className="register">
              Sign Up
            </a>
            <a href="#" className="icon-vks">
              {/* <span className="vk-btn" /> */}
              Login
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

    </>
  )
}

export default Register
