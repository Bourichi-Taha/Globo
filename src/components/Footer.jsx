import React from 'react'
import "../assets/css/footer.css"
import { Link } from 'react-router-dom'
import VerticalTabs from './VerticalTabs'
const Footer = () => {
  return (
    <div className="footer-container">
        <div className="fc-top">
            <div className="fc-top-left">
              <h1 className="fc-top-left-title">
              Together more independent to undertake.
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