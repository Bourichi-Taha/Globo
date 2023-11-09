import React from 'react'
import "../assets/css/of-proccess.css"
import icon1 from "../assets/images/icon/resource-selection-icon.png"
import icon2 from "../assets/images/icon/interview-icon.png"
import icon3 from "../assets/images/icon/finalization-icon.png"
import icon4 from "../assets/images/icon/project-kick-off-icon.png"

const OFProccess = () => {
    return (
        <div className="of-proccess-container">
            <h1 className="of-proccess-title">
                Our IT Outstaffing Process
            </h1>
            <div className="of-proccess-steps">
                <div className="of-proccess-step f1">
                    <img src={icon1} alt="" className="of-proccess-step-icon" />
                    <h1 className="of-proccess-step-title">Resource Selection</h1>
                    <p className="of-proccess-step-desc">Our technical hiring managers pick the most skilled resources according to your personal preferences and schedule an interview.</p>
                </div>
                <div className="of-proccess-step f2">
                    <img src={icon2} alt="" className="of-proccess-step-icon" />
                    <h1 className="of-proccess-step-title">Interview</h1>
                    <p className="of-proccess-step-desc">Interview the top 10% of talent from around the world and select the best on basis of performance. Send a test task as well to be 100% sure.</p>
                </div>
                <div className="of-proccess-step f3">
                    <img src={icon3} alt="" className="of-proccess-step-icon" />
                    <h1 className="of-proccess-step-title">Finalization</h1>
                    <p className="of-proccess-step-desc">When your required resource is finalized and selected, our team starts with the agreement and contract for your project.</p>
                </div>
                <div className="of-proccess-step f4">
                    <img src={icon4} alt="" className="of-proccess-step-icon" />
                    <h1 className="of-proccess-step-title">Project Kick-Off</h1>
                    <p className="of-proccess-step-desc">Once the contract is signed, your dedicated resource starts working for you in just a few days, or according to the agreement.</p>
                </div>
            </div>
            <div className="of-proccess-bottom">
                <h1 className="of-proccess-bottom-title">
                    Want to know what outsourcing can do for you?
                </h1>
                <button className="of-proccess-bottom-btn"><span>Get started</span></button>
                <p className="of-proccess-bottom-desc">As No Name wants to serve our loyal customers the best way possible, It is always negotiable to agree on a different way of working than those mentioned above.</p>
            </div>
        </div>
    )
}

export default OFProccess