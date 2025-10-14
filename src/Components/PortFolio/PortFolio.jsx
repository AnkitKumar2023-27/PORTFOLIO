import React from 'react'
import './PortFolio.css'

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import Sidebar from '../../fonts/img/Sidebar.png'
import musicApp from '../../fonts/img/musicapp.png'
import Ecommerce from '../../fonts/img/ecommerce.png'
import HDC from '../../fonts/img/hoc.png'

function PortFolio() {
  return (
    <div className="portFolio" id="Portfolio">
      <span>Recent Projects</span>
      <span>PortFolio's</span>

      <Swiper
        spaceBetween={30}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='portfolio-slider'
        breakpoints={{
          1024: { slidesPerView: 3 },  // Desktop
          768: { slidesPerView: 2 },   // Tablet
          0: { slidesPerView: 1 },     // Mobile
        }}
      >
        <SwiperSlide>
          <img src={musicApp} alt="Music App" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce App" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar UI" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HDC} alt="High Order Component" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PortFolio
