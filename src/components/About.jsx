import React from "react";
import { motion } from "framer-motion";
import centerImg from "../assets/home/mutton.jpg";
import client1 from "../assets/home/beef.jpg";
import client2 from "../assets/home/chicken.jpg";
import client3 from "../assets/home/mutton2.jpg";

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  green: "#3CB371",
};

export default function AboutSection() {
  return (
    <section
      className="relative py-10 bg-white overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='1440' height='320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23f9f9f9' fill-opacity='1' d='M0,96L60,117.3C120,139,240,181,360,181.3C480,181,600,139,720,106.7C840,75,960,53,1080,80C1200,107,1320,181,1380,213.3L1440,245L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      {/* TOP CENTER HEADING */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-[#C62828] font-semibold tracking-widest text-sm mb-2"
        >
          About Company
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-[#1C1C1C] leading-tight"
        >
          Our Trusted Clients
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg"
        >
          At <span className="font-semibold text-[#C62828]">Elite International Trading Company</span>, we take pride in being a
          leading exporter of premium-quality, halal-certified meat products.
          With a strong global presence and unwavering commitment to ethical,
          sustainable business, we’ve earned the trust of clients worldwide.
        </motion.p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-14">

       {/* LEFT VISUAL SIDE */}
<div className="relative flex justify-center items-center">
  {/* Orbit Circle */}
  <div className="absolute w-[14rem] h-[14rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] border border-dashed border-[#D9D9D9] rounded-full"></div>

  {/* Center Image */}
  <motion.img
    src={centerImg}
    alt="Elite International Trading Company"
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover rounded-full shadow-2xl z-10"
  />

  {/* Orbiting Images */}
  <motion.img
    src={client1}
    alt="Client 1"
    className="absolute -top-12 sm:-top-16 md:-top-22 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
    whileHover={{ scale: 1.1 }}
  />
  <motion.img
    src={client2}
    alt="Client 2"
    className="absolute top-1/2 left-3 sm:left-6 md:left-8 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
    whileHover={{ scale: 1.1 }}
  />
  <motion.img
    src={client3}
    alt="Client 3"
    className="absolute -bottom-12 sm:-bottom-16 md:-bottom-22 right-1/2 transform translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
    whileHover={{ scale: 1.1 }}
  />
</div>


        {/* RIGHT TEXT SIDE */}
        <div className="text-left md:pl-6">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-semibold text-[#1C1C1C] text-xl md:text-2xl"
          >
            We believe in doing
            <span className="block text-[#3CB371] mt-1 font-bold">
              Sustainable & Ethical Business
            </span>
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="list-disc pl-6 mt-5 text-gray-700 text-base leading-relaxed space-y-2"
          >
            <li>Exporting world-class, hygienic, and halal-certified meat products to over 30 destinations.</li>
            <li>Partnering with farms and facilities that uphold animal welfare and international standards.</li>
            <li>Maintaining transparency, freshness, and traceability from source to shipment.</li>
            <li>Building long-term, trust-driven relationships with global clients.</li>
          </motion.ul>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center gap-12">
            <div>
              <h3 className="text-4xl font-bold text-[#C62828]">30+</h3>
              <p className="text-gray-600 text-sm md:text-base">Export Destinations</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#3CB371]">100k+</h3>
              <p className="text-gray-600 text-sm md:text-base">Satisfied Clients</p>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-8 px-7 py-3 bg-[#C62828] text-white rounded-full font-medium text-base hover:bg-[#a92121] transition-all shadow-[0_0_20px_rgba(198,40,40,0.4)]"
          >
            Learn More →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
