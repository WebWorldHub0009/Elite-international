import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/About'
import WhatWeDo from "../components/WhatWeDo"
import WhyChooseUs from '../components/WhyChooseUs'
// import EliteTradingShowcase from '../components/PremiumMarquee'
import ProductMarquee from '../components/PremiumMarquee'
import ServiceSection from "../components/ServiceSection"
import HowItWorks from '../components/HowItWork'
import StatsCounter from "../components/StatsCounter"
import Faq from "../components/Faq"
import ThoughtAndContact from '../components/ThoughtAndConnect'

const Home = () => {
  return (
   <>
   <HeroSection/>
   <AboutSection/>
   <WhatWeDo/>
 <ProductMarquee/>
   <WhyChooseUs/>
   <ServiceSection/>
   <HowItWorks/>
   <StatsCounter/>
    <ProductMarquee/>
    <ThoughtAndContact/>
   <Faq/>
   </>
  )
}

export default Home