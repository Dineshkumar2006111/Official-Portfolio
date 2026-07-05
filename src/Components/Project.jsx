import React, { useEffect } from 'react'

const Project = () => {
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{marginTop:"60px"}}>
      <center>
          <h1>Projects</h1>
          <p style={{marginTop:"15px"}}>Here are some of the projects I’ve built so far, reflecting my skills, learning, and passion for development.</p>
          <div id="procollection">
            <div id="projdiv">
              <img src="images/vegetable.jpg" alt="" />
              <div id="projcont">
                <p>AgriSmart</p>
                <button id="projbut"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/sdineshkumar8285_hackathon-reactjs-webdevelopment-ugcPost-7478021814674210816-tlgz/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90">View</a></button>
              </div>
            </div>

            <div id="projdiv">
              <img src="images/task_management.jpg" alt="" />
              <div id="projcont">
                <p style={{left:"40px"}}>Task Management</p>
                <button id="projbut"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/sdineshkumar8285_reactjs-javascript-webdevelopment-activity-7468991986663038976-QX4a?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90">View</a></button>
              </div>
            </div>

            <div id="projdiv">
              <img src="images/calculator.jpg" alt="" />
              <div id="projcont">
                <p style={{left:"23%"}}>Calculator</p>
                <button id="projbut"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontend-javascript-ugcPost-7425551229344239616-c9km/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90">View</a></button>
              </div>
            </div>

            <div id="projdiv">
              <img src="images/pasgen.jpg" alt="" />
              <div id="projcont">
                <p style={{left:"27px"}}>Password Generator</p>
                <button id="projbut"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddeveloper-javascript-activity-7421910878729564160-b3fB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90">View</a></button>
              </div>
            </div>

            <div id="projdiv">
              <img src="images/image galary.jpg" alt="" />
              <div id="projcont">
                <p style={{left:"70px"}}>Image Galary</p>
                <button id="projbut"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddevelopment-responsivedesign-activity-7424104427613048832-07LE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90">View</a></button>
              </div>
            </div>

            <div id="projdiv">
              <img src="images/animegenz.jpg" alt="" />
              <div id="projcont">
                <p style={{left:"70px"}}>AnimeGenZ</p>
                <button id="projbut"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/sdineshkumar8285_webdevelopment-frontenddeveloper-javascript-activity-7440359754071252992-Zy0M?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF-Z-y4BNS8P8BxDci3ivP7zknJPCueux90">View</a></button>
              </div>
            </div>

            <div id='cwp'>
            <h2 style={{marginTop:"-5px"}}>Currently Working project</h2>
            <h3 style={{marginTop:"5px"}}>Smart Waste Collection and Monitoring System</h3>
            <p style={{marginTop:"5px"}}>The Smart Waste Collection and Monitoring System is a web-based application. It enables users to report waste issues.</p>
            <p style={{marginTop:"5px"}}>Status : In Progress</p>
            <div id='load'><p id='color'></p></div>
            </div>

          </div>
      </center>
    </div>
  )
}

export default Project