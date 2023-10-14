import React from 'react'
import "../assets/css/hero.css"
import { Link } from 'react-router-dom'
import img from "../assets/images/logo/globo.png"
const Hero = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return (
        <div id='hero' className="hero-container">
            <div className="hr-row">
                <div className="hr-row-left">
                    <h2 className="hr-row-left-title">Simplify your IT<br />
                        with <span className="s1">Globo</span> <br /><br /></h2>
                    <p className="hr-row-left-desc">We believe that technology should be an enabler, not a barrier.</p>
                    <p className="hr-row-left-desc">Our mission is to empower your business by simplifying your IT infrastructure,</p>
                    <p className="hr-row-left-desc">so you can focus on what you do best.</p>

                    <Link to="/" onClick={() => scrollToSection("footer")} className="hr-row-left-button"><span>Start Now</span></Link>
                </div>
                <div className="hr-row-right">
                    <img src={img} alt="" className="hr-row-right-image" />
                </div>
            </div>
        </div>
    )
}

export default Hero