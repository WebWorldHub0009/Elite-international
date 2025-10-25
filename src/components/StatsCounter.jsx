// src/components/StatsSectionElite.jsx
import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaGlobe, FaTruck, FaUsers } from "react-icons/fa";
import bg from "../assets/home/bg.jpg"; // Import your background image

const colors = {
  primary: "#C62828",   // Elite Red
  secondary: "#3CB371", // Elite Green
  gold: "#D4AF37",      // Gold Accent
  dark: "#1C1C1C",
  light: "#FFFFFF",
  gray: "#D9D9D9",
};

// StatCard Component
const StatCard = ({ icon: Icon, label, target, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericPart = parseFloat(target.replace(/[^\d.]/g, ""));
    const multiplier = target.includes("K")
      ? 1000
      : target.includes("M")
      ? 1000000
      : 1;
    const finalTarget = Math.floor(numericPart * multiplier);
    const duration = 2500;
    const increment = finalTarget / (duration / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalTarget) {
        current = finalTarget;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatCount = () => {
    const plus = target.includes("+") ? "+" : "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M${plus}`;
    if (count >= 1000) return `${Math.floor(count / 1000)}K${plus}`;
    return `${count}${plus}`;
  };

  return (
    <div className=" relative group p-6 flex flex-col items-center justify-center transition-all duration-500">
      {/* Icon */}
      <div
        className="w-20 h-20 flex items-center justify-center rounded-full mb-4 shadow-md transition-transform duration-500 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${color}, ${colors.gold})`,
          color: colors.light,
        }}
      >
        <Icon size={32} />
      </div>

      {/* Number */}
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{
          background: `linear-gradient(90deg, ${color}, ${colors.gold})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {formatCount()}
      </div>

      {/* Label */}
      <p
        className="text-sm md:text-base text-gray-700 text-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
      </p>

    
    </div>
  );
};

// Stats Section
const StatsSectionElite = () => {
  return (
    <section
      className="relative py-10 px-6 md:px-20 h-[70vh] text-center overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  -z-10"></div>

      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-5">
        <h3
          className=" px-4 text-lg md:text-xl uppercase tracking-widest mb-3 font-semibold"
          style={{ color: colors.primary, fontFamily: "'Poppins', sans-serif" }}
        >
          Elite International Trading
        </h3>
        <h2
          className=" text-[#3CB371] text-4xl md:text-5xl font-bold mb-4"
          style={{  fontFamily: "'Poppins', sans-serif" }}
        >
          Our Achievements
        </h2>
        <p
          className="text-[#C62828] md:text-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Delivering premium products worldwide with excellence, trust, and quality.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <StatCard icon={FaBoxOpen} label="Products Exported" target="500+" color={colors.primary} />
        <StatCard icon={FaGlobe} label="Countries Served" target="120+" color={colors.secondary} />
        <StatCard icon={FaTruck} label="Shipments Delivered" target="200+" color={colors.gold} />
        <StatCard icon={FaUsers} label="Happy Clients" target="300+" color={colors.dark} />
      </div>
    </section>
  );
};

export default StatsSectionElite;
