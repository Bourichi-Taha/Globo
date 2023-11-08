import React from 'react'
import img from "../assets/images/icon/2.-How-do-we-do-that.png"
import "../assets/css/how.css"
const How = () => {
  return (
    <div className="how-section-container">
        <div className="how-section-container-left">
            <img src={img} alt="" className="how-section-container-left-img" />
        </div>
        <div className="how-section-container-right">
            <h3 className="how-section-container-right-sub-title">Agile Scrum Development</h3>
            <h1 className="how-section-container-right-title">How do we do that?</h1>
            {/* <h2 className="how-section-container-right-title-desc">We deliver service – so it’s not how us, but you!</h2> */}
            <p className="how-section-container-right-desc">At No Name, we value great communications with our customers. To ensure everyone, from team members to project leader to you as the project owner, are fully engaged we work according to the Scrum-philosophy.</p>
            <p className="how-section-container-right-desc">As a customer, you participate in every step of the process to achieve the maximum effectiveness of your project. With short feedback cycles, we deliver new functionalities and updates to your application every 2 to 4 weeks.</p>
            <button className="how-section-container-right-button"><span>Read More</span></button>
        </div>
    </div>
  )
}

export default How