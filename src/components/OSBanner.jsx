import React from 'react'
import "../assets/css/os-banner.css"
import img from "../assets/images/icon/2.-Outsourcing-Hero-1.png"
const OSBanner = () => {
  return (
    <div className="os-banner-container">
        <div className="os-banner-img-container">
        <img src={img} alt="" className="os-banner-img" />
        <div className="os-banner-img-content">
            <h1 className="os-banner-img-content-title">Outsourcing</h1>
            <h6 className="os-banner-img-content-subtitle">The Future of Jobs</h6>
            <p className="os-banner-img-content-desc">No Name manages the outsourcing of software development so that you can focus on your core business. What makes us different is that we do this whilst ensuring the expertise you need is nearby.</p>
            <button className="os-banner-img-content-btn"><span>Get started</span></button>
        </div>
        </div>
    </div>
  )
}

export default OSBanner