import React from 'react'
import "../assets/css/trusted.css"
import audi from "../assets/images/logo/canon.png"
import dhl from "../assets/images/logo/DHL-Logo.png"
import ing from "../assets/images/logo/Allianz.png"
import ms from "../assets/images/logo/MS-Amlin-Logo.png"
import ups from "../assets/images/logo/capGem.png"
import kpn from "../assets/images/logo/KPN.png"
import nielsen from "../assets/images/logo/Nielsen.png"
const Trusted = () => {
  return (
    <div className="trusted-container">
        <h1 className="trusted-container-heading">Trusted by</h1>
        <div className="trusted-container-row">
            <div className="trusted-container-col">
                <img src={audi} alt="" className="trusted-container-img" />
            </div>
            <div className="trusted-container-col">
                <img src={dhl} alt="" className="trusted-container-img" />
            </div>
            <div className="trusted-container-col">
                <img src={ing} alt="" className="trusted-container-img" />
            </div>
            <div className="trusted-container-col">
                <img src={ms} alt="" className="trusted-container-img" />
            </div>
        </div>
        <div className="trusted-container-row">
            <div className="trusted-container-col">
                <img src={ups} alt="" className="trusted-container-img" />
            </div>
            <div className="trusted-container-col">
                <img src={kpn} alt="" className="trusted-container-img" />
            </div>
            <div className="trusted-container-col">
                <img src={nielsen} alt="" className="trusted-container-img" />
            </div>
            <div className="trusted-container-col">
                <img src={audi} alt="" className="trusted-container-img" />
            </div>
        </div>
    </div>
  )
}

export default Trusted