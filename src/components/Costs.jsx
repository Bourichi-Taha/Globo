import React from 'react'
import "../assets/css/costs.css"
import icon1 from '../assets/images/icon/fixed-price-icon.png'
import icon2 from '../assets/images/icon/vouchar-icon.png'
import icon3 from '../assets/images/icon/time-and-material-icon.png'
const Costs = () => {
    return (
        <div className="costs-container">
            <h3 className="costs-subtitle">No Name. No Boundaries.</h3>
            <h1 className="costs-title">How we work with costs</h1>
            <div className="costs-steps">
                <div className="costs-step">
                    <img src={icon1} alt="" className="costs-step-img" />
                    <h2 className="costs-step-title">Fixed price</h2>
                    <p className="costs-step-desc">
                        Based on your requirements and ideas, we provide you with the project plan and the required budget.
                    </p>
                </div>
                <div className="costs-step">
                    <img src={icon3} alt="" className="costs-step-img" />
                    <h2 className="costs-step-title">Time and materials</h2>
                    <p className="costs-step-desc">
                        The required budget is based on the actual software development hours worked and “material costs”.
                    </p>
                </div>
                <div className="costs-step">
                    <img src={icon2} alt="" className="costs-step-img" />
                    <h2 className="costs-step-title">Vouchers</h2>
                    <p className="costs-step-desc">
                        Vouchers for certain amounts of development hours of outsourcing per month.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Costs