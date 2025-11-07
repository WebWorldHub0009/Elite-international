// src/components/ThoughtAndContact.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/home/bg7.jpg";
import ownerImg from "../assets/home/owner.jpg";

const ThoughtAndContact = () => {
  return (
    <section
      className="relative w-full py-12 px-4 md:px-10 font-[Poppins] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center justify-between gap-10 border border-[#8B0000]/30"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section: Owner Card */}
        <motion.div
          className="flex-1 w-full text-center bg-white/95 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-500 relative border border-[#8B0000]/30"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-[#8B0000]/20 mb-4">
            <img
              src={ownerImg}
              alt="Arif ul Islam Khan - Co-Founder & Director of Elite International Trading Co."
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-2">
            A Thought from Our Co-Founder
          </h2>
          <p className="text-gray-700 text-base md:text-lg italic mb-3 leading-relaxed">
            “Excellence, trust, and quality are at the heart of every shipment
            we deliver across the globe.”
          </p>
          <p className="text-[#8B0000] font-bold uppercase text-sm tracking-wide mb-3">
            — Arif Ul Islam Khan (Co-Founder & Director)
          </p>

          {/* Contact Info */}
          <div className="text-gray-700 text-sm md:text-base space-y-2 mb-4">
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#8B0000]" /> +91 7618287878
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#8B0000]" /> arif.exportsales@gmail.com
            </p>
          </div>

          {/* LinkedIn Buttons */}
<div className="flex justify-center items-center gap-2 sm:gap-4 mt-2 flex-wrap">
  <a
    href="https://www.linkedin.com/in/arif-ul-islam-khan-62296623?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition duration-300 text-xs sm:text-sm md:text-base"
  >
    <FaLinkedin className="text-sm sm:text-base" /> Arif Ul Islam Khan
  </a>
  <a
    href="https://www.linkedin.com/in/eliteinternationaltradingco/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition duration-300 text-xs sm:text-sm md:text-base"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000] mb-4 leading-tight">
            Let’s Connect <br className="hidden md:block" /> and Grow Globally
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Have a business inquiry? Get in touch and partner with us to expand
            your exports worldwide. We ensure excellence and commitment in every deal.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 text-white bg-[#8B0000] rounded-full text-base md:text-lg font-semibold group hover:bg-[#6e0000] hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Contact Us
              <span className="absolute -inset-1 rounded-full border border-[#8B0000]/30 opacity-0 group-hover:opacity-100 transition"></span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#8B0000]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#8B0000]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ThoughtAndContact;
