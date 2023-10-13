import React from 'react'
import "../assets/css/countries.css"
import "../assets/css/countries.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import tangier from "../assets/images/icon/tangier.jpg"
import amsterdam from "../assets/images/icon/amsterdam.jpg"
import dubai from "../assets/images/icon/dubai.jpg"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const Countries = () => {
  return (
    <div className="countries-container">
      <h1 className='cc-title'>Where You can find us</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 15,
          depth: 320,
          modifier: 1,
          slideShadows: false,
        }}



        modules={[EffectCoverflow, Pagination, Navigation]}
        className="bannerSwiper"
      >

        <SwiperSlide >
          <div className="card-box" >
            <div className="top d-flex">
              <span className="icon-logo-01"></span>
              <div>
                <h6>Tangier</h6>
                <h6 className="price">Morocco</h6>
              </div>
            </div>
            <div className="content">
              <div className="image">
                <img src={tangier} alt="Globo" />
              </div>


            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  >
          <div className="card-box" >
            <div className="top d-flex">
              <span className="icon-logo-01"></span>
              <div>
                <h6>Amsterdam</h6>
                <h6 className="price">Netherlands</h6>
              </div>
            </div>
            <div className="content">
              <div className="image">
                <img src={amsterdam} alt="Globo" />
              </div>


            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card-box" >
            <div className="top d-flex">
              <span className="icon-logo-01"></span>
              <div>
                <h6>Dubai</h6>
                <h6 className="price">United Arab Emirates</h6>
              </div>
            </div>
            <div className="content">
              <div className="image">
                <img src={dubai} alt="Globo" />
              </div>


            </div>
          </div>
        </SwiperSlide>



      </Swiper>

    </div>

  )
}

export default Countries