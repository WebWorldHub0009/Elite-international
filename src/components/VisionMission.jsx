import React from "react";
import { motion } from "framer-motion";

// Elite International Color Palette
const colors = {
  exportRed: "#C62828",
  classicBlack: "#1C1C1C",
  pureWhite: "#FFFFFF",
  neutralGray: "#D9D9D9",
  patternGreen: "#3CB371",
};

export default function VisionMission() {
  return (
    <section className="relative py-10 bg-classicBlack overflow-hidden font-[Poppins]">
      {/* Glowing Floating Blobs */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl animate-pulse-slow opacity-30"
        style={{ background: `${colors.patternGreen}` }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse-slow opacity-20"
        style={{ background: `${colors.exportRed}` }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full blur-2xl animate-pulse-slow opacity-25"
        style={{ background: `${colors.exportRed}` }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full blur-2xl animate-pulse-slow opacity-25"
        style={{ background: `${colors.patternGreen}` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-pureWhite mb-8 tracking-tight"
        >
          Our Vision & Mission
        </motion.h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative p-12  transform hover:-translate-y-2  transition-all duration-500 "
          >
            {/* Neon Border Glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-[#3CB371] to-[#C62828] opacity-20 pointer-events-none animate-pulse-slow"></div>
            
            <span className="text-6xl mb-6" style={{ color: colors.patternGreen }}>🎯</span>
            <h3 className="text-3xl md:text-4xl font-bold text-pureWhite mb-6">
              Our Vision
            </h3>
            <p className=" leading-relaxed text-base md:text-lg">
              To be a globally recognized exporter of premium food products, delivering quality, reliability, and excellence in every shipment. Setting international standards in food trade with innovation and trust.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative  p-12 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 "
          >
            {/* Neon Border Glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-[#C62828] to-[#3CB371] opacity-20 pointer-events-none animate-pulse-slow"></div>

            <span className="text-6xl mb-6" style={{ color: colors.exportRed }}>🚀</span>
            <h3 className="text-3xl md:text-4xl font-bold text-pureWhite mb-6">
              Our Mission
            </h3>
            <p className="text-neutralGray leading-relaxed text-base md:text-lg">
              To export top-quality food products worldwide with transparency, efficiency, and ethical practices. Ensuring every client experiences freshness, consistency, and the trust that comes with Elite International Trading Co.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
