import React from 'react'
import "../assets/css/outstuffing.css"
import OFBanner from '../components/OFBanner'
import OFAdvantages from '../components/OFAdvantages'
import OFServices from '../components/OFServices'
import OFProccess from '../components/OFProccess'
import Thecnologies from '../components/Thecnologies'
import ReviewsSection from '../components/ReviewsSection'
import Contact from '../components/Contact'
const Outstuffing = () => {
  return (
    <div className="outstuffing-container">
        <OFBanner/>
        <OFAdvantages/>
        <OFServices/>
        <OFProccess/>
        <Thecnologies/>
        <ReviewsSection/>
        <Contact white/>
        
    </div>
  )
}

export default Outstuffing