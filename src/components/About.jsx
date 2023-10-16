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
          <div className="ac-content-right-title">We believe in effortless solutions.</div>
          <div className="ac-content-right-desc">
          By forging close partnerships with our clients, we gain a deep understanding of their unique business objectives. With relationships that span decades, our focus is on prompt service delivery, sustainable system architecture, and straightforward answers to complex challenges.
          </div>
          <div className="ac-content-right-title">Code Lean, Dream Big.</div>
          <div className="ac-content-right-desc">
          Our laser-focused approach and deep grasp of your business landscape enable us to distill complex problems into clean, efficient code. With Globo People, experience smarter programming that doesn't compromise on functionality.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About