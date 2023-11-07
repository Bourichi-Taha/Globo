import React from 'react'
import "../assets/css/about-section.css"
import img from "../assets/images/icon/1.-About-us.png"
import icon1 from "../assets/images/icon/creative-places-icon.png"
import icon2 from "../assets/images/icon/all-over-the-world-icon.png"
import icon3 from "../assets/images/icon/exceptional-people-icon.png"
const AboutSection = () => {
  return (
    <div className="about-section-container">
        <div className="about-section-container-left">
            <img src={img} alt="" className="about-section-container-left-img" />
            <div className="about-section-statistics">
                <div className="about-section-statistics-item">
                    <img src={icon1} alt="" className="about-section-statistics-item-img" />
                    <h1 className="about-section-statistics-item-numbers">+ 4</h1>
                    <p className="about-section-statistics-desc">Creative places</p>
                </div>
                <div className="about-section-statistics-item">
                    <img src={icon3} alt="" className="about-section-statistics-item-img" />
                    <h1 className="about-section-statistics-item-numbers">+ 430</h1>
                    <p className="about-section-statistics-desc">Exceptional people</p>
                </div>
                <div className="about-section-statistics-item">
                    <img src={icon2} alt="" className="about-section-statistics-item-img" />
                    <h1 className="about-section-statistics-item-numbers">+ 5</h1>
                    <p className="about-section-statistics-desc">All over the world</p>
                </div>
            </div>
        </div>
        <div className="about-section-container-right">
            <h3 className="about-section-container-right-sub-title">About Us</h3>
            <h1 className="about-section-container-right-title">No Name. No Boundaries.</h1>
            <h2 className="about-section-container-right-title-desc">We deliver service – so it’s not about us, but you!</h2>
            <p className="about-section-container-right-desc">With a lack of development capacity in western countries, outsourcing to the eastern part of the world is becoming more and more popular, but it also has its challenges.</p>
            <p className="about-section-container-right-desc">We make outsourcing easily accessible, easily manageable, and result-driven for you as a customer. We do this by eliminating all the known challenges related to outsourcing and staffing whilst keeping the benefits, such as cost savings and access to talent and innovation.</p>
            <button className="about-section-container-right-button"><span>Read More</span></button>
        </div>
    </div>
  )
}

export default AboutSection