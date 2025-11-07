import React from "react";
import imgRight from "../assets/home/mutton.jpg"; // Replace with Elite International relevant image

const OurStoryElite = () => {
  return (
    <section className="relative bg-white/95  text-[#FFFFFF] px-6 md:px-12 lg:px-20 py-10 overflow-hidden font-[Poppins]">
      {/* Decorative Floating Blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#3CB371]/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C62828]/15 rounded-full blur-3xl animate-pulse-slow" />

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-start">
          {/* Heading */}
          <h2 className="text-3xl text-[#C62828] md:text-5xl font-bold leading-snug mb-6">
            Vision with Purpose & <br />
            The Excellence of{" "}
            <span className="text-[#3CB371]">Elite International</span>
          </h2>

          {/* Content */}
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
            Founded to deliver premium food products globally, Elite International Trading Co. blends international quality standards with reliability, efficiency, and customer trust.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-800">
            Our shipments guarantee freshness, consistency, and adherence to global compliance standards, ensuring excellence in every transaction.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex flex-col">
          <img
            src={imgRight}
            alt="Elite International Products"
            className="w-full h-auto object-cover rounded-xl shadow-2xl border border-[#D9D9D9]/20"
          />
          <p className="mt-4 text-sm md:text-base italic text-[#C62828]">
            At Elite International, every shipment represents quality, trust, and global excellence.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black mt-6 relative z-10"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#D9D9D9] text-center mt-6 relative z-10">
        <div className="py-6 px-6 rounded-xl mx-4 mb-4 sm:mb-0">
          <h3 className="text-4xl md:text-5xl font-bold text-[#3CB371]">34+</h3>
          <p className="mt-2 text-sm md:text-base text-gray-800">
            Years of Global Excellence <br />
            Delivering premium products worldwide with trust and reliability.
          </p>
        </div>
        <div className="py-6 px-6  rounded-xl mx-4 mb-4 sm:mb-0">
          <h3 className="text-4xl md:text-5xl font-bold text-[#3CB371]">200+</h3>
          <p className="mt-2 text-sm md:text-base text-gray-800">
            Satisfied Clients <br />
            Across India and international markets, trusting our quality and service.
          </p>
        </div>
        <div className="py-6 px-6  rounded-xl mx-4">
          <h3 className="text-4xl md:text-5xl font-bold text-[#3CB371]">300+</h3>
          <p className="mt-2 text-sm md:text-base text-gray-800">
            Shipments Completed <br />
            Maintaining consistency, freshness, and global standards in every delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStoryElite;
