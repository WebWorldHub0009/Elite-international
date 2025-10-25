// src/components/ProductHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroBg from "../assets/hero/dg3.jpg"; // Replace with your background image

const colors = {
  red: "#C62828",
  green: "#3CB371",
  white: "#FFFFFF",
  black: "#1C1C1C",
  gray: "#D9D9D9",
};

export default function ProductHero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      {/* 💎 Glowing Orbs */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#3CB371]/20 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-[#C62828]/20 rounded-full blur-[150px] animate-pulse"></div>

      {/* 🌍 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 md:px-16 lg:px-24 max-w-4xl"
      >
        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl uppercase tracking-widest mb-4"
          style={{
            color: colors.gray,
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
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{
            background:
              "linear-gradient(90deg, #3CB371, #D4AF37, #C62828, #3CB371)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 25px rgba(60,179,113,0.4)",
          }}
        >
          Elite International Trading Co.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
        >
          Explore our curated selection of{" "}
          <span className="text-[#3CB371] font-semibold">
            export-quality products
          </span>{" "}
          — from agricultural goods to premium commodities — meeting global
          standards of{" "}
          <span className="text-[#C62828] font-semibold">excellence</span> and{" "}
          <span className="text-[#D9D9D9] font-semibold">trust</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#3CB371] to-[#C62828] text-white flex items-center justify-center gap-2"
          >
            Get in Touch <FaArrowRight className="text-sm" />
          </Link>

         
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
    </section>
  );
}
