// src/components/AboutHeroElite.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/hero/dg4.jpg";

// Updated Light Color Palette
const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

export default function AboutHeroElite() {
  return (
    <section className="relative w-full h-[90vh] flex items-end overflow-hidden font-[Poppins]">
      {/* Background Image */}
      <img
        src={bg}
        alt="Elite International Trading Co."
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative Glow Effects */}
      <div
        className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl"
        style={{ backgroundColor: `${colors.lightBlue}30` }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-60 h-60 rounded-full blur-3xl"
        style={{ backgroundColor: `${colors.lightGreen}30` }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-6xl w-full px-6 md:px-16 pb-20 text-left"
      >
        {/* Tagline */}
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-block mb-4 px-5 py-2 text-xs sm:text-sm tracking-widest uppercase rounded-full shadow-md"
          style={{
            backgroundColor: colors.lightGreen,
            color: colors.white,
            letterSpacing: "2px",
          }}
        >
          Since 1991 • Global Excellence
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          style={{ color: colors.white }}
        >
          Welcome to{" "}
          <span
            className="font-bold drop-shadow-sm"
            style={{ color: colors.lightBlue }}
          >
            Elite
          </span>{" "}
          <span
            className="font-light"
            style={{ color: colors.lightGreen }}
          >
            International Trading Co.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="text-base sm:text-lg leading-relaxed max-w-3xl mb-8"
          style={{ color: colors.lightGray }}
        >
          Exporting{" "}
          <span style={{ color: colors.lightGreen, fontWeight: "600" }}>
            premium food products
          </span>{" "}
          worldwide with{" "}
          <span style={{ color: colors.lightBlue, fontWeight: "600" }}>
            quality, reliability
          </span>{" "}
          and trust. We ensure every shipment meets{" "}
          <span style={{ color: colors.white }}>
            global standards
          </span>{" "}
          with timely delivery across continents.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            to="/services"
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-md border"
            style={{
              backgroundColor: colors.lightBlue,
              color: colors.white,
              borderColor: colors.lightBlue,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = colors.hoverBlue;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = colors.lightBlue;
            }}
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-md border"
            style={{
              backgroundColor: colors.lightGreen,
              color: colors.white,
              borderColor: colors.lightGreen,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = colors.hoverGreen;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = colors.lightGreen;
            }}
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
