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
                    <p className="hr-row-left-desc">We believe that technology should amplify your capabilities, not limit them.</p>
                    <p className="hr-row-left-desc">At Globo People, our mission is to unclutter your tech landscape,</p>
                    <p className="hr-row-left-desc">empowering you to concentrate on your core business strengths.</p>

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