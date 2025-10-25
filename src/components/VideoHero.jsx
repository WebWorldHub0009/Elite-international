// src/components/VideoHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import heroBg from "../assets/home/bg7.jpg"; // 🖼️ Replace with your premium background image
import { Link, } from "react-router-dom";

const colors = {
  red: "#C62828",
  green: "#3CB371",
  white: "#FFFFFF",
  black: "#1C1C1C",
  gray: "#D9D9D9",
};

const VideoHero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden font-[Poppins] flex items-center justify-center">
      {/* 🌆 Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center scale-105 transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* ✨ Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t bg-black/40"></div>
   

   

      {/* 🌍 Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 md:px-16"
      >
        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl uppercase tracking-widest mb-3 text-[#D9D9D9]"
        >
          Global Reach, Local Excellence
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{
            background:
              "linear-gradient(90deg, #3CB371, #D4AF37, #C62828, #3CB371)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "",
          }}
        >
          Elite International Trading Co.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Delivering excellence across continents — from premium agricultural
          exports to world-class commodities. Trusted by industries. Preferred
          by nations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg bg-gradient-to-r from-[#3CB371] to-[#C62828] text-white flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300"
          >
            Get in Touch <FaArrowRight />
          </Link>

          <Link
            to="/products"
            className="px-8 py-3 rounded-full text-lg font-semibold border border-[#3CB371] text-[#3CB371] hover:bg-[#3CB371]/15 flex items-center justify-center gap-3 transition-all duration-300"
          >
            Watch Overview <FaPlay />
          </Link>
        </motion.div>
      </motion.div>

      {/* ✨ Bottom Fade Overlay */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
    </section>
  );
};

export default VideoHero;
