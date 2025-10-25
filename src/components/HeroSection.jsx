// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import img1 from "../assets/hero/dg1.jpg";
import img2 from "../assets/hero/dg2.jpg";
import img3 from "../assets/hero/dg4.jpg";

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

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  green: "#3CB371",
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </motion.div>
      ))}

      {/* Left Aligned Content */}
      <div className="absolute inset-0 flex items-center justify-start pl-8 sm:pl-16 md:pl-28 text-left z-10">
        <div className="max-w-2xl">
          <motion.h1
            key={slides[current].title}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          >
            <span className="text-[#C62828]">
              {slides[current].title.split(" ")[0]}
            </span>{" "}
            {slides[current].title.split(" ").slice(1).join(" ")}
          </motion.h1>

          <motion.h2
            key={slides[current].subtitle}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg sm:text-xl md:text-2xl text-[#D9D9D9] font-light tracking-wide"
          >
            {slides[current].subtitle}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "140px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[3px] bg-[#3CB371] mt-5 rounded-full shadow-[0_0_20px_#3CB371]"
          ></motion.div>

          <motion.p
            key={slides[current].tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-[#FFFFFF] text-base sm:text-lg italic leading-relaxed max-w-xl"
          >
            {slides[current].tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex gap-6"
          >
            <a
              href="/products"
              className="px-8 py-3 border border-[#C62828] text-[#C62828] rounded-full text-sm tracking-wide font-medium hover:bg-[#C62828] hover:text-white transition-all shadow-[0_0_10px_rgba(198,40,40,0.4)]"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-[#3CB371] text-white rounded-full text-sm tracking-wide font-medium hover:bg-[#2e8b57] transition-all shadow-[0_0_15px_rgba(60,179,113,0.5)]"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Social Links (Right Side) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute right-6 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 text-[#D9D9D9]"
      >
        <div className="font-semibold rotate-90 tracking-widest text-sm text-[#C62828] mb-8">
          Elite Intl.
        </div>
        <div className="w-px h-20 bg-[#C62828]/40 mb-4"></div>
        <div className="flex flex-col gap-3">
          <a href="#"><FaFacebookF size={18} className="hover:text-[#3CB371] transition" /></a>
          <a href="#"><FaInstagram size={18} className="hover:text-[#3CB371] transition" /></a>
          <a href="#"><FaLinkedinIn size={18} className="hover:text-[#3CB371] transition" /></a>
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#C62828] flex flex-col items-center"
      >
        <FaArrowDown size={18} />
        <span className="text-xs mt-1 text-white">Scroll</span>
      </motion.div>
    </section>
  );
}
