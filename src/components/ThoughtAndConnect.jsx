// src/components/ThoughtAndContact.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
// import bgImage from "../assets/home/about.jpg";

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

const ThoughtAndContact = () => {
  return (
    <section
      className="relative w-full py-12 px-4 md:px-10 font-[Poppins] overflow-hidden"
    
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center justify-between gap-10 border"
        style={{ borderColor: `${colors.lightBlue}40` }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section: Owner Card */}
        <motion.div
          className="flex-1 w-full text-center rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-500 relative border"
          style={{
            backgroundColor: `${colors.white}F2`,
            borderColor: `${colors.lightGreen}40`,
          }}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div
            className="w-32 h-32 md:w-30 md:h-30 mx-auto rounded-full overflow-hidden shadow-2xl border-4 mb-4 flex items-center justify-center"
            style={{
              borderColor: `${colors.lightGreen}40`,
              backgroundColor: colors.white,
            }}
          >
            <FaUserCircle
              className="text-7xl md:text-8xl"
              style={{ color: colors.lightGreen }}
            />
          </div>

          <h2
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ color: colors.lightBlue }}
          >
            A Thought from Our Co-Founder
          </h2>
          <p
            className="text-base md:text-lg italic mb-3 leading-relaxed"
            style={{ color: colors.darkText }}
          >
            “Excellence, trust, and quality are at the heart of every shipment
            we deliver across the globe.”
          </p>
          <p
            className="font-bold uppercase text-sm tracking-wide mb-3"
            style={{ color: colors.lightGreen }}
          >
            — Arif Khan (Co-Founder & Director)
          </p>

          {/* Contact Info */}
          <div className="text-sm md:text-base space-y-2 mb-4">
            <p
              className="flex items-center justify-center gap-2"
              style={{ color: colors.darkText }}
            >
              <FaPhoneAlt style={{ color: colors.lightGreen }} /> +91 7618287878
            </p>
            <p
              className="flex items-center justify-center gap-2"
              style={{ color: colors.darkText }}
            >
              <FaEnvelope style={{ color: colors.lightGreen }} /> arif.exportsales@gmail.com
            </p>
          </div>

          {/* LinkedIn Buttons */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-2 flex-wrap">
            <a
              href="https://www.linkedin.com/in/arif-ul-islam-khan-62296623"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full border transition duration-300 text-xs sm:text-sm md:text-base"
              style={{
                color: colors.lightBlue,
                borderColor: colors.lightBlue,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.lightBlue;
                e.currentTarget.style.color = colors.white;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = colors.lightBlue;
              }}
            >
              <FaLinkedin className="text-sm sm:text-base" /> Arif Ul Islam Khan
            </a>
            <a
              href="https://www.linkedin.com/in/eliteinternationaltradingco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full border transition duration-300 text-xs sm:text-sm md:text-base"
              style={{
                color: colors.lightBlue,
                borderColor: colors.lightBlue,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.lightBlue;
                e.currentTarget.style.color = colors.white;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = colors.lightBlue;
              }}
            >
              <FaLinkedin className="text-sm sm:text-base" /> Elite International Trading Co.
            </a>
          </div>
        </motion.div>

        {/* Right Section: CTA */}
        <motion.div
          className="flex-1 w-full text-center lg:text-left"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ color: colors.lightBlue }}
          >
            Let’s Connect <br className="hidden md:block" /> and Grow Globally
          </h2>
          <p
            className="text-base md:text-lg mb-6"
            style={{ color: colors.darkText }}
          >
            Have a business inquiry? Get in touch and partner with us to expand
            your exports worldwide. We ensure excellence and commitment in every deal.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 rounded-full text-base md:text-lg font-semibold group transition-all duration-500 shadow-lg"
              style={{
                backgroundColor: colors.lightGreen,
                color: colors.white,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.hoverGreen;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.lightGreen;
              }}
            >
              Contact Us
              <span
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                style={{ border: `1px solid ${colors.lightGreen}40` }}
              ></span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Glows */}
      <div
        className="absolute top-0 left-0 w-60 h-60 rounded-full blur-3xl"
        style={{ backgroundColor: `${colors.lightBlue}20` }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-60 h-60 rounded-full blur-3xl"
        style={{ backgroundColor: `${colors.lightGreen}20` }}
      ></div>
    </section>
  );
};

export default ThoughtAndContact;
