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
    <div className='p'>About Us</div>
    <div className='d'>We are a group of young men and women  We develop websites to meet the needs of the user <br/>We work together as a team. Our goal is always to reach the best. Our site is one of the best sites to educate students and acquire skills and experiences that help them to overcome difficulties, and we hope everyone can benefit.</div>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <br/>
    <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1000662055034048632/1003662155431804980/1.jpg" />
          <Card.Body>
            <Card.Title>sara</Card.Title>
           
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>obada</Card.Title>
           
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1000662055034048632/1003641432130723921/IMG__.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
           
          </Card.Body>
        
        </Card>
        <Card>
          <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1000662055034048632/1003663212761317426/285776878_720328339265696_5526842662091427761_n.jpg" />
          <Card.Body>
            <Card.Title>sara</Card.Title>
           
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>sara</Card.Title>
           
          </Card.Body>
         
        </Card>
      </CardGroup>

    </>
  )
}


export default About;