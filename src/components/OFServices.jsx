import React from 'react'
import "../assets/css/of-services.css"
import icon1 from "../assets/images/icon/talent-requirements-icon.png"
const OFServices = () => {
    return (
        <div className="of-services-container">
            <div className="of-services-top">
                <div className="of-sevices-card">
                    <img src={icon1} alt="" className="of-services-car-image" />
                    <h1 className="of-services-car-title">Talent requirements</h1>
                    <p className="of-services-car-desc">Get the requirements the talent has to have.</p>
                </div>
                <div className="of-sevices-card">
                    <img src={icon1} alt="" className="of-services-car-image" />
                    <h1 className="of-services-car-title">Talent requirements</h1>
                    <p className="of-services-car-desc">Get the requirements the talent has to have.</p>
                </div>
                <div className="of-sevices-card">
                    <img src={icon1} alt="" className="of-services-car-image" />
                    <h1 className="of-services-car-title">Talent requirements</h1>
                    <p className="of-services-car-desc">Get the requirements the talent has to have.</p>
                </div>
            </div>
            <div className="of-services-bottom">
                <div className="of-sevices-card">
                    <img src={icon1} alt="" className="of-services-car-image" />
                    <h1 className="of-services-car-title">Talent requirements</h1>
                    <p className="of-services-car-desc">Get the requirements the talent has to have.</p>
                </div>
                <div className="of-sevices-card">
                    <img src={icon1} alt="" className="of-services-car-image" />
                    <h1 className="of-services-car-title">Talent requirements</h1>
                    <p className="of-services-car-desc">Get the requirements the talent has to have.</p>
                </div>
            </div>
        </div>
    )
}

export default OFServices