// src/components/ContactHero.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactBg from "../assets/home/89124.jpg"; // Replace with relevant image

const ContactHero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden font-[Poppins]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={contactBg}
          alt="Contact Elite International"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 "></div>
      </div>

     

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#3CB371] to-[#C62828] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(60,179,113,0.3)]">
          Connect With Elite International
        </h1>

        {/* Subheading */}
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10">
          Reach out to us for trade partnerships, export collaborations, or premium product inquiries.  
          At <span className="text-[#3CB371] font-semibold">Elite International</span>,  
          we connect quality with the world.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="tel:+91 7618287878"
            className="inline-flex items-center justify-center gap-2 bg-[#3CB371] text-white px-10 py-3.5 rounded-full text-base font-medium tracking-wide hover:bg-[#35a066] transition-all duration-300 shadow-lg hover:shadow-[#3CB371]/40"
          >
            <FaPhoneAlt className="text-sm" />
            Call Now
          </a>
          <a
            href="mailto:arif.exportsales@gmail.com"
            className="inline-flex items-center justify-center gap-2 border border-[#3CB371] text-[#3CB371] px-10 py-3.5 rounded-full text-base font-medium tracking-wide hover:bg-[#3CB371] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#3CB371]/40"
          >
            <FaEnvelope className="text-sm" />
            Email Us
          </a>
        </div>
      </div>

      {/* Subtle Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#3CB371] via-[#FFFFFF]/40 to-[#C62828]"></div>
    </section>
  );
};

export default ContactHero;
