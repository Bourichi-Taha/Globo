import React from 'react'
import "../assets/css/services.css"

const Services = () => {
    return (
        <div className="services-container">
            <h2 className="sc-sub-heading"><span>Services</span></h2>
            <h2 className="ac-heading"><span>Elevate Your Business with Our IT Solutions</span></h2>
            <div className="ac-bottom">
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Seniority</div>
                    <div className="ac-bc-title">Back-end</div>
                    <div className="ac-bc-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum dolore facere, rem possimus natus.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Productivity</div>
                    <div className="ac-bc-title">DevOps</div>
                    <div className="ac-bc-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum dolore facere, rem possimus natus.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Creativity</div>
                    <div className="ac-bc-title">Front-end</div>
                    <div className="ac-bc-desc">We build custom dashboards, websites and responsive web applications to get an insight into the large systems you run, provide business intelligence and improve communication.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Integrity</div>
                    <div className="ac-bc-title">Big data</div>
                    <div className="ac-bc-desc">We have the expertise to provide an architecture for Big Data. We also use machine learning and artificial intelligence frameworks to help create value.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Reliability</div>
                    <div className="ac-bc-title">Machine learning</div>
                    <div className="ac-bc-desc">We design and implement intelligent systems that learn and improve over time, We automate testing and make sure test are running prior to deployment, We also take care of writing test scenarios.</div>
                </div>
                <div className="ac-bottom-card">
                    <div className="ac-bc-sub-title">Availability</div>
                    <div className="ac-bc-title">System integration</div>
                    <div className="ac-bc-desc">We help you transform your IT landscape by bridging the gap between your old and new applications. Together, we make your systems more sustainable, modern, scalable, communicative and cost-effective.</div>
                </div>
            </div>
        </div>
    )
}

export default Services