import React from 'react'
import '../assets/css/home.css'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Trusted from '../components/Trusted'
import OurFocus from '../components/OurFocus'
import AboutSection from '../components/AboutSection'
import Thecnologies from '../components/Thecnologies'
const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Banner />
      <Trusted/>
      <OurFocus />
      <AboutSection/>
      <Thecnologies/>
      <Contact white />
    </div>
  )
}

export default Home