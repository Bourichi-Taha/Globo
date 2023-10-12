import React from 'react'
import "../assets/css/our-client.css"
import LogoSlider from './LogoSlider'
const OurClient = () => {
  return (
    <div className="our-client-container">
        <h1 className="occ-title">Trusted by global businesses</h1>
        <p className="occ-desc">We work with the best minds from groundbreaking companies. Our software engineering expertise gives them the space to experiment and conduct research, dream, grow and excel.</p>
        <LogoSlider />
        <h1 className="occ-title">Our Trusted Partners</h1>
        <p className="occ-desc">Strong Collaborations. Our network of trusted partners fuels innovation and enhances our ability to serve you better.</p>
        <LogoSlider partners />
    </div>
  )
}

export default OurClient