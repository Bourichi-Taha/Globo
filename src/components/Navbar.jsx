import React, { useState } from 'react'
import "../assets/css/navbar.css"
import logo from "../assets/images/logo/icon white.png"
import logoDark from "../assets/images/logo/golobo.png"
import { Link } from 'react-router-dom'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



const Navbar = ({ scroll }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={scroll ? "navbar-container scroll" : "navbar-container"}>
        <div className="nc-left">
          {scroll ? <img src={logoDark} alt="" className="nc-left-logo" /> : <img src={logo} alt="" className="nc-left-logo" />}
          <ul className="nc-left-nav-list">
            <li className="nc-ln-li">About</li>
            <li className="nc-ln-li">services</li>
            <li className="nc-ln-li">Locals</li>
            <li className="nc-ln-li">partners</li>
            <li className="nc-ln-li">Trusted</li>
            <li className="nc-ln-li">Contact</li>
          </ul>
        </div>
        <div className="nc-right">
          <Link to="/" className="nc-right-button"><span>Start Now</span></Link>

          <WidgetsRoundedIcon className="nc-right-burger" onClick={() => setOpen(true)} />
        </div>

      </div>
      <div className={open ? "navbar-container-mobile active" : "navbar-container-mobile"}>
        <CloseRoundedIcon onClick={()=>setOpen(false)} className='nc-ma-close' />
        <ul className="nc-left-nav-list mobile">
          <li className="nc-ln-li ">About</li>
          <li className="nc-ln-li ">services</li>
          <li className="nc-ln-li ">Locals</li>
          <li className="nc-ln-li">partners</li>
          <li className="nc-ln-li">Trusted</li>
          <li className="nc-ln-li">Contact</li>
        </ul>
        <Link to="/" className="nc-right-button mobile"><span>Start Now</span></Link>
      </div>
    </>
  )
}

export default Navbar