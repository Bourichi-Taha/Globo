import React from 'react'
import "../assets/css/outsourcing.css"
import OSBanner from '../components/OSBanner'
import OSServices from '../components/OSServices'
import How from '../components/How'
import OSProccess from '../components/OSProccess'
import Thecnologies from '../components/Thecnologies'
import ReviewsSection from '../components/ReviewsSection'
import Costs from '../components/Costs'
import Contact from '../components/Contact'
const Outsourcing = () => {
  return (
    <div className="outsourcing-container">
        <OSBanner />
        <OSServices/>
        <How/>
        <OSProccess/>
        <Thecnologies/>
        <ReviewsSection/>
        <Costs/>
        <Contact white/>
    </div>
  )
}

export default Outsourcing