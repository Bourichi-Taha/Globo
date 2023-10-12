import React, { useEffect, useState } from 'react'
import "../assets/css/dashboard.css"
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Countries from '../components/Countries'
import OurClient from '../components/OurClient'
import Loader from '../components/Loader'
const Dashboard = () => {
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
        <div className="dashboard-container" >
            <Loader/>
            <Navbar scroll={scrolling} />
            <Hero />
            <About />
            <Services />
            <Countries />
            <OurClient />
        </div>
    )
}

export default Dashboard