import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import ProductMarquee from '../components/PremiumMarquee'
import StatsCounter from "../components/StatsCounter"
import ThoughtAndContact from '../components/ThoughtAndConnect'

const Home = () => {
  return (
   <>
   <HeroSection/>
   <AboutSection/>
   <ProductMarquee/>
   <WhyChooseUs/>
   <StatsCounter/>
    <ThoughtAndContact/>
   </>
  )
}

export default Home