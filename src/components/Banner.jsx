import React, {  useState } from 'react'
import "../assets/css/banner.css"
import img from "../assets/images/icon/1-Hero-section.png"
const Banner = () => {
    const [active, setActive] = useState(false)
    const renderText = () => {
        if (active) {
            return (
                <div className="banner-container-left-content">
                    <h1 className="banner-container-left-content-heading">
                        Creative and solution driven
                        <span> applications & products </span>
                    </h1>
                    <p className="banner-container-left-content-desc">
                        With outsourcing we take ownership over the product. This ensures a quality product in either web-development, app development or general application development.
                    </p>
                    <button className="banner-container-left-content-button"><span>get started</span></button>
                </div>
            )
        }
        return (
            <div className="banner-container-left-content">
                <h1 className="banner-container-left-content-heading">
                    Connecting enterprises with
                    <span> scalable & agile </span>
                    tech teams
                </h1>
                <p className="banner-container-left-content-desc">
                    We provide software talent from abroad that deliver software services with the quality and consultancy you can expect from your local engineers.
                </p>
                <button className="banner-container-left-content-button"><span>get started</span></button>
            </div>
        )
    }
    const handleClick = (e) => {

        if (e.target.innerText === "outsourcing".toUpperCase()) {
            if (!active) {
                return;
            }
            const content = document.querySelector(".banner-container-left-content");
            content.style.opacity = 0;
            
            setTimeout(() => {
                setActive(prev => !prev)
                content.style.opacity = 1;
            }, 300);
        } else {
            if (active) {
                return;
            }
            const content = document.querySelector(".banner-container-left-content");
            content.style.opacity = 0;
            setTimeout(() => {
                setActive(prev => !prev)
                content.style.opacity = 1;
            }, 300);

        }
    }

    

    return (
        <div className="banner-container">
            <div className="banner-container-left">
                <div className="banner-container-left-buttons">
                    <button className={active ? "banner-container-left-buttons-btn" : "banner-container-left-buttons-btn active"} onClick={handleClick}>outsourcing</button>
                    <button className={!active ? "banner-container-left-buttons-btn" : "banner-container-left-buttons-btn active left"} onClick={handleClick}>outstuffing</button>
                </div>
                {renderText()}
            </div>
            <div className="banner-container-right">
                <img src={img} alt="" className="banner-container-right-img" />
            </div>
        </div>
    )
}

export default Banner