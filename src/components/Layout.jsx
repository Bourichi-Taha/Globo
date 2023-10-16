import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from "./Loader"
import Footer from "./Footer"
import Navbar from "./Navbar"
const Layout = () => {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
      <Loader />
      <Navbar scroll={scrolling} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout