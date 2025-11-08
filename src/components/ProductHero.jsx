// src/components/ProductHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroBg from "../assets/hero/elite8.jpg"; // Replace with your background image

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

export default function ProductHero() {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: colors.darkText,
      }}
    >
      {/* 🌈 Soft Left Gradient Overlay for Visibility */}
      <div
        className="absolute inset-0"
        
      ></div>

      {/* 💎 Glowing Orbs */}
      <div
        className="absolute top-20 left-10 w-[250px] h-[250px] rounded-full blur-[120px] animate-pulse"
        style={{ backgroundColor: `${colors.hoverGreen}40` }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-[250px] h-[250px] rounded-full blur-[120px] animate-pulse"
        style={{ backgroundColor: `${colors.hoverBlue}40` }}
      ></div>

      {/* 🌍 Hero Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-left px-6 md:px-16 lg:px-24 max-w-3xl"
      >
        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl uppercase tracking-widest mb-4"
          style={{
            color: colors.darkText,
            letterSpacing: "3px",
          }}
        >
          Empowering Global Trade
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{
            background: `linear-gradient(90deg, ${colors.lightGreen}, ${colors.lightBlue}, ${colors.hoverBlue}, ${colors.lightGreen})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            
          }}
        >
          Elite International Trading Co.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-gray-700"
        >
          Explore our curated selection of{" "}
          <span className="font-semibold text-[#3CB371]">
            export-quality products
          </span>{" "}
          — from agricultural goods to premium commodities — meeting global
          standards of{" "}
          <span className="font-semibold text-[#4FC3F7]">excellence</span> and{" "}
          <span className="font-semibold text-gray-800">trust</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-start"
        >
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#3CB371] to-[#4FC3F7] text-white flex items-center justify-center gap-2"
          >
            Get in Touch <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Fade Overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-40"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.9), transparent)",
        }}
      ></div>
    </section>
  );
}
