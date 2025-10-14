import React from 'react'
import './Sevices.css'
import heartemgi from '../fonts/img/heartemoji.png'
import Card from "./Cards/Card.jsx"
import Glasses from '../fonts/img/glasses.png'
import humble from '../fonts/img/humble.png'
import { motion } from 'framer-motion'

function Services() {
  const transition = { duration: 2, type: "spring" }

  return (
    <div className='Services' id='Services'>
      <div className='Awesome'>
        <span>My Awesome</span>
        <span>Skills</span>
        <span>
         <h5><h2>Languages :</h2> Python, Java, C, C++, Dart, JavaScript, SQL,MYSQL <br />
         <h2>Frameworks :</h2>  React, NodeJS, Express, MongoDB, , Git, Linux,<br /><h2>Database :</h2> MongoDB, and MySQL. <br />
           <h2>Other :</h2> I have a solid grasp of Data Structures and Algorithms,<br /> with over 100+ DSA questions solved on platforms like LeetCode.</h5>
           
          <b>My focus is on creating efficient, scalable, and user-friendly web applications,<br /> combining strong frontend skills with a deep understanding of backend development.
         <br /> I'm currently working on modern web projects using Next.js and React,<br /> enhancing performance, and mastering end-to-end development workflows.</b> 
        </span>
        <a href="https://drive.google.com/file/d/1RYETNQMlevidn--vl31LuSXwnHx1SSAV/view?usp=drivesdk">
          <button className='button s-button'>Download Resume</button>
        </a>
        <div className="blur" style={{ background: '#7fcedeff', left: '2rem', top: '60rem' }}></div>
      </div>

      <div className='cards'>
        <motion.div
          initial={{ x: -45 }}
          whileInView={{x:'5rem' }}
          transition={transition}
        >
          <Card emogi={heartemgi} heading='Full-Stack Developer' detail="HTML, CSS, JavaScript, MERN-Stack, React" />
        </motion.div>

        <motion.div
          initial={{ x:"-10rem", y:"0rem"}}
          whileInView={{ x:'-15rem',y:"5rem" }}
          transition={transition}
          style={{ top: '1rem' }}
        >
          <Card emogi={Glasses} heading='Data Structure' detail="Advanced DS, Striver A2Z Sheet, 200+ LeetCode Questions" />
        </motion.div>

        <motion.div
          initial={{ y: -200 }}
          whileInView={{ y:20 }}
          transition={transition}
          style={{ top: '20rem' }}
        >
          <Card emogi={humble} heading='Projects' detail="Hotel Management, Chatting App, Simon Says Game, Weather Widget" />
        </motion.div>

        <div className='blur' style={{ background: 'rgb(238 200 255)', top: '10rem', right: '150px' }}></div>
      </div>
    </div>
  )
}

export default Services
