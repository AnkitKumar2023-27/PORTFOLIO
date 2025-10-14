import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import github from'../../fonts/img/github.png'
import linkedin from'../../fonts/img/linkedin.png'
import instagram from'../../fonts/img/instagram.png'





function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_6vmkrgc", "template_mxi3yr8", form.current, {
        publicKey: "kpNTFHqr7RVx5fmaS",
      })
      .then(
         () => {
        console.log("SUCCESS!");
        e.target.reset(); 
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
      );
  };

  return (
    <div className="contact-main" id="Contact">
      <div className="contact-heading">
        <h1>Get In Touch</h1>
        <span>Contact Me</span>
      </div>

      <div className="contact-main2">
      
        <div className="contact-left">
          <h1>Talk to me</h1>
          <div className="blur" style={{background:'#1db7d65f', zIndex:'-1',  left:'-4rem', top:'10rem', position:"absalute"}}></div>
          <div className="contact-card">
              <i className="fa-solid fa-envelope contact-icon"></i>
              <h3>Email</h3>
              <p>ankitk64764@gmail.com</p>
              <a
                href="mailto:ankitk64764@gmail.com"
                className="contact-link"
              >
                Write me →
              </a>
            </div>



          <div className="contact-card">
            <i className="fa-brands fa-linkedin contact-icon"></i>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/username</p>
            <a
              href="https://www.linkedin.com/in/ankit-kumar-b06a11295"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Connect →
            </a>
          </div>

          <div className="contact-card" style={{zIndex:'100'}}>
            <i className="fa-solid fa-phone contact-icon"></i>
            <h3>Phone</h3>
            <p>+91 8756***392</p>
            <a href="tel:+918756275392" className="contact-link">
              Call me →
            </a>
          </div>
        </div>

       
        <div className="contact-right">

          <h1>Write Your Project</h1>
            <div className="blur"  style={{background:'lightyellow', zIndex:'-1',  left:'11rem', top:'19rem', } }></div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
          <div className="i-icons">
                   <a href="https://github.com/AnkitKumar2023-27 "> <img src={github} alt="" /></a>
                   <a href="https://www.linkedin.com/in/ankit-kumar-b06a11295"><img src={linkedin} alt="" /></a>
                   <a href="https://www.instagram.com/this_is__ankit_rajput?igsh=MW80OGRrcmh3cTd4ZA==&utm_source=ig_contact_invite"> <img src={instagram} alt="" /></a>
                      
                     
                   </div>
        </div>
      </div>
     
    </div>
  );
}

export default Contact;
