// src/components/MapSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  green: "#3CB371",
};

const MapSection = () => {
  return (
    <section className="relative w-full bg-[#0f0f0f] text-white font-[Poppins] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 p-8 md:p-10"
        >
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: colors.green }}
          >
            Visit Our Office
          </h2>

          <p className="text-[#D9D9D9] mb-6 leading-relaxed">
            <span className="text-white font-medium">Elite International Trading Company</span> — your trusted global export
            partner for premium agricultural products and high-quality
            commodities worldwide.
          </p>

          <div className="space-y-4 text-base md:text-lg">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt size={20} style={{ color: colors.red }} />
              <p>
                Muscles Apartment, Plot No. 402/4, Dhorra Mafi,
                <br />
                Aligarh - 202002, Uttar Pradesh, India
              </p>
            </div>

          

          </div>

          {/* CTA Button */}
          <a
            href="https://maps.google.com/?q=W3GQ+84M+Muscles+Apartment,+Dhorra,+Aligarh,+Uttar+Pradesh+202002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-8 bg-[#C62828] hover:bg-[#a32020] text-white px-8 py-3 rounded-full font-medium tracking-wide transition duration-300 hover:scale-105 shadow-lg"
          >
            <FaArrowRight className="text-sm" />
            View on Google Maps
          </a>
        </motion.div>

        {/* Right Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112807.19800337574!2d78.00530016586592!3d27.92574868115355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2cadf72941a092f%3A0x7a2b25bdb6205459!2sW3GQ%2B84M%20Muscles%20Apartment%2C%20Plot%20No.%20402%2F4%2C%20Dhorra%2C%20Dhourra%20Mafi%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!3m2!1d27.9257732!2d78.0877016!5e0!3m2!1sen!2sin!4v1761215124874!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            title="Elite International Trading Co. Location"
          ></iframe>
        </motion.div>
      </div>

      {/* Decorative glow or fade bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
    </section>
  );
};

export default MapSection;
