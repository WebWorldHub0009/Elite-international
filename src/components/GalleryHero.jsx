// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaArrowRight } from "react-icons/fa";
import bg from "../assets/hero/dg4.jpg"; // Replace with a premium export-related image

const colors = {
  red: "#C62828",
  green: "#3CB371",
  white: "#FFFFFF",
  dark: "#0F0F0F",
  gray: "#D9D9D9",
  gold: "#D4AF37",
};

export default function GalleryHero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b bg-black/40 z-0" />
      

      {/* Floating Glow Circles for Motion Depth */}
      <div className="absolute w-[300px] h-[300px] bg-[#3CB371]/10 rounded-full blur-[120px] top-20 left-10 animate-pulse" />
      <div className="absolute w-[250px] h-[250px] bg-[#C62828]/10 rounded-full blur-[120px] bottom-10 right-10 animate-pulse" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 rounded-full bg-[#3CB371]/20 backdrop-blur-lg border border-[#3CB371]/40 shadow-lg">
            <FaGlobeAmericas className="text-4xl text-[#3CB371]" />
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-2xl tracking-widest uppercase font-medium text-gray-200"
        >
          Discover Global Excellence
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-2 text-4xl md:text-6xl font-bold leading-tight"
          style={{
            background:
              "linear-gradient(90deg, #3CB371, #D4AF37, #C62828, #3CB371)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Elite International Gallery
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-5 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Explore our world of premium exports — from agricultural goods to
          top-tier commodities — where quality meets international standards and
          innovation shapes every trade.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-5"
        >
          <a
            href="tel:+917618287878"
            className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#3CB371] to-[#C62828] text-white"
          >
            Contact Us
          </a>

          <a
            href="mailto:info@theliteco.com"
            className="px-8 py-3 rounded-full text-lg font-semibold border border-[#3CB371] hover:bg-[#3CB371]/20 transition-all duration-300 text-[#3CB371] flex items-center justify-center gap-2"
          >
            View Collection <FaArrowRight className="text-sm" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Soft Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
    </section>
  );
}
