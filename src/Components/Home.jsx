import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { TbBook } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

const Home = () => {
  return (
    <div style={{marginTop:"60px"}}>
      
      <div id="home" style={{width:"100%",height:"90vh"}}>
        <div id="imgdiv"><img src="/images/meeai.png" alt="" /></div>
          <div id="content" >
            <h1 style={{fontSize:"46px"}}>Hi There,</h1>
            <h1 style={{fontSize:"55px",marginTop:"-15px",textIndent:"30px"}}>I'm <p id="pp" style={{marginLeft:"-30px",marginTop:"-10px",}}>DineshKumar</p></h1>
            <h1 style={{fontSize:"40px"}}>And i'm a Web Developer</h1>
            <p style={{textIndent:"30px",textAlign:"justify"}}>It's Dineshkumar from namakkal. I had completed my higher secondary in Vevekananda School paundamangalam. I currently pursing my B.Tech Aritificail intelliegence and data science in V.S.B. Engineering college karur. I am seeking to learn about web development field and AI field. </p>
            <ul id="socialmedia">
              <li><a href="https://www.linkedin.com/in/sdineshkumar8285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} color="white" /></a></li>
              <li><a href="https://github.com/Dineshkumar2006111" target="_blank" rel="noopener noreferrer"><FaSquareGithub size={40} color="white" /></a></li>
              <li><a href="https://www.instagram.com/sinchan._.boy16?igsh=MWE4eWQxcGloeTlobg==" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={40} color="white"/></a></li>
            </ul>
          </div>
        {/* about */}
      </div>
      <div id="about">
        <div id="acont">
          <h1>AboutMe</h1>
          <div id='edu'>
              <div className='cart' >
                <center>
                    <p className='symb'><FaGraduationCap size={45} /></p>
                    <h2>B.Tech Artificial Intelligence and data science</h2>
                    <h3 style={{color:"skyblue"}}>V.S.B. Engineering College Karur</h3>
                    <p>2024-2028</p>
                    <hr />
                    <p>CGPA : 7.7 / 10</p>
                    </center>
              </div>


              <div className='cart'>
                <center>
                    <p className='symb' style={{backgroundColor:"indigo"}}><BiSolidSchool size={45}/></p>
                    <h2>Higher Secondary (XII)</h2>
                    <h3 style={{color:"blueviolet"}}>Vivekananda Higher Secondary School, Paundamangalam</h3>
                    <p>2024</p>
                    <hr />
                    <p>Percentage : 82.5 / 100</p>
                    </center>
              </div>

              <div className='cart'>
                <center>
                    <p className='symb'style={{backgroundColor:"green"}} ><TbBook size={47}/></p>
                    <h2>Secondary (X)</h2>
                    <h3 style={{color:"green"}}>Vivekananda Higher Secondary School, Paundamangalam</h3>
                    <p>2022</p>
                    <hr />
                    <p>Percentage : 66.2 / 100</p>
                    </center>
              </div>
        </div>
        </div>

<h2 style={{marginTop:"100px",marginLeft:"20px"}}><CiHeart /> Hobbies and Interest</h2>
        <div id='interest'>
          <div className='intcart'>
            <center>
            <img src="/images/cricket.png" alt="" />
            <h3>Cricket</h3>
            </center>
          </div>
          <div className='intcart'>
            <center>
            <img src="/images/manual.png" alt="" />
            <h3>New Skill Learner</h3>
            </center>
          </div>
          <div className='intcart'>
            <center>
            <img src="/images/coding.png" alt="" />
            <h3>Exploring New Technology</h3>
            </center>
          </div>
          <div className='intcart'>
            <center>
            <img src="/images/vinyl-record.png" alt="" />
            <h3>Listening to Music</h3>
            </center>
          </div>
        </div>


      </div>


      <div id="skill">
        <div id="skillc">
          <h1>Skills</h1>  
          <p>I am a passionate and dedicated Full Stack Web Developer with a strong interest in building modern, responsive, and user-friendly web applications. I continuously learn and improve my skills to stay updated with the latest technologies.</p>
       <div id='fb'>
        <div id="frontend">
              <h1 style={{textAlign:"center"}}>Frontend</h1>
              <ul>
                <li>
                    <FaHtml5 size={20}/> HTML
                      <br /> <p id="pro"><p id="ln"></p></p>
                </li>
              </ul>
              <ul style={{marginTop:"20px"}}>
                <li>
                    <FaCss3Alt size={20} /> CSS
                      <br /> <p id="pro"><p id="ln"></p></p>
                </li>
              </ul>
              <ul style={{marginTop:"20px"}}>
                <li>
                    <FaSquareJs size={20} /> Java Script
                      <br /> <p id="pro"><p id="ln" style={{width:"87%"}}></p></p>
                </li>
              </ul>
              <ul style={{marginTop:"20px"}}>
                <li>
                    <FaReact size={20} /> React
                      <br /> <p id="pro"><p id="ln" style={{width:"75%"}}></p></p>
                </li>
              </ul>
        </div>
        <div id="backend">
              <h1 style={{textAlign:"center"}}>Backend</h1>
               <ul style={{marginTop:"20px"}}>
                <li>
                    <FaPython size={20} /> Python
                      <br /> <p id="pro"><p id="ln" style={{width:"65%"}}></p></p>
                </li>
              </ul>
              <ul style={{marginTop:"20px"}}>
                <li>
                    <SiMysql size={20} /> MySQL
                      <br /> <p id="pro"><p id="ln" style={{width:"75%"}}></p></p>
                </li>
              </ul>
              <ul style={{marginTop:"20px"}}>
                <li>
                    <FaNode size={20} /> Node.js
                      <br /> <p id="pro"><p id="ln" style={{width:"75%"}}></p></p>
                </li>
              </ul>
              <ul style={{marginTop:"20px"}}>
                <li>
                    <SiExpress size={20} /> Express
                      <br /> <p id="pro"><p id="ln" style={{width:"75%"}}></p></p>
                </li>
              </ul>
        </div>
        </div>
        </div>
      </div>
      

    </div>
  )
}

export default Home