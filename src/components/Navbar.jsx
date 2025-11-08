// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaImages,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logom.png";

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

// Navigation items with icons
const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Products", path: "/services", icon: <FaBoxOpen /> },
  { name: "Gallery", path: "/gallery", icon: <FaImages /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkStyle = (path) => ({
    color: pathname === path ? colors.lightGreen : colors.darkText,
    fontWeight: pathname === path ? "600" : "400",
    fontFamily: "'Poppins', sans-serif",
    padding: "6px 12px",
    transition: "color 0.3s ease",
  });

  return (
    <>
      {/* ======= TOP HEADER ======= */}
      <div
        className="hidden md:block border-b"
        style={{
          backgroundColor: colors.lightGray,
          color: colors.darkText,
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          borderColor: "#E5E5E5",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-8">
            <p className="flex items-center gap-2">
              <FaPhoneAlt style={{ color: colors.lightGreen }} />
              <a
                href="tel:+917618287878"
                className="hover:text-[#3CB371] transition"
              >
                +91 7618287878
              </a>
            </p>

            <p className="flex items-center gap-2">
              <MdEmail style={{ color: colors.lightGreen }} />
              <a
                href="mailto:theliteco6@gmail.com"
                className="hover:text-[#3CB371] transition"
              >
                theliteco6@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaClock style={{ color: colors.lightGreen }} />
              <span>
                Mon – Sat:{" "}
                <span className="text-sm text-gray-600">9 AM – 6 PM IST</span>
              </span>
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
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
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#3CB371] hover:text-white transition"
                >
                  <Icon size={13} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ======= MAIN NAVBAR ======= */}
      <nav
        className="w-full shadow-sm z-50"
        style={{ backgroundColor: colors.white }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 md:py-1">
          {/* LOGO + NAME */}
          <Link to="/" className="flex items-center justify-center gap-2">
            <img
              src={logo}
              alt="Elite International Trading Co. Logo"
              className="h-18 w-auto object-contain"
            />
          
          </Link>

          {/* DESKTOP MENU WITH ICONS */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={navLinkStyle(item.path)}
                  className="flex items-center gap-2 hover:text-[#4FC3F7] transition"
                >
                  <span className="text-[16px]">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE ICON */}
          <div className="md:hidden">
            <FaBars
              onClick={toggleMenu}
              className="cursor-pointer text-2xl"
              style={{ color: colors.darkText }}
            />
          </div>
        </div>

        {/* ======= MOBILE MENU ======= */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div
              ref={panelRef}
              className="h-full w-3/4 max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between"
            >
              {/* Top Logo + Close */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <img src={logo} alt="Logo" className="h-12 object-contain" />
                  <FaTimes
                    onClick={toggleMenu}
                    className="text-2xl cursor-pointer"
                    style={{ color: colors.darkText }}
                  />
                </div>

                {/* Menu Links with Icons */}
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={toggleMenu}
                      style={{
                        color:
                          pathname === item.path
                            ? colors.lightGreen
                            : colors.darkText,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: pathname === item.path ? "600" : "400",
                      }}
                      className="flex items-center gap-3 hover:text-[#4FC3F7] transition"
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* WhatsApp Button */}
                <div className="mt-8">
                  <a
                    href="https://wa.me/+917618287878"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#3CB371] text-white font-semibold py-3 rounded-full hover:bg-green-600 transition"
                  >
                    <FaWhatsapp /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Bottom Contact Info */}
              <div className="border-t mt-6 pt-4 text-sm text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#3CB371]" />{" "}
                  <a href="tel:+917618287878" className="hover:text-[#4FC3F7]">
                    +91 7618287878
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MdEmail className="text-[#4FC3F7]" />{" "}
                  <a
                    href="mailto:theliteco6@gmail.com"
                    className="hover:text-[#3CB371]"
                  >
                    theliteco6@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
}
