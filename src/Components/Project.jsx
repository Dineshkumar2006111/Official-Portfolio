import React, { cloneElement, useEffect } from 'react'

const Project = () => {
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const imgclick=(e)=>{
    
    var bd=document.getElementById("blur");
    bd.innerHTML=""
    bd.style.display="block"
    
    var tem=event.target
    var cpyimag=tem.cloneNode(true);
    bd.appendChild(cpyimag);
    var cb=document.getElementById("cb");
    cb.style.display="block"
    
  }
  var cclick=()=>{
    var bd=document.getElementById("blur");
    bd.style.display="none";
    var cb=document.getElementById("cb");
    cb.style.display="none";
    var cb=document.getElementById("cb");
    cb.style.display="none";
     

  }

  return (
    <div>
    <div style={{marginTop:"60px"}}>
      <center>
          <h1>Projects</h1>
          <p style={{marginTop:"15px"}}>Here are some of the projects I’ve built so far, reflecting my skills, learning, and passion for development.</p>
          <div id='carddiv'>
          <div className='projcard' name="wastereport">
            <p className='projh'>Smart Waste Management System</p>
            <p className='projd'>A React-based Waste Management System that allows users to report waste issues with descriptions, locations, and images.</p>
            <ul>
              <li>React</li>
              <li>JSON</li>
              <li>Cloudinary</li>

            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-html-css-activity-7417881543446253569-WmkI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

          </div>

          <div className='projcard' name="agrismart">
            <p className='projh'>AgriSmart</p>
            <p className='projd'>AgriSmart, is a smart agriculture web application built, the aim of helping farmers make informed decisions through technology.</p>
            <ul>
              <li>React</li>
              <li>JSON</li>
              <li>Geolocation</li>

            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_hackathon-reactjs-webdevelopment-activity-7478022176252739585-MeaB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

          </div>

          <div className='projcard' name="animegenz">
            <p className='projh'>AnimeGenZ</p>
            <p className='projd'>AnimeGenz is created for users who want to learn about anime and manga in a structured way, instead of just watching</p>
            <ul >
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddeveloper-javascript-activity-7440359754071252992-Zy0M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

          </div>

          <div className='projcard' name="student task">
            <p className='projh'>Student Task Management</p>
            <p className='projd'>The Student Task Management System is a web application designed to help students organize and manage their daily academic tasks efficiently.</p>
            <ul>
              <li>React</li>
              <li>JSON</li>
              
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_reactjs-javascript-webdevelopment-activity-7468991986663038976-QX4a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

          </div>

          <div className='projcard' name="calculator">
            <p className='projh'>Calculator</p>
            <p className='projd'>Focused on responsive layout, modern design, and intuitive button interactions so users can perform quick calculations without distractions.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontend-javascript-activity-7425552652698079232-DTzg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

            </div>

          <div className='projcard' name="weatherapp">
            <p className='projh'>Weather app</p>
            <p className='projd'>A responsive Weather App using HTML, CSS, and JavaScript that allows users to search for any city and instantly view real-time weather information.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-javascript-frontenddevelopment-activity-7467773916313243650-zA5y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

            </div>

          <div className='projcard' name="image gallary">
            <p className='projh'>Image Gallary</p>
            <p className='projd'>A image gallery is a modern web technologies, focusing on clean layout, smooth alignment, and visual storytelling.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddevelopment-responsivedesign-activity-7424104427613048832-07LE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

            </div>

          <div className='projcard' name="quizz app">
           <p className='projh'>Quiz Game</p>
            <p className='projd'>This project focuses on creating an engaging user experience while testing basic general knowledge through multiple-choice questions.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddeveloper-javascript-activity-7422656611468562432-7iAL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

            </div>

          <div className='projcard' name="password generator">
            <p className='projh'>Password Generator</p>
            <p className='projd'>This project helps users generate strong and secure passwords instantly with a clean and simple UI.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddeveloper-javascript-activity-7421910878729564160-b3fB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

            </div>

          <div className='projcard' name="digital clock">
            <p className='projh'>Digital Clock</p>
            <p className='projd'>This project helped me strengthen my understanding of JavaScript date & time functions with a clean and simple UI..</p>
            <ul>
               <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddevelopment-javascript-activity-7420465656581521408--xkT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

            </div>

          <div className='projcard' name="booksky">
            <p className='projh'>Booksky</p>
            <p className='projd'>This project helped me strengthen my understanding of DOM manipulation, responsive design, and UI structuring while focusing on simplicity and usability.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-html-css-activity-7417881543446253569-WmkI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

            </div>

          <div className='projcard' name="Todolist">
            <p className='projh'>Todo List</p>
            <p className='projd'>A Todo list project help me to learn javascript and DOM manipulation, With the Begginer friendly.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddevelopment-html-activity-7416793671632654336-DWvv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>

            </div>

            <div className='projcard'  name="Guss number">
              <p className='projh'>Guess Number</p>
            <p className='projd'> The website generates a random number, and the user has to guess the correct number within limited attempts.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <button><a href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-html-css-activity-7416409864110776320-BVD4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90" target="_blank" rel="noopener noreferrer">View in linkedin</a></button>
            </div>
            </div>
      </center>
    </div>

    <div id="participation">
      <h1 style={{textAlign:"center"}}>Participations</h1>
        <h1 id='hh'>Hackathon's (1)</h1>
        <div className='hkdiv'>
            <h2>St. Joseph College Chennai.</h2>
            <p>I participated in Hackathon 2K26 conducted by the Department of Computer Science and Engineering at St. Joseph College of Engineering. It was a great opportunity to work on innovative ideas, collaborate with talented peers, and enhance my problem-solving skills under time pressure. I’m also glad to share that our team was selected for the final round, which was a valuable learning experience and a proud moment for me.
</p>
          <h4 style={{marginLeft:"30px"}}> Project:  AgriSmart</h4>
        </div>
        <h1 id='ih'>Internships (2)</h1>
        <div className='insdiv' id="neyr">
            <h2>Neyras Company Bangalore</h2>
            <p>Successfully completed a 3-month Online Web Development Internship at Neyras, where I gained hands-on experience in modern web technologies. Developed two real-world projects while learning HTML, CSS, JavaScript, SQL, React, and JSON. Strengthened my frontend development, problem-solving, and project-building skills through practical implementation.</p>
            <h3>Full-Stack Web development</h3>
        </div>
        <div className='insdiv' id="nexg">
          <h2>NexGen Innovator Solutions</h2>
          <p>Completed an intensive internship focused on Python Full-Stack Web Application Development using the Django Framework. Gained hands-on experience in MVT architecture, database modeling, Django Admin, Agentic AI, and Data Analytics while building practical projects and strengthening real-world problem-solving skills. This internship provided valuable insights into industry standards and the skills, mindset, and professionalism companies expect from aspiring software engineers. Special thanks to Mr. John Wesley Samuel for his exceptional mentorship and guidance throughout this journey.</p>
          <h3>Full-Stack Web Application and Data Analytics</h3>
        </div>

    </div>

    <div id="Certificates">
      <h1 style={{textAlign:"center"}}>Certificates</h1>

      <div id='certcon'>

        <div className='certdiv'>
            <img src="/images/nexgen.jpeg" alt="" onClick={()=>imgclick(event)} />
            <div className='cont'>
            <h3>NexGen Internship</h3>
            <p>Completed an intensive internship focused on Python Full-Stack Web Application Development using the Django Framework.</p>
            </div>
        </div>

        <div className='certdiv'>
             <img  src="/images/thirenex.png" alt="" onClick={()=>imgclick(event)}/>
            <div className='cont'>
            <h3>Thiranex Internship</h3>
            <p>Completed a month internship focused on Web Development in online and I have submit some projects in this internship.</p>
            </div>
        </div>

        <div className='certdiv'>
               <img  src="/images/hackathon.png" alt=""  onClick={()=>imgclick(event)}/>
            <div className='cont'>
            <h3 style={{marginTop:"-20px"}}>St. Joshep College</h3>
            <p style={{marginTop:"15px"}}>Participated in Hackathon 2K26 conducted by the Department of Computer Science and Engineering at St. Joseph College of Engineering.</p>
            </div>
        </div>

        <div className='certdiv'>
             <img src="/images/html.png" alt=""  onClick={()=>imgclick(event)}/>
            <div className='cont'>
            <h3>CSC HTML, CSS, JS</h3>
            <p>Completed Basic of web development in CSC. I had learn HTML , CSS , and JS in this Course.</p>
            </div>
        </div>
        
        <div className='certdiv'>
             <img src="/images/csc hdca.png" alt="" onClick={()=>imgclick(event)} />
            <div className='cont'>
            <h3>CSC HDCA</h3>
            <p>Completed an HDCA Course in the CSC Academy in my 12th leave. In this Course I had learned Some key techniques.</p>
            </div>
        </div>
        
        <div id='blur'>
          
          
        </div>
        <button id='cb' onClick={()=>cclick()}>X</button>
      </div>
    </div>

    </div>
  )
}

export default Project