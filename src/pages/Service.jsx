import React from 'react'
import ProductHero from '../components/ProductHero'
import EliteProductsSection from '../components/ServiceSection'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const colors = {
  red: "#C62828",
  green: "#3CB371",
  white: "#FFFFFF",
  black: "#1C1C1C",
  gray: "#D9D9D9",
}

const Service = () => {
  return (
    <>
      <ProductHero/>
      <EliteProductsSection/>
    </>
  )
}
export default Service
