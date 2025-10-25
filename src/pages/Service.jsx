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

      {/* ✨ Interactive Call-to-Action Section */}
      <section className="relative w-full py-5 bg-black font-[Poppins] overflow-hidden flex justify-center items-center">
      
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 p-5 text-center  transition-transform duration-500"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3CB371]">
            Ready to Elevate Your Exports?
          </h2>
          <p className="text-gray-300 mb-6">
            Explore our premium range of products and discover why Elite International Trading Company is trusted globally. Don’t just trade, trade in style!
          </p>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }} 
            className="inline-flex items-center gap-3"
          >
            <Link 
              to="/contact" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3CB371] to-[#C62828] text-white font-semibold shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              Get Started <FaArrowRight className="text-sm"/>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
export default Service
