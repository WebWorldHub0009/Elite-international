import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import buffaloImg from "../assets/home/beef.jpg";
import chickenImg from "../assets/home/chicken.jpg";
import muttonImg from "../assets/home/mutton2.jpg";
import bgImg from "../assets/home/bg.jpg"; // background image

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  green: "#3CB371",
};

const WhatWeDo = () => {
  return (
    <section
      className="relative py-16 px-6 md:px-16 font-[Poppins] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ✅ Keeps background fixed
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 "></div>

      {/* Content Wrapper */}
      <div className="relative z-10 ">
        {/* Top Heading */}
        <p className="uppercase tracking-widest font-semibold text-sm md:text-base text-center mb-3 text-[#3CB371]">
          Elite International Trading Company
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl text-center font-bold mb-12 leading-tight text-black">
          Delivering{" "}
          <span className="text-[#C62828]">Premium Quality</span> Meat Exports
          Worldwide
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left Card - Buffalo Meat */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=""
          >
            <img
              src={buffaloImg}
              alt="Buffalo Frozen & Chilled Meat"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-[#C62828]">
                Buffalo Frozen & Chilled Meat
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our buffalo meat is{" "}
                <span className="text-[#3CB371] font-semibold">
                  halal-certified
                </span>
                , hygienically processed, and frozen under international
                standards to ensure exceptional freshness and tenderness.
              </p>
            </div>
          </motion.div>

          {/* Middle Card - Whole Chicken */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=""
          >
            <img
              src={chickenImg}
              alt="Whole Chicken"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-[#C62828]">
                Whole Chicken
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Processed with{" "}
                <span className="text-[#3CB371] font-semibold">
                  strict hygiene and export standards
                </span>
                , our chicken is tender, juicy, and available in both frozen and
                chilled forms.
              </p>
            </div>
          </motion.div>

          {/* Right Card - Mutton */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=""
          >
            <img
              src={muttonImg}
              alt="Mutton Exports"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-[#C62828]">
                Premium Mutton
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Sourced from certified farms, our mutton is known for its{" "}
                <span className="text-[#3CB371] font-semibold">
                  rich flavor and fine texture
                </span>
                , meeting all global halal and export quality certifications.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <Link
            to="/contact"
            className="inline-block text-center text-lg text-gray-600 hover:text-[#3CB371] transition duration-300"
          >
            Looking for a reliable export partner?{" "}
            <span className="text-[#C62828] font-semibold underline hover:text-[#3CB371] transition-colors">
              Get in Touch
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
