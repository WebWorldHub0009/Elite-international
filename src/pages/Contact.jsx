// src/pages/Contact.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa";
import bg from "../assets/hero/dg2.jpg";
import ContactHero from "../components/ContactHero";
import MapSection from "../components/MapSection";

const services = [
  { title: "Rice Semi Milled" },
  { title: "Glazed Basmati Rice" },
  { title: "Wholly Milled Rice" },
  { title: "Coffee" },
  { title: "Chai Patti" },
  { title: "Ginger" },
  { title: "Saffron" },
  { title: "Turmeric (Curcuma)" },
  { title: "Thyme" },
  { title: "Bay Leaves" },
  { title: "Curry & Other Spice Mixtures" },
  { title: "Buffalo Frozen & Chilled Meat" },
  { title: "Whole Chicken" },
  { title: "Fresh Fruits" },
  { title: "Fresh Vegetables" },
  { title: "Hardware" },
  { title: "Home Decoration Items" },
  { title: "Garments" },
];

// 🎨 Official Color Palette
const colors = {
  exportRed: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  green: "#3CB371",
};

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#FFFFFF] text-[#1C1C1C]">
        {/* Left Panel: Company Info */}
        <div className="w-full lg:w-1/2 bg-[#FFFFFF] px-10 py-16 shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://img.freepik.com/free-photo/world-map-background_53876-94603.jpg')] bg-cover bg-center"></div>

          <h2
            className="text-5xl font-bold mb-6 pb-3 inline-block border-b-4 z-10"
            style={{
              borderColor: colors.exportRed,
              color: colors.exportRed,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Contact Info
          </h2>

          <div className="space-y-5 text-lg z-10">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt size={22} style={{ color: colors.green }} />
              <p className="leading-relaxed">
                Dorrah Mafi, Aligarh - 202002,<br /> Uttar Pradesh, India
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={22} style={{ color: colors.green }} />
              <p>+91 7618287878</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={22} style={{ color: colors.green }} />
              <p>Info@theliteco.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={22} style={{ color: colors.green }} />
              <p>arif.exportsales@gmail.com</p>
            </div>
          </div>

          <div className="mt-5 space-y-2 text-lg z-10">
            <div className="flex items-center gap-3">
              <FaUserTie size={22} style={{ color: colors.green }} />
              <p>
                <span className="font-semibold text-[#1C1C1C]">
                  Co-Founder & Director:
                </span>{" "}
                — Arif ul Islam Khan
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex space-x-6 text-2xl z-10">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:scale-110 transition transform duration-300 cursor-pointer"
                  style={{ color: colors.exportRed }}
                />
              )
            )}
          </div>
        </div>

        {/* Right Panel: Contact Form */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/70" />

          <form
            action="https://formsubmit.co/arif.exportsales@gmail.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3
              className="text-3xl font-semibold mb-6 border-b-2 inline-block"
              style={{
                borderColor: colors.exportRed,
                color: colors.white,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-[#D9D9D9] py-2 focus:border-[#C62828] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-[#D9D9D9] py-2 focus:border-[#C62828] outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-[#D9D9D9] py-2 focus:border-[#C62828] outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                required
                className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-[#D9D9D9] py-2 focus:border-[#C62828] outline-none"
              />

              <select
                name="service"
                required
                className="bg-transparent border-b border-[#D9D9D9] text-white py-2 focus:border-[#C62828] outline-none"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select Service
                </option>
                {services.map((s, i) => (
                  <option key={i} value={s.title} className="text-black">
                    {s.title}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="col-span-full bg-transparent border-b border-[#D9D9D9] text-white placeholder-[#D9D9D9] py-2 focus:border-[#C62828] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-full transition duration-300 hover:scale-105 shadow-lg"
              style={{
                backgroundColor: colors.exportRed,
                color: colors.white,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Send Message
            </button>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://theliteco.com/"
            />
          </form>
        </div>
      </section>
      <MapSection/>
    </>
  );
};

export default Contact;
