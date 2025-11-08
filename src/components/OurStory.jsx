import React from "react";
import imgRight from "../assets/home/mutton.jpg"; // Replace with Elite International relevant image

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

const OurStoryElite = () => {
  return (
    <section
      className="relative px-6 md:px-12 lg:px-20 py-10 overflow-hidden font-[Poppins]"
      style={{ backgroundColor: colors.white, color: colors.darkText }}
    >
      {/* Decorative Floating Blobs */}
      <div
        className="absolute top-10 left-10 w-48 h-48 rounded-full blur-3xl animate-pulse-slow"
        style={{ backgroundColor: `${colors.lightGreen}33` }}
      />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse-slow"
        style={{ backgroundColor: `${colors.lightBlue}33` }}
      />

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-start">
          {/* Heading */}
          <h2
            className="text-3xl md:text-5xl font-bold leading-snug mb-6"
            style={{ color: colors.darkText }}
          >
            Vision with Purpose & <br />
            The Excellence of{" "}
            <span style={{ color: colors.lightGreen }}>Elite International</span>
          </h2>

          {/* Content */}
          <p
            className="mt-4 text-base md:text-lg leading-relaxed"
            style={{ color: colors.darkText }}
          >
            Founded to deliver premium food products globally, Elite International
            Trading Co. blends international quality standards with reliability,
            efficiency, and customer trust.
          </p>
          <p
            className="mt-4 text-base md:text-lg leading-relaxed"
            style={{ color: colors.darkText }}
          >
            Our shipments guarantee freshness, consistency, and adherence to
            global compliance standards, ensuring excellence in every
            transaction.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex flex-col">
          <img
            src={imgRight}
            alt="Elite International Products"
            className="w-full h-auto object-cover rounded-xl shadow-2xl"
            style={{ border: `1px solid ${colors.lightGray}` }}
          />
          <p
            className="mt-4 text-sm md:text-base italic"
            style={{ color: colors.lightBlue }}
          >
            At Elite International, every shipment represents quality, trust, and
            global excellence.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="mt-6 relative z-10"
        style={{ borderTop: `1px solid ${colors.lightGray}` }}
      ></div>

      {/* Bottom Stats */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x text-center mt-6 relative z-10"
        style={{ borderColor: colors.lightGray }}
      >
        <div className="py-6 px-6 rounded-xl mx-4 mb-4 sm:mb-0">
          <h3
            className="text-4xl md:text-5xl font-bold"
            style={{ color: colors.lightGreen }}
          >
            34+
          </h3>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: colors.darkText }}
          >
            Years of Global Excellence <br />
            Delivering premium products worldwide with trust and reliability.
          </p>
        </div>
        <div className="py-6 px-6 rounded-xl mx-4 mb-4 sm:mb-0">
          <h3
            className="text-4xl md:text-5xl font-bold"
            style={{ color: colors.lightGreen }}
          >
            200+
          </h3>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: colors.darkText }}
          >
            Satisfied Clients <br />
            Across India and international markets, trusting our quality and
            service.
          </p>
        </div>
        <div className="py-6 px-6 rounded-xl mx-4">
          <h3
            className="text-4xl md:text-5xl font-bold"
            style={{ color: colors.lightGreen }}
          >
            300+
          </h3>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: colors.darkText }}
          >
            Shipments Completed <br />
            Maintaining consistency, freshness, and global standards in every
            delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStoryElite;
