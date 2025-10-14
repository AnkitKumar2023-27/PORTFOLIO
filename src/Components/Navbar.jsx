import React from 'react'
import './Navbar.css' 
import '../App.css'
import Toggle from './Toggle/Toggle';
import {Link} from 'react-scroll'
function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
           < div className='n-name'>Ankit Kumar</div>
           <span><Toggle></Toggle></span>
            </div>
           < div className='n-right'>
           <div className='n-list'>
            <ul>
             <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
               <li>Home </li>
             </Link>
          <Link spy={true} to='Services' smooth={true} >
               <li>Services </li>
             </Link>
          <Link spy={true} to='Qualification' smooth={true} >
               <li>Qualification</li>
             </Link>
          <Link spy={true} to='Testimonial' smooth={true}>
               <li>Testimonial</li>
             </Link>
           
          

            </ul>
           

           </div>

              <Link spy={true} to='Contact' smooth={true}>
                <button className='button n-button'>Contact Us</button> 
             </Link>
              
           </div>

       
    </div>
  )
}

export default Navbar