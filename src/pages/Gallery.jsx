// src/components/Showcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GalleryHero from "../components/GalleryHero";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img15 from "../assets/gallery/15.jpg";

const colors = {
  red: "#8B0000",
  gold: "#C5A46D",
  white: "#FFFFFF",
  dark: "#1C1C1C",
  gray: "#F8F8F8",
};

const media = [
  { src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }, { src: img5 },
  { src: img6 }, { src: img7 }, { src: img8 }, { src: img9 }, { src: img10 },
  { src: img11 }, { src: img12 }, { src: img13 }, { src: img14 }, { src: img15 },
];

const Showcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openMedia = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevMedia = () => setSelectedIndex((prev) => (prev - 1 + media.length) % media.length);
  const nextMedia = () => setSelectedIndex((prev) => (prev + 1) % media.length);

  return (
    <>
      {/* Hero Section */}
      <GalleryHero />

      {/* Gallery Section */}
      <section
        className="relative px-6 md:px-12 py-12 overflow-hidden font-[Poppins]"
        style={{
          background: `linear-gradient(to bottom, ${colors.white}, ${colors.gray})`,
        }}
      >
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B0000]/10 blur-3xl rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C5A46D]/10 blur-3xl rounded-full -z-10"></div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colors.red,
            }}
          >
            Elite International{" "}
            <span
              style={{
                color: colors.gold,
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Gallery
            </span>
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: colors.gold }}
          ></div>
          <p
            className="mt-6 text-lg leading-relaxed text-gray-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Explore the excellence of{" "}
            <span className="font-semibold text-[#8B0000]">
              Elite International Trading Co.
            </span>{" "}
            — showcasing our global trade expertise, premium exports, and
            world-class logistics excellence.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {media.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden cursor-pointer rounded-2xl shadow-xl hover:shadow-2xl group"
              onClick={() => openMedia(i)}
            >
              <img
                src={item.src}
                alt={`Elite International Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
                <p
                  className="text-sm md:text-base font-semibold tracking-wide"
                  style={{ color: colors.white }}
                >
                  Elite International Trading Co.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={media[selectedIndex].src}
                  alt={`Elite Gallery Image ${selectedIndex + 1}`}
                  className="w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl"
                />

                {/* Close */}
                <button
                  className="absolute top-4 right-4 p-3 rounded-full transition hover:scale-110"
                  style={{
                    background: colors.red,
                    color: colors.white,
                    boxShadow: `0 0 20px ${colors.gold}70`,
                  }}
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>

                {/* Prev */}
                <button
                  className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full transition hover:scale-110"
                  style={{
                    background: colors.gold,
                    color: colors.dark,
                    boxShadow: `0 0 20px ${colors.gold}60`,
                  }}
                  onClick={prevMedia}
                >
                  <FaArrowLeft />
                </button>

                {/* Next */}
                <button
                  className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full transition hover:scale-110"
                  style={{
                    background: colors.gold,
                    color: colors.dark,
                    boxShadow: `0 0 20px ${colors.gold}60`,
                  }}
                  onClick={nextMedia}
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Showcase;
