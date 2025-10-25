import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUsersCog, FaTruckMoving } from "react-icons/fa";
import spicesImg from "../assets/home/chicken.jpg"; // replace with your image
// import bgSvg from "../assets/svg/bg-pattern.svg"; 

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  green: "#3CB371",
};

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-20 overflow-hidden font-[Poppins]"
      style={{
        background: "radial-gradient(circle at top left, #fff 0%, #f9f9f9 90%)",
      }}
    >
      {/* Decorative Glowing Circles */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-[2px] border-[#C62828]/40 animate-pulse blur-[1px]"></div>
      <div className="absolute bottom-10 right-16 w-72 h-72 rounded-full border-[2px] border-[#3CB371]/40 animate-ping"></div>

      {/* Optional SVG pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${""})`,
        }}
      ></div>

      <div className="relative grid md:grid-cols-2 gap-14 items-center z-10">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={spicesImg}
              alt="Export goods"
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 left-6 bg-white shadow-2xl px-8 py-5 rounded-2xl border-l-4 border-[#C62828]">
            <h3 className="text-5xl font-extrabold text-[#C62828] leading-none">
              34+
            </h3>
            <p className="text-[#1C1C1C] font-medium text-base mt-1">
              Years of Experience
            </p>
          </div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C62828] uppercase tracking-[4px] font-semibold mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-6 leading-snug">
            Your Trusted Partner for All{" "}
            <span className="text-[#C62828]">Exporting Needs</span>.
          </h2>

          <p className="text-[#555555] mb-10 leading-relaxed text-[15px]">
            At{" "}
            <span className="font-semibold text-[#1C1C1C]">
              Elite International Trading Co.
            </span>
            , we understand that when it comes to exporting goods, you have a
            multitude of options. However, our reputation for reliability,
            precision, and quality sets us apart on the global stage.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {/* Feature Card 1 */}
            <div className="flex items-start gap-5 group">
              <div className="bg-[#C62828] text-white p-4 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <FaGlobe className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1C1C1C] mb-1">
                  Extensive Global Network
                </h4>
                <p className="text-[#555555] text-sm leading-relaxed">
                  With years of expertise in international trade, we have built
                  a strong network of trusted suppliers and partners across the
                  globe.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="flex items-start gap-5 group">
              <div className="bg-[#C62828] text-white p-4 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <FaUsersCog className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1C1C1C] mb-1">
                  Expertise and Experience
                </h4>
                <p className="text-[#555555] text-sm leading-relaxed">
                  Our seasoned professionals bring decades of combined
                  experience and knowledge in managing complex export processes
                  efficiently.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="flex items-start gap-5 group">
              <div className="bg-[#C62828] text-white p-4 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <FaTruckMoving className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1C1C1C] mb-1">
                  Efficient Logistics
                </h4>
                <p className="text-[#555555] text-sm leading-relaxed">
                  Exporting goods can be complex — but with Elite International
                  Trading Co., every shipment is managed with precision and
                  transparency.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
