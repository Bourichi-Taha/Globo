import React from 'react'
import "../assets/css/footer.css"
import { Link, useLocation } from 'react-router-dom'
import VerticalTabs from './VerticalTabs'
const Footer = () => {
  const location = useLocation();
  return (
    <div id='footer' className="footer-container" style={location.pathname === "/home" ? {background: "linear-gradient(0deg, #00a6ffc7 5.32%, white 94.32%)"} : null}>
        <div className="fc-top">
            <div className="fc-top-left">
              <h1 className="fc-top-left-title">
              Elevating Teams to Self-Driven Success.
              </h1>
              <Link to="#contact" className="fc-tl-button"><span>Start Now</span></Link>

            </div>
            <div className="fc-top-right">
              <VerticalTabs />
            </div>
        </div>
        <div className="fc-bottom">
            <div className="fc-bottom-left">
              Globo® 
            </div>
        </div>
    </div>
  )
}

export default Footer