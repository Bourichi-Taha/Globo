import React from 'react'
import "../assets/css/os-proccess.css"
import icon1 from "../assets/images/icon/resource-selection-icon.png"
const OSProccess = () => {
    return (
        <div className="os-proccess-container">
            <h1 className="os-proccess-title">
                Our Outsourcing Process
            </h1>
            <div className="os-proccess-steps">
                <div className="os-proccess-step f1">
                    <img src={icon1} alt="" className="os-proccess-step-icon" />
                    <h1 className="os-proccess-step-title">Share Your Plans</h1>
                    <p className="os-proccess-step-desc">We hear your ideas, and our technical managers assign skilled resources according to your project preference.</p>
                </div>
                <div className="os-proccess-step f2">
                    <img src={icon1} alt="" className="os-proccess-step-icon" />
                    <h1 className="os-proccess-step-title">Share Your Plans</h1>
                    <p className="os-proccess-step-desc">We hear your ideas, and our technical managers assign skilled resources according to your project preference.</p>
                </div>
                <div className="os-proccess-step f3">
                    <img src={icon1} alt="" className="os-proccess-step-icon" />
                    <h1 className="os-proccess-step-title">Share Your Plans</h1>
                    <p className="os-proccess-step-desc">We hear your ideas, and our technical managers assign skilled resources according to your project preference.</p>
                </div>
                <div className="os-proccess-step f4">
                    <img src={icon1} alt="" className="os-proccess-step-icon" />
                    <h1 className="os-proccess-step-title">Share Your Plans</h1>
                    <p className="os-proccess-step-desc">We hear your ideas, and our technical managers assign skilled resources according to your project preference.</p>
                </div>
                <div className="os-proccess-step f5">
                    <img src={icon1} alt="" className="os-proccess-step-icon" />
                    <h1 className="os-proccess-step-title">Share Your Plans</h1>
                    <p className="os-proccess-step-desc">We hear your ideas, and our technical managers assign skilled resources according to your project preference.</p>
                </div>
            </div>
            <div className="os-proccess-bottom">
                <h1 className="os-proccess-bottom-title">
                    Want to know what outsourcing can do for you?
                </h1>
                <button className="os-proccess-bottom-btn"><span>Get started</span></button>
                <p className="os-proccess-bottom-desc">As No Name wants to serve our loyal customers the best way possible, It is always negotiable to agree on a different way of working than those mentioned above.</p>
            </div>
        </div>
    )
}

export default OSProccess