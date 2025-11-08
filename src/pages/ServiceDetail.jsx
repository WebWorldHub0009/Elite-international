// src/pages/ServiceDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/serviceData";
import ServicesSection from "../components/ServiceSection";

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

export default function ServiceDetailPage() {
  const { route } = useParams();
  const service = services.find((s) => s.route === `/services/${route}`);

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F2F2F2] font-[Poppins]">
        <h2 className="text-3xl font-bold text-[#2D2D2D]">
          Service Not Found
        </h2>
      </div>
    );
  }

  return (
    <>
      <div
        className="relative font-[Poppins] min-h-screen"
        style={{ backgroundColor: colors.lightGray }}
      >
        {/* Decorative Background Grid */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 800 800"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  stroke={colors.lightBlue}
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ color: colors.lightGreen }}
          >
            {service.title}
          </h1>

          {/* Quote */}
          <p
            className="text-center text-lg md:text-xl italic mb-8"
            style={{ color: colors.darkText }}
          >
            "{service.quote}"
          </p>

          {/* Subtitle */}
          <h3
            className="text-center text-2xl md:text-3xl font-medium mb-12"
            style={{ color: colors.lightBlue }}
          >
            {service.subtitle}
          </h3>

          {/* Image + Overview */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="md:w-1/2">
              <img
                src={service.img}
                alt={service.title}
                className="w-full rounded-3xl shadow-2xl border border-[#E0E0E0] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <h4
                className="text-3xl font-semibold mb-6"
                style={{ color: colors.lightGreen }}
              >
                Overview
              </h4>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: colors.darkText }}
              >
                {service.overview}
              </p>
            </div>
          </div>

          {/* Features + Why Us */}
          <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
            {/* Features */}
            <div className="md:w-1/2">
              <h4
                className="text-3xl font-semibold mb-4"
                style={{ color: colors.lightGreen }}
              >
                Features
              </h4>
              <ul
                className="list-disc list-inside space-y-3 text-base md:text-lg"
                style={{ color: colors.darkText }}
              >
                {service.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="md:w-1/2">
              <h4
                className="text-3xl font-semibold mb-4"
                style={{ color: colors.lightGreen }}
              >
                Why Choose Us
              </h4>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: colors.darkText }}
              >
                {service.whyUs}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block font-semibold px-10 py-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(to right, ${colors.lightGreen}, ${colors.lightBlue})`,
                color: colors.white,
              }}
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>

      <ServicesSection />
    </>
  );
}
