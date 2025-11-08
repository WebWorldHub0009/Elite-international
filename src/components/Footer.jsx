import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";
import VisitorCounter from "./VisitorCounter";
import bgImage from "../assets/home/fbg.jpg";
import logo from "../assets/logom.png";
import { Link } from "react-router-dom";

// 🌿 Elite International Color Palette
const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

export default function Footer() {
  return (
    <footer
      className="relative text-center py-12 px-6 bg-cover bg-center font-[Poppins]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Elite International Trading Co Logo"
            className="h-16 md:h-24 object-contain drop-shadow-lg"
          />
        </div>

        <p
          className="text-sm uppercase tracking-widest mb-6"
          style={{ color: colors.lightBlue }}
        >
          Excellence • Integrity • Global Reach
        </p>

        {/* Navigation */}
        <nav
          className="flex flex-wrap justify-center gap-6 font-medium mb-6"
          style={{ color: colors.white }}
        >
          <Link
            to="/"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            Contact
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-condition"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            Terms & Condition
          </Link>
        </nav>

        {/* About text */}
        <p
          className="max-w-2xl mx-auto mb-3 text-sm leading-relaxed text-gray-800"
          
        >
          At{" "}
          <span className="text-[#4FC3F7]">
            Elite International Trading Company
          </span>
          , we bridge global trade with quality and trust. Our vision is to
          deliver excellence in every product, ensuring our partners receive
          premium goods that meet international standards.
        </p>

        {/* Company Info */}
        <div className="max-w-md mx-auto text-sm leading-relaxed mb-5 ">
          <p style={{  fontWeight: 500 }} className="text-[#3CB371]">
            Elite International Trading Co.
          </p>
          <p  className="text-gray-800">
            402, Dhorrah Mafi, Aligarh - 202002
          </p>
          <p  className="text-gray-800">📞 +91 7618287878</p>
          <p  className="text-gray-800">✉ Info@theliteco.com</p>
          <p  className="text-gray-800">✉ theliteco6@gmail.com</p>
          <p className="text-gray-800">
            ✉ eliteinternationaltradingco@gmail.com
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-[#E5E5E5] mb-8">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            to="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            to="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4FC3F7] transition text-[#3CB371]"
          >
            <Youtube className="w-5 h-5" />
          </Link>
        </div>

        {/* Visitor Counter */}
        <div className="mb-3 text-[#E5E5E5] text-sm">
          <VisitorCounter />
        </div>

        {/* Webmail Button */}
        <div className="mb-6">
          <Link
            to="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#3CB371] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <Mail className="w-5 h-5" />
            Webmail
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-800 text-xs">
          <p>
            © {new Date().getFullYear()} Elite International Trading Company. All
            Rights Reserved.
          </p>
          <p className="mt-1 text-gray-700">
            Designed & Developed by{" "}
            <Link to="https://webworldhub.co.in/" className="text-[#4FC3F7]">
              Web World Hub
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
