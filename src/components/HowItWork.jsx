// src/components/HowItWorksElite.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaCheckCircle, FaBox, FaShippingFast } from "react-icons/fa";

const colors = {
  primary: "#C62828", // Export Red
  secondary: "#3CB371", // Pattern Green
  cream: "#FFFFFF",
  dark: "#1C1C1C",
  gold: "#D9B23C",
};

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We start by understanding your product needs, schedule, and requirements to plan a seamless export strategy.",
    icon: <FaHandshake size={30} />,
  },
  {
    id: 2,
    title: "Quality Check",
    description:
      "Our expert team ensures all products meet premium standards before packing and shipment.",
    icon: <FaCheckCircle size={30} />,
  },
  {
    id: 3,
    title: "Packing & Logistics",
    description:
      "High-quality packing and professional logistics guarantee safe delivery across destinations.",
    icon: <FaBox size={30} />,
  },
  {
    id: 4,
    title: "Delivery & Feedback",
    description:
      "We deliver on time and collect feedback to continually improve our premium services.",
    icon: <FaShippingFast size={30} />,
  },
];

export default function HowItWorksElite() {
  return (
    <section className="relative py-8 overflow-hidden font-poppins ">
      {/* Decorative SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="patternElite" width="200" height="200" patternUnits="userSpaceOnUse">
            <path
              d="M0 100 L100 0 L200 100 L100 200 Z"
              stroke={colors.secondary}
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#patternElite)" />
      </svg>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 px-6">
        <h3
          className="text-lg md:text-xl uppercase tracking-[6px] mb-2 font-semibold"
          style={{ color: colors.primary }}
        >
          Elite International Trading
        </h3>
        <h2
          className="text-5xl md:text-6xl font-bold mb-3"
          style={{ color: colors.secondary }}
        >
          How We Work
        </h2>
        <p
          className="max-w-3xl mx-auto text-[#1C1C1C] text-lg leading-relaxed"
        >
          A seamless four-step journey to deliver premium products worldwide with precision, quality, and care.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative p-8 rounded-3xl shadow-lg border border-[#D9D9D9]/30 backdrop-blur-md bg-white/70 hover:bg-white hover:shadow-[0_8px_30px_rgba(197,164,109,0.3)] transition-all duration-500"
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{
                background: `linear-gradient(135deg, ${colors.gold}33, ${colors.primary}33)`,
              }}
            ></div>

            {/* Icon */}
            <div
              className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full shadow-md"
              style={{
                background: `linear-gradient(135deg, ${colors.gold}, ${colors.primary})`,
                color: colors.cream,
              }}
            >
              {step.icon}
            </div>

            {/* Step Number */}
            <span
              className="absolute top-6 right-8 text-5xl font-bold opacity-10"
              style={{ color: colors.primary }}
            >
              0{step.id}
            </span>

            {/* Title */}
            <h3
              className="relative z-10 text-xl font-semibold mb-3 text-[#1C1C1C]"
            >
              {step.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-[#1C1C1C]/90 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-24"
        style={{
          background: `linear-gradient(to top, ${colors.gold}, transparent)`,
          opacity: 0.15,
        }}
      ></div>
    </section>
  );
}
