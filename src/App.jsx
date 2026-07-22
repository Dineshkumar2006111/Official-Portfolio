import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import { HiMenu } from "react-icons/hi";

function App() {
  const [show, setshow] = useState(false);
  let [hidshow,sethidshow]=useState(false)
  let [hidshowc,sethidshowc]=useState(1)
  function fun(){
    if(hidshowc%2==0){
      sethidshow(true)
    }else{
      sethidshow(false)
    }
  }
  
  return <>
  <Router>
    <nav >
      <h1>Dinesh</h1>
      <ul>
      <Link className="ll"  to="/" id="show" onMouseEnter={()=>{setshow(true) }} onMouseLeave={()=>{setshow(false)}} >Home</Link>
      {
      show&&
    <ul id="mea"  onMouseEnter={()=>{setshow(true) }} onMouseLeave={()=>{setshow(false)}}><li><a href="#about">About</a></li>
      <p id="line"></p><li><a href="#skill">Skill</a></li></ul>
    }
      <Link className="ll" to="/project" >Profession</Link>
      <Link className="ll" to="/contact" >Contact</Link>
      </ul>
      <div id="meanu"><HiMenu size={35} onClick={()=>{sethidshowc(hidshowc+=1),fun()
      }}/></div>
      {hidshow &&
    <div id="hiddenmeanu">
        <ul >
      <Link className="hl"  to="/" style={{textDecoration:"none",color:"white"}} onClick={()=>{sethidshowc(hidshowc+=1),fun()
      }}>Home</Link>
      <Link className="hl" to="/project" style={{textDecoration:"none",color:"white", marginTop:"4px"}} onClick={()=>{sethidshowc(hidshowc+=1),fun()
      }}>Profession</Link>
      <Link className="hl" to="/contact" style={{textDecoration:"none",color:"white", marginTop:"4px"}} onClick={()=>{sethidshowc(hidshowc+=1),fun()
      }}>Contact</Link>
        </ul>
      </div>
      }
      </nav>
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Project/>}/>
      <Route path="contact" element={<Contact/>}/>
      

    </Routes>
  </Router>
  
  </>;
}

export default App;
