import React from 'react'
import AboutHeroElite from '../components/HeroAbout'
import Testimonials from "../components/Testimonials"
import HowItWorksElite from '../components/HowItWork'
import StatsSectionElite from '../components/StatsCounter'
import ProductMarquee from '../components/PremiumMarquee'
import VisionMission from '../components/VisionMission'
import OurStory from '../components/OurStory'
import FAQElite from '../components/Faq'

const About = () => {
  return (
    <>
    <AboutHeroElite/>
    <OurStory/>
    <Testimonials/>
    <ProductMarquee/>
    <VisionMission/>
    <StatsSectionElite/>
    <HowItWorksElite/>
    <FAQElite/>
    </>
  )
}

export default About