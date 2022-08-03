import React, {useState}from 'react'
import axios from 'axios'


const emailRegExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/
)


function Contact() {

    
  const [confirm, setConfirm] = useState('none');
  const [error, setErorr] = useState('none');


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailerror,setEmailerror]=useState('none')

  const name_handle = (e)=>{setName(e.target.value)}
  const email_handle = (e)=>{setEmail(e.target.value)}

 
  const message_handle = (e)=>{setMessage(e.target.value)}

const notification = ()=>{
  if(name == '' || email == '' || message == '')
  {
    setErorr('block');
  }
 else if(!emailRegExp.test(email)){
  setEmailerror('block');
}
  else
  {
    axios.get("http://localhost/project9/learnit/backend/contact.php?name="+name+"&email="+email+"&message="+message).then(

 setConfirm('block') ,
 setErorr('none'),
 document.getElementById('name').value = "",
 document.getElementById('email').value = "",
 document.getElementById('message').value = ""



 );
  }

}
  return (
    <>
      <>
  {/* Page Content START */}
  <div className="page-content">
    {/* Main Nav START */}
    
    {/* Main Nav END */}

    
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9">
          <span className="name-rog">
           Keep In Touch
          </span>
          <div className="col-md-7">
        <div className="contact-form">
        <div class="alert alert-success" style= {{display: confirm}}  role="alert"> Message sent succefully, we will contact you back as soon as possible </div>
        <div class="alert alert-danger" style= {{display: error}}  role="alert"> You need to fill the fields </div>
        <div class="alert alert-danger" style= {{display: emailerror}}  role="alert"> Invalid email </div>

          <div id="success" />
          <div name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">   </div></div></div></div>
          <div className="section-how">
            <span className="num-1">01</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
             Name
                  <p className="reveria"></p>
                </span>
               
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="registration_short_field"
                  onChange={name_handle}
                  required="required"
                  data-validation-required-message="Please enter your name"/>
            
          </form>
         
            </div>
          </div>
          <div className="section-how">
            <span className="num-2">02</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
            
                  Email 
                  <p className="reveria" ></p>
                </span>
                <input
                 
                  name="mail"
                  placeholder="Enter your email"
                  className="registration_short_field"
                  type="email"
                  onChange={email_handle}
                  id="name"
                  required="required"
                  data-validation-required-message="Please enter your name"/>
              </form>
            </div>
          </div>
          <div className="section-how">
            
            <span className="num-3">03</span>
            <div className="reved">
              <div className="arrow-road" />
             

              <form className="reg-down">
                <span className="name-form">
                 Message
                  <p className="reveria"></p>
                 
                </span>
               
                <input
                 id="name"
           
                 onChange={message_handle}
                 required="required"
                 placeholder="Enter your message "
                  className="registration_short_field"
                  data-validation-required-message="Please enter your message"
                  defaultValue={""}

                />
              </form>
            </div>
          </div>
         
           <div >
            <br></br>
            <a href="#" className="registercontact"
            
           
            type="submit"
            id="sendMessageButton"
            onClick={()=>notification()}
            >
             Submit
            </a>
            
          </div>
        </div>
       
</div></div></div>
<div className="ifram">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27764.911935385284!2d35.01916159171958!3d29.556733703948556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1657047509224!5m2!1sen!2sjo"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        /> */}
        <br></br><br></br>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27764.911935385284!2d35.01916159171958!3d29.556733703948556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1657047509224!5m2!1sen!2sjo" width={1050} height={250}></iframe>

      </div>
  <br></br><br></br>

</>

    </>
  )
}

export default Contact;
