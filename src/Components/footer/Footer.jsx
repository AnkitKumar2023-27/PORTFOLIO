import React from 'react'
import './footer.css'
import wave from'../../fonts/img/wave.png'
function Footer() {
  return (
    <div>
         <div className='footer'>
            <img src={wave} alt="" />
          <div className="f-content">
            <span>Made by Ankit &#x2665;</span>
            
            <div className="icons">
                <a href="https://www.linkedin.com/in/ankit-kumar-b06a11295"><i class="fa-brands fa-linkedin"></i></a>
               <a href="https://www.instagram.com/this_is__ankit_rajput?igsh=MW80OGRrcmh3cTd4ZA==&utm_source=ig_contact_invite"><i class="fa-brands fa-square-instagram"></i></a>
              <a
                href="https://wa.me/918756275392"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-whatsapp"></i>
                </a>
            </div>
          </div>
            </div>


    </div>
  )
}

export default Footer