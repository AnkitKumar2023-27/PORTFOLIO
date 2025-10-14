import React from 'react'
import './Card.css'
function Card({emogi ,heading, detail}) {
  return (
    <div className='card'> 
    <img src={emogi} alt="**" />
    <span >{heading}</span>
    
    <span>{detail}</span>
    <button className='c-button' >Read more</button>
    
    </div>
  )
}

export default Card