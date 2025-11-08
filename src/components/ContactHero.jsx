// src/components/ContactHero.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactBg from "../assets/home/89124.jpg"; // Replace with relevant image

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

const ContactHero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-start overflow-hidden font-[Poppins] bg-lightGray">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={contactBg}
          alt="Contact Elite International"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left text-[#2D2D2D] px-6 md:px-16 max-w-2xl">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{
            background: `linear-gradient(90deg, ${colors.lightGreen}, ${colors.lightBlue})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Connect With Elite International
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
          Reach out to us for trade partnerships, export collaborations, or
          premium product inquiries.{" "}
          <span className="font-semibold text-[#3CB371]">
            Elite International
          </span>{" "}
          connects quality with the world.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5">
          <a
            href="tel:+91 7618287878"
            className="inline-flex items-center justify-center gap-2 bg-[#3CB371] text-white px-10 py-3.5 rounded-full text-base font-medium tracking-wide hover:bg-[#35a066] transition-all duration-300 shadow-md hover:shadow-[#3CB371]/40"
          >
            <FaPhoneAlt className="text-sm" />
            Call Now
          </a>
          <a
            href="mailto:theliteco6@gmail.com"
            className="inline-flex items-center justify-center gap-2 border border-[#3CB371] text-[#3CB371] px-10 py-3.5 rounded-full text-base font-medium tracking-wide hover:bg-[#3CB371] hover:text-white transition-all duration-300 shadow-md hover:shadow-[#3CB371]/40"
          >
            <FaEnvelope className="text-sm" />
            Email Us
          </a>
        </div>
      </div>

      {/* Subtle Bottom Glow Line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[3px]"
        style={{
          background: `linear-gradient(to right, ${colors.lightGreen}, ${colors.white}, ${colors.lightBlue})`,
        }}
      ></div>
    </section>
  );
};

export default ContactHero;
