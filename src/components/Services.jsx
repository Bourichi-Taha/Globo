import React from 'react'
import "../assets/css/services.css"

const Services = () => {
    return (
        <div id='services' className="services-container">
            <h2 className="sc-sub-heading"><span>Services</span></h2>
            <h2 className="ac-heading"><span>Elevate Your Business with Our IT Solutions</span></h2>
            <div className="ac-bottom">
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Seniority</div>
                    <div className="ac-bc-title">Back-end</div>
                    <div className="ac-bc-desc">Three Decades of Expertise in Tailoring Back-End Technologies: Crafting Solutions for Today and Strategizing for Tomorrow.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Productivity</div>
                    <div className="ac-bc-title">Cloud Services</div>
                    <div className="ac-bc-desc">Unlock the Cloud's Potential: Elevate Your Business with Seamless Migration, Expert Management, and Scalable Cloud Solutions for the Modern Enterprise.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Creativity</div>
                    <div className="ac-bc-title">Front-end</div>
                    <div className="ac-bc-desc">Transforming User Experiences with Bespoke Front-End Solutions: Intelligent Dashboards, Dynamic Websites, and Responsive Apps for Unparalleled Business Insights and Communication.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Integrity</div>
                    <div className="ac-bc-title">Big data</div>
                    <div className="ac-bc-desc">Unlocking the Power of Big Data: Architecting Scalable Solutions Enhanced by Machine Learning and AI to Drive Business Value.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Reliability</div>
                    <div className="ac-bc-title">Artificial Intelligence</div>
                    <div className="ac-bc-desc">Empower Your Business with AI: Intelligent Systems for Data-Driven Decisions and Automated Excellence.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Availability</div>
                    <div className="ac-bc-title">Cyber Security</div>
                    <div className="ac-bc-desc">Fortifying Your Digital Assets: Proactive Security Solutions for Uncompromising Data Protection and Business Resilience.</div>
                </div>
            </div>
        </div>
    )
}

export default Services