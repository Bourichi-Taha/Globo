import "../assets/css/dashboard.css"
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Countries from '../components/Countries'
import OurClient from '../components/OurClient'
import Contact from '../components/Contact'
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
const Dashboard = () => {
    const location = useLocation()
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    useEffect(() => {
        if (location.state && location.state.id) {
            scrollToSection(location.state.id)
        }
    }, [location.state])
    return (
        <div className="dashboard-container" >

            <Hero />
            <About />
            <Services />
            <Countries />
            <OurClient />
            <Contact />
        </div>
    )
}

export default Dashboard