import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules" 

import profilePic1 from "../../fonts/img/profile1.jpg"
import profilePic2 from "../../fonts/img/profile2.jpg"
import profilePic3 from "../../fonts/img/profile3.jpg"
import profilePic4 from "../../fonts/img/profile4.jpg"

import "swiper/css"
import "swiper/css/pagination"

function Testimonial() {
  const clients = [
    { img: profilePic1, review: "They transformed our idea into a beautiful, functional web app. The design, code quality, and attention to UX was excellent" },
    { img: profilePic2, review: "Professional, creative, and easy to communicate with. One of the best freelancers I've worked with" },
    { img: profilePic3, review: "Working with you was an absolute pleasure. The project was delivered on time, with clean code and great attention to detail." },
    { img: profilePic4, review: "It's rare to find someone who's both creative and technical.Ankit Kumar made our project stress-free and successful" },
  ]

  return (
    <div className="t-wrapper" id='Testimonial'>
     
      <div className="t-heading">
        <span>Clients Always Get </span>
        <span>Exceptional work </span>
        <span>From me</span>
        <div className="blur t-blur" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "lightyellow" }}></div>
      </div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="testimonial-slider"
      >

        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="client" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial
