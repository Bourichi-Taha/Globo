import React from 'react'
import "../assets/css/our-focus.css"
import RequestIcon from "../assets/images/icon/request-vs-want-icon.png"
import RequestImage from "../assets/images/icon/request-vs-want-img.png"
import NoImage from "../assets/images/icon/1.-No.png"
import NoIcon from "../assets/images/icon/no-section-icon.png"
const OurFocus = () => {
    return (
        <div className="our-focus-container">
            <div className="our-focus-container-text-heading">
                <h1 className="our-focus-container-heading">
                    You‘re our focus
                </h1>
                <p className="our-focus-container-desc">
                    A “you” first approach to outsourcing and outstaffing
                </p>
                <p className="our-focus-container-sub-desc">
                    We’re here to provide technology services to you, our client. That is why we always try to adjust to your needs and
                </p>
            </div>
            <div className="our-focus-container-row">
                <div className="our-focus-container-col">
                    <div className="our-focus-container-col-header">
                        <img src={RequestIcon} alt="" className="our-focus-container-col-header-img" />
                        <h1 className="our-focus-container-col-header-title">Request vs want</h1>
                    </div>
                    <p className="our-focus-container-col-desc">
                    Ever feel like when outsourcing a task or project that you got exactly what you’ve requested but not what you actually wanted? You’re not alone.
                    </p>
                    <p className="our-focus-container-col-desc">
                    Get what you want, not what you requested. Let the experts be the experts and let them loose to create what you really want, not what you asked for.
                                        </p>
                </div>
                <div className="our-focus-container-col">
                    <img src={RequestImage} alt="" className="our-focus-container-col-img" />
                </div>
            </div>
            <div className="our-focus-container-row reverse">
                <div className="our-focus-container-col">
                    <div className="our-focus-container-col-header">
                        <img src={NoIcon} alt="" className="our-focus-container-col-header-img" />
                        <h1 className="our-focus-container-col-header-title">"No"</h1>
                    </div>
                    <p className="our-focus-container-col-desc">
                    In the software industry this is taken as the example of being critical and having true input. Using the word “no”. It’s also often used as an argument against talent abroad, with reason.
                                        </p>
                    <p className="our-focus-container-col-desc">
                    By being critical and giving advice from an expert point of view – we believe to garnish a high level of quality.
                                        </p>
                </div>
                <div className="our-focus-container-col">
                    <img src={NoImage} alt="" className="our-focus-container-col-img" />
                </div>
            </div>
            
        </div>
    )
}

export default OurFocus