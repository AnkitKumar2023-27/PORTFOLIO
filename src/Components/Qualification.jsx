import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase, faCalendar } from "@fortawesome/free-solid-svg-icons";
import upwork from '../fonts/img/Upwork.png'
import Facebook from '../fonts/img/Facebook.png'
import Fivver from '../fonts/img/fiverr.png'
import Shopyfy from  '../fonts/img/Shopify.png'
import Amajon from  '../fonts/img/amazon.png'
import { motion } from "framer-motion";


import "./Qualification.css"; 

export default function Qualification() {
  const transition = {  duration: 5, ease: "linear", repeat: Infinity }
  return (
    <div>
    <div  className="details" id="Qualification" >
      <div className="left">
    <section className="qualification">
      {/* Section Title */}
      <div className="qualification-title">
        <h2>Qualification</h2>
        <p>My personal journey</p>
      </div>

      
      <div className="qualification-tabs">
        <div className="tab">
          <FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span>
        </div>
        <div className="tab">
          <FontAwesomeIcon icon={faBriefcase} /> <span>Skill Timeline</span>
        </div>
      </div>

    
      <div className="qualification-timeline">

        <div className="timeline-item left">
          <div className="content">
            <h3>Schooling</h3>
            <p>CPVN Kaimganj </p>
            <span className="ankit" >
              <FontAwesomeIcon icon={faCalendar} /> 2019-2022
            </span>
          </div>
           <div className="blur"></div>
          <div className="circle"></div>
        </div>

       
        <div className="timeline-item right">
          <div className="circle"></div>
          <div className="blur"  style={{background:'#1db7d6ff', zIndex:'1',  left:'2rem', top:'60rem'} }></div>
          <div className="content">
            <h3>Web Development</h3>
            <p>Physics Wallah</p>
            <span>
              <FontAwesomeIcon icon={faCalendar} /> 2022 - 2024
            </span>
          </div>
        </div>

       
        <div className="timeline-item left">
          <div className="content">
            <h3> Graduation</h3>
            <p>Dr AITD Knpr</p>
            <span className="ankit">
              <FontAwesomeIcon icon={faCalendar} /> 2023 - 2027
            </span>
          </div>
          <div className="circle"></div>
        </div>

        
        <div className="timeline-item right">
          <div className=" circle "></div>
          <div className="blur"    style={{background:'#9f7fdeff',  zIndex:"2",left:'2rem', top:'60rem' }}></div>
          <div className="content">
            <h3>Data-Structure</h3>
            <p>Apna College</p>
            <span>
              <FontAwesomeIcon icon={faCalendar} /> 2024 -2025
            </span>
          </div>
        </div>
      </div>
    </section>
    </div>
   
    <div className="right">.
      <motion.div 
      initial={{rotate:360}}
      whileInView={{rotate:0}}
      transition={transition}
      className="r-mainCircle">
        <div className="r-secCircle">
          <img src={upwork} alt="" />

        </div>
         <div className="r-secCircle">
          <img src={Fivver} alt="" />
          
        </div>
         <div className="r-secCircle">
          <img src={Amajon} alt="" />
          
        </div>
         <div className="r-secCircle">
          <img src={Shopyfy} alt="" />
          
        </div>
          <div className="r-secCircle">
          <img src={Facebook} alt="" />
          
        </div>
        </motion.div>
     <div className="r-backGroundCircl blueCircle" ></div>
       <div className="r-backGroundCircl yellowCircle"></div>


      
    </div>
    </div> 
    </div>
  );
}
