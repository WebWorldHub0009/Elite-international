// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaAward,
  FaWhatsapp,
  FaPhotoVideo,
  FaVideo,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import logo from "../assets/elitelogo.png"

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  green: "#3CB371",
};

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Products", path: "/services", icon: <FaAward /> },
  { name: "Gallery", path: "/gallery", icon: <FaPhotoVideo /> },
  // { name: "Video", path: "/video", icon: <FaVideo /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 10px",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    color: pathname === path ? colors.red : colors.black,
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.3s ease",
    position: "relative",
    letterSpacing: "0.5px",
  });

  return (
    <>
      {/* Desktop Top Header */}
      <div
        className="hidden md:block"
        style={{
          background: colors.black,
          color: colors.white,
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          borderBottom: `2px solid ${colors.red}`,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <p className="flex items-center gap-2">
            <MdEmail style={{ color: colors.green }} />
            <a
              href="mailto:eliteinternationaltradingco@gmail.com"
              className="hover:text-[#3CB371] transition"
            >
             eliteinternationaltradingco@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaPhoneAlt style={{ color: colors.green }} />
            <a href="tel:+917618287878" className="hover:text-[#3CB371] transition">
            +91 7618287878
            </a>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          backgroundColor: colors.white,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          zIndex: 50,
        }}
        className="w-full px-4   py-1 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
            <Link
      to="/"
      className="flex items-center gap-2 group transition-all duration-300 hover:opacity-90"
      aria-label="Elite International Trading Co. - Home"
    >
      {/* Logo Wrapper */}
      <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60">
        <img
          src={logo}
          alt="Elite International Trading Co. Logo - Global Export Company from Aligarh"
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </div>

      {/* Optional Text (for SEO & accessibility, can be hidden visually) */}
      <span className="sr-only">
        Elite International Trading Co. — Exporters of Rice, Coffee, Spices, Garments, and More
      </span>
    </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-3 text-sm uppercase">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} style={navLinkStyle(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {Object.entries(socialLinks).map(([k, url]) => {
              const Icon =
                k === "facebook"
                  ? FaFacebookF
                  : k === "instagram"
                  ? FaInstagram
                  : FaLinkedinIn;
              return (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: colors.white,
                    color: colors.red,
                    border: `1px solid ${colors.red}`,
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-[#C62828] hover:text-white"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div style={{ color: colors.black }} className="md:hidden">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div
              ref={panelRef}
              style={{
                width: "75vw",
                maxWidth: "20rem",
                background: colors.white,
                boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
              }}
              className="h-full px-6 py-4 flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                  <span
                    className="text-3xl font-semibold"
                    style={{ color: colors.red }}
                  >
                    Duago Foods
                  </span>
                </Link>
                <FaTimes
                  style={{ color: colors.black }}
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4 border-gray-200" />

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-3 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color:
                        pathname === item.path ? colors.red : colors.black,
                      fontWeight: pathname === item.path ? "600" : "400",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/919030327350"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    borderRadius: "9999px",
                    backgroundColor: colors.green,
                    color: colors.white,
                    fontWeight: "600",
                    padding: "10px",
                  }}
                  className="hover:bg-green-700 transition"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>

              {/* Mobile Email & Phone at Bottom */}
              <div className="mt-auto pt-6 border-t border-gray-200 flex flex-col gap-2">
                <p className="flex items-center gap-2 text-sm">
                  <MdEmail style={{ color: colors.green }} />
                  <a
                    href="mailto:duagofoods@gmail.com"
                    className="hover:text-[#3CB371] transition"
                  >
                    duagofoods@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaPhoneAlt style={{ color: colors.green }} />
                  <a
                    href="tel:+919030327350"
                    className="hover:text-[#3CB371] transition"
                  >
                    +91 9030327350
                  </a>
                </p>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1"
              style={{
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(4px)",
              }}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
