// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import img1 from "../assets/hero/elite1.jpg";
import img2 from "../assets/hero/elite3.jpg";
import img3 from "../assets/hero/elite7.jpg";

const slides = [
  {
    title: "Elite International Trading Company",
    subtitle: "Premium Quality Meat Exporters",
    tagline: "Delivering Freshness Beyond Borders",
    image: img1,
  },
  {
    title: "Global Excellence",
    subtitle: "Supplying Hygienic, Halal-Certified Meat Worldwide",
    tagline: "From India to the World — Quality You Can Trust",
    image: img2,
  },
  {
    title: "Sustainably Sourced",
    subtitle: "Committed to Purity, Taste, and Freshness",
    tagline: "Healthy Products, Ethical Practices",
    image: img3,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Light theme colors
  const colors = {
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    darkText: "#2D2D2D",
    lightBlue: "#4FC3F7",
    lightGreen: "#3CB371",
    hoverBlue: "#AEDFF7",
    hoverGreen: "#BFF0D2",
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" >
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms]"
          />
          <div className="absolute inset-0 " /> {/* soft overlay */}
        </motion.div>
      ))}

      {/* Right Aligned Content */}
      <div className="absolute inset-0 flex items-center justify-end px-6 sm:pr-16 md:pr-28 text-right z-10">
        <div className="max-w-xl sm:max-w-2xl">
          {/* Title */}
          <motion.h1
            key={slides[current].title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-[#3CB371]"
            
          >
            <span style={{ color: colors.lightBlue }}>
              {slides[current].title.split(" ")[0]}
            </span>{" "}
            {slides[current].title.split(" ").slice(1).join(" ")}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            key={slides[current].subtitle}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-3 text-base sm:text-xl md:text-2xl font-light tracking-wide"
            style={{ color: "#6B7280" }}
          >
            {slides[current].subtitle}
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[3px] rounded-full ml-auto shadow-lg"
            style={{ backgroundColor: colors.lightGreen }}
          ></motion.div>

          {/* Tagline */}
          <motion.p
            key={slides[current].tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg italic leading-relaxed max-w-md sm:max-w-xl ml-auto"
            style={{ color: "#555" }}
          >
            {slides[current].tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 sm:mt-10 flex flex-wrap gap-4 sm:gap-6 justify-end"
          >
            <a
              href="/products"
              className="px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm tracking-wide font-medium border transition-all shadow-md"
              style={{
                color: colors.darkText,
                borderColor: colors.lightBlue,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.lightBlue;
                e.currentTarget.style.color = colors.darkText;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = colors.darkText;
              }}
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm tracking-wide font-medium transition-all shadow-md"
              style={{
                backgroundColor: colors.lightGreen,
                color: colors.darkText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.hoverGreen;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.lightGreen;
              }}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Social Links (Left Side) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute left-3 sm:left-6 md:left-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-3 sm:gap-4"
        style={{ color: colors.darkText }}
      >
        <div className="hidden sm:block font-semibold rotate-90 tracking-widest text-xs sm:text-sm mb-6 sm:mb-8" style={{ color: colors.lightBlue }}>
          Elite Intl.
        </div>
        <div
          className="hidden sm:block w-px h-16 sm:h-20 mb-4"
          style={{ backgroundColor: colors.lightBlue }}
        ></div>
        <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 justify-center items-center">
          <a href="#"><FaFacebookF size={16} className="hover:scale-110 transition" style={{ color: colors.darkText }} /></a>
          <a href="#"><FaInstagram size={16} className="hover:scale-110 transition" style={{ color: colors.darkText }} /></a>
          <a href="#"><FaLinkedinIn size={16} className="hover:scale-110 transition" style={{ color: colors.darkText }} /></a>
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        style={{ color: colors.lightBlue }}
      >
        <FaArrowDown size={12} />
        <span className="text-[10px] sm:text-xs mt-1" style={{ color: colors.darkText }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
