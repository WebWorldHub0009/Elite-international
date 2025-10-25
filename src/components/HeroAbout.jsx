import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/home/about.jpg"; // Premium background image

// Elite International Color Palette
const colors = {
  exportRed: "#C62828",
  classicBlack: "#1C1C1C",
  pureWhite: "#FFFFFF",
  neutralGray: "#D9D9D9",
  patternGreen: "#3CB371",
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0"></div>

      {/* Brightness Blob (Bottom Right) */}
      <div
        className="absolute bottom-10 right-10 w-60 h-60 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.patternGreen}/40, transparent 70%)`,
        }}
      ></div>

      {/* Animated Floating Circle (Top Left) */}
      <div
        className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse-slow"
        style={{ backgroundColor: `${colors.exportRed}20` }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-6xl px-6 md:px-16 pb-20 text-left"
      >
        {/* Badge */}
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="inline-block mb-4 px-6 py-3 text-xs sm:text-sm tracking-widest uppercase rounded-full shadow-lg"
          style={{
            backgroundColor: colors.patternGreen,
            color: colors.pureWhite,
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
          className="text-5xl text-[#C62828] md:text-6xl font-bold leading-tight mb-4 text-pureWhite"
        >
          Welcome to{" "}
          <span
            className="text-patternGreen drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Elite
          </span>{" "}
          <span className="text-neutralGray font-light">International</span>{" "}
          <span className="text-neutralGray font-light">Trading Co.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="text-base text-white md:text-lg leading-relaxed max-w-3xl mb-8 text-neutralGray"
        >
          Exporting{" "}
          <span className="text-patternGreen font-semibold">
            premium food products
          </span>{" "}
          worldwide with{" "}
          <span className="text-pureWhite font-medium">quality, reliability</span>
          , and excellence. Our shipments meet{" "}
          <span className="text-neutralGray">global standards</span> and ensure
          timely delivery across continents.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/products"
            className="px-8 text-white py-3 border-2 border-patternGreen rounded-full text-sm md:text-base tracking-wide transition-all duration-300 hover:scale-105 hover:bg-patternGreen hover:text-classicBlack"
          >
            Explore Products
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full text-sm md:text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${colors.patternGreen}, ${colors.classicBlack})`,
              color: colors.pureWhite,
            }}
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
