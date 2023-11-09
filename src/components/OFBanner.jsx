import React from 'react'
import "../assets/css/of-banner.css"
import img from "../assets/images/icon/3.-Hero-section.png"
const OFBanner = () => {
  return (
    <div className="of-banner-container">
        <div className="of-banner-left">
            <h1 className="of-banner-left-title">We hire the top 1% talent, for you!</h1>
            <h3 className="of-banner-left-subtitle">No Name, No Boundaries</h3>
            <p className="of-banner-left-desc">
            With our outstaffing service you obtain the talent you require during a longer period of time through a contract. We select or hire the best fit for your needs, we maintain an open and transparent process.
            </p>
            <button className="of-banner-left-button"><span>get started</span></button>
        </div>
        <div className="of-banner-right">
            <img src={img} alt="" className="of-banner-right-img" />
        </div>
    </div>
  )
}

export default OFBanner