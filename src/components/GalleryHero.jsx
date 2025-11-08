// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";
import bg from "../assets/hero/elite10.jpg"; // Replace with a premium export-related image

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

export default function GalleryHero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Overlay for visibility on light theme */}
      <div className="absolute inset-0  z-0" />


      {/* Main Content (Left-Aligned) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-left px-6 md:px-16 lg:px-24 max-w-3xl"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="mb-6"
        >
         
        </motion.div>

        {/* Subheading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-2xl tracking-widest uppercase font-medium mb-2"
          style={{ color: colors.hoverBlue
            , letterSpacing: "2px" }}
        >
          Discover Global Excellence
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#3CB371]"
        
        >
          Elite International Gallery
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: colors.darkText }}
        >
          Explore our world of premium exports — from agricultural goods to
          top-tier commodities — where quality meets international standards and
          innovation defines every trade.
        </motion.p>
      </motion.div>
    </section>
  );
}
