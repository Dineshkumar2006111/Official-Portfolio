import React,{useState} from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setname]=useState('');
  const [email,setemail]=useState('')
  const [message,setmessage]=useState('')
  const [status,setstatus]=useState('')

  const [load,setload]=useState(false)

const handlesubmit=(e)=>{
  e.preventDefault();
setload(true)
  const serviceId='service_qfk94pw';
  const templateId='template_1kdswpf';
  const publickey='D9XcEnrpNlkGYW3pb';

  const templateParams = {
  from_name: name,
  name: name,
  from_email: email,
  reply_to: email,
  to_name: "Dinesh",
  message: message,
};

  emailjs.send(serviceId,templateId,templateParams,publickey)
  .then((Response)=>{
    console.log("Email send successfully",Response);
    setemail('')
    setmessage('')
    setname('')
    setstatus('')
    setload(false)

  })
  .catch((err)=>{
    console.log(err)
  })


}


  return (
    <div style={{marginTop:"65px"}}>
        <center>
          <h1>Get In Touch</h1>
          <p style={{marginTop:"5px"}}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div id="continfo">
              <h1 style={{marginTop:"10px"}}>Contact Info</h1>
              
              <h3 id='em' style={{marginTop:"15px"}}><MdMarkEmailUnread /> Email : dineshkumars200616@gmail.com</h3>
              <h3 style={{marginTop:"15px"}}><FaPhone /> Phone : +91 934469XXXX</h3>
              <h3 style={{marginTop:"15px"}}><IoLocationOutline /> Location : Tamilnadu/Namakkal</h3>
              <ul id="contshow">
                            <li><a href="https://www.linkedin.com/in/sdineshkumar8285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} color="white" /></a></li>
                            <li><a href="https://github.com/Dineshkumar2006111" target="_blank" rel="noopener noreferrer"><FaSquareGithub size={40} color="white" /></a></li>
                            <li><a href="https://www.instagram.com/sinchan._.boy16?igsh=MWE4eWQxcGloeTlobg==" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={40} color="white"/></a></li>
               </ul>
          </div>
          <div id="contform">
                <h1>Contact Form  </h1>
                <input style={{marginTop:"40px"}} autoComplete="off" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter name" type="text" />
                <input autoComplete="off" placeholder="Enter Email" onChange={(e)=>{setemail(e.target.value)}} value={email} type="text" />
                <input autoComplete="off" placeholder="Enter subject" onChange={(e)=>{setstatus(e.target.value)}} type="text" />
                <textarea placeholder="message" value={message} onChange={(e)=>{setmessage(e.target.value)}} id=""></textarea>
                {load ? <h3 style={{marginTop:"20px"}}>Loading...</h3>:<button onClick={(e)=>handlesubmit(e)}>Submit</button>}
          </div>
        </center>
      </div>
  )
}

export default Contact
