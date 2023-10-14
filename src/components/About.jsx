import React from 'react'
import "../assets/css/about.css"
import img from "../assets/images/logo/golobo.png"
const About = () => {
  return (
    <div id='about' className="about-container">
      <h2 className="ac-sub-heading"><span>About</span></h2>
      <div className="ac-content">
        <div className="ac-content-left">
          <img src={img} alt="" className="ac-content-left-image" />
        </div>
        <div className="ac-content-right">
          <div className="ac-content-right-title">We believe in simplicity.</div>
          <div className="ac-content-right-desc">
            Working closely with our clients, we ensure that their business needs are understood and met. With long-standing relationships of over 20 years, we work to achieve timely deliveries, maintainable systems, and simple solutions.
          </div>
          <div className="ac-content-right-title">From 100k to 15k lines of Code.</div>
          <div className="ac-content-right-desc">
            Our focus on what we must achieve and a profound understanding of your business guarantees a smarter and more efficient code.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About