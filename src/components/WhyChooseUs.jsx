import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUsersCog, FaTruckMoving } from "react-icons/fa";
import spicesImg from "../assets/home/chicken.jpg"; // replace with your image
// import bgSvg from "../assets/svg/bg-pattern.svg"; 

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-10 px-6 md:px-20 overflow-hidden font-[Poppins]"
      style={{
        background: "radial-gradient(circle at top left, #fff 0%, #f2f2f2 90%)",
      }}
    >
      {/* Decorative Glowing Circles */}
      <div
        className="absolute top-10 left-10 w-64 h-64 rounded-full border-[2px] animate-pulse blur-[1px]"
        style={{ borderColor: `${colors.lightBlue}66` }}
      ></div>
      <div
        className="absolute bottom-10 right-16 w-72 h-72 rounded-full border-[2px] animate-ping"
        style={{ borderColor: `${colors.lightGreen}66` }}
      ></div>

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
          <div
            className="absolute -bottom-6 left-6 shadow-2xl px-8 py-5 rounded-2xl border-l-4"
            style={{
              backgroundColor: colors.white,
              borderLeftColor: colors.lightBlue,
            }}
          >
            <h3
              className="text-5xl font-extrabold leading-none"
              style={{ color: colors.lightBlue }}
            >
              34+
            </h3>
            <p
              className="font-medium text-base mt-1"
              style={{ color: colors.darkText }}
            >
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
          <p
            className="uppercase tracking-[4px] font-semibold mb-2"
            style={{ color: colors.lightBlue }}
          >
            Why Choose Us
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 leading-snug"
            style={{ color: colors.darkText }}
          >
            Your Trusted Partner for All{" "}
            <span style={{ color: colors.lightGreen }}>Exporting Needs</span>.
          </h2>

          <p
            className="mb-10 leading-relaxed text-[15px]"
            style={{ color: "#555555" }}
          >
            At{" "}
            <span className="font-semibold" style={{ color: colors.darkText }}>
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
              <div
                className="text-white p-4 rounded-xl shadow-lg group-hover:scale-105 transition-transform"
                style={{ backgroundColor: colors.lightBlue }}
              >
                <FaGlobe className="text-2xl" />
              </div>
              <div>
                <h4
                  className="text-lg font-semibold mb-1"
                  style={{ color: colors.darkText }}
                >
                  Extensive Global Network
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#555555" }}
                >
                  With years of expertise in international trade, we have built
                  a strong network of trusted suppliers and partners across the
                  globe.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="flex items-start gap-5 group">
              <div
                className="text-white p-4 rounded-xl shadow-lg group-hover:scale-105 transition-transform"
                style={{ backgroundColor: colors.lightGreen }}
              >
                <FaUsersCog className="text-2xl" />
              </div>
              <div>
                <h4
                  className="text-lg font-semibold mb-1"
                  style={{ color: colors.darkText }}
                >
                  Expertise and Experience
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#555555" }}
                >
                  Our seasoned professionals bring decades of combined
                  experience and knowledge in managing complex export processes
                  efficiently.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="flex items-start gap-5 group">
              <div
                className="text-white p-4 rounded-xl shadow-lg group-hover:scale-105 transition-transform"
                style={{ backgroundColor: colors.hoverBlue }}
              >
                <FaTruckMoving className="text-2xl" />
              </div>
              <div>
                <h4
                  className="text-lg font-semibold mb-1"
                  style={{ color: colors.darkText }}
                >
                  Efficient Logistics
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#555555" }}
                >
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
