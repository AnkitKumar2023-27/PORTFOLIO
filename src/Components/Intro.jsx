import React from 'react'
import './Intro.css'
import github from'../fonts/img/github.png'
import linkedin from'../fonts/img/linkedin.png'
import instagram from'../fonts/img/instagram.png'
import vector1 from '../fonts/img/Vector1.png'
import vector2 from '../fonts/img/Vector2.png'
import boy from '../fonts/img/boy4.png'
import crown from '../fonts/img/crown.png'
import thumbup from '../fonts/img/thumbup.png'
import glassImogi from '../fonts/img/glassesimoji.png'
import FloatingDiv from './FloatingDIV/FloatingDiv'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

function Intro() {
   const transition={ duration:2,type:"spring"}
  return (
   <div>
    <div className='Intro'>
         <div className="i-left">
         <div className="i-name">

            <span>Hey there! I'm </span>
            <br />
            <span> Ankit Rajput,</span>
            <br />
            <span>A Full-Stack Developer who loves turning ideas
                into functional and visually appealing web experiences.I specialize in crafting responsive, high-performance websites with a strong focus on quality andusability.</span>
         </div>  
          <Link spy={true} to='Contact' smooth={true} >
                    <button  className='button i-button'>Hire me</button>
                      </Link>
          
       
         <div className="i-icons">
            <a href="https://leetcode.com/u/Ankit_kumar8756/"> <img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/ankit-kumar-b06a11295"><img src={linkedin} alt="" /></a>
           <a href="https://www.instagram.com/this_is__ankit_rajput?igsh=MW80OGRrcmh3cTd4ZA==&utm_source=ig_contact_invite "> <img src={instagram} alt="" /></a>
            
           
         </div>
         </div>
        <div className="i-right">
           <img src={vector1} alt="" />
           <img src={vector2} alt="" />
            <img src={boy} alt="" />
             <motion.img
             initial={{left:"10%"}}
             whileInView={{left:"20%"}}
             transition={transition}
             src={glassImogi} alt="" />
            
               </div> 
        <motion.div
         initial={{left:"60%"}}
             whileInView={{left:"68%"}}
             transition={transition}
        
        className='Floating-wrapper' style={{top:'20%', left:'70%'}}>
        <FloatingDiv emoge={crown} text1='Web' text2="Developer"></FloatingDiv>
        </motion.div>
        <motion.div 
         initial={{left:"35%"}}
            whileInView={{left:"40%"}}
            transition={transition}
        
        className='Floating-wrapper' style={{left:'38rem', top:'65%'}}>
          <FloatingDiv emoge={thumbup} text1='Data' text2="Structure"></FloatingDiv>
        </motion.div>
        <div className='blur' style={{background:'rgb(238 200 255)',top:'5%', left:'70%'}}></div>
        <div className='blur' 
        style={{background:'#7fcedeff',
         // top:'17rem', 
         width:'21rem',
         height:'11rem',
         // left:'-9rem'
         left:'33rem', top:'25rem' 

        }}></div>

   
    </div>
</div>
  )
}

export default Intro