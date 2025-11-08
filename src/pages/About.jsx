import React from 'react'
import AboutHeroElite from '../components/HeroAbout'
import Testimonials from "../components/Testimonials"

import ProductMarquee from '../components/PremiumMarquee'
import OurStory from '../components/OurStory'


const About = () => {
  return (
    <>
    <AboutHeroElite/>
    <OurStory/>
    <Testimonials/>
    <ProductMarquee/>    
    </>
  )
}

export default About