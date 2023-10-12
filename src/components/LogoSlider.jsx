import React from 'react'
import "../assets/css/logo-slider.css"
import audi from "../assets/images/logo/Audi-Logo.png"
import dhl from "../assets/images/logo/DHL-Logo.png"
import ing from "../assets/images/logo/ING-Logo.png"
import ms from "../assets/images/logo/MS-Amlin-Logo.png"
import ups from "../assets/images/logo/UPS-Logo.png"
import p1 from "../assets/images/logo/partners1.png"
import p2 from "../assets/images/logo/partners2.png"
import p3 from "../assets/images/logo/partners4.png"
import p4 from "../assets/images/logo/partners5.png"
import p5 from "../assets/images/logo/partners6.png"
import p6 from "../assets/images/logo/UPS-Logo.png"
const LogoSlider = ({ partners }) => {
    let content;
    if (partners) {
        content = (
            <div className="logos">
                <div className="logos-slide">
                    <img src={p1} alt='Globo' />
                    <img src={p2} alt='Globo' />
                    <img src={p3} alt='Globo' />
                    <img src={p4} alt='Globo' />
                    <img src={p5} alt='Globo' />
                    <img src={p6} alt='Globo' />
                </div>

                <div className="logos-slide">
                    <img src={p1} alt='Globo' />
                    <img src={p2} alt='Globo' />
                    <img src={p3} alt='Globo' />
                    <img src={p4} alt='Globo' />
                    <img src={p5} alt='Globo' />
                    <img src={p6} alt='Globo' />
                </div>
            </div>
        )
    } else {
        content = (
            <div className="logos">
                <div className="logos-slide">
                    <img src={audi} alt='Globo' />
                    <img src={dhl} alt='Globo' />
                    <img src={ing} alt='Globo' />
                    <img src={ms} alt='Globo' />
                    <img src={ups} alt='Globo' />
                </div>

                <div className="logos-slide">
                    <img src={audi} alt='Globo' />
                    <img src={dhl} alt='Globo' />
                    <img src={ing} alt='Globo' />
                    <img src={ms} alt='Globo' />
                    <img src={ups} alt='Globo' />
                </div>
            </div>
        )
    }
    return content
}

export default LogoSlider