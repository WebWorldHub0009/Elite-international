// src/components/EliteProductsSection.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import productImg from "../assets/home/beef.jpg";

const services = [
  { title: "Rice Semi Milled", img: productImg, desc: "High-quality semi-milled rice perfect for all culinary uses." },
  { title: "Glazed Basmati Rice", img: productImg, desc: "Aromatic and premium glazed basmati rice for international standards." },
  { title: "Wholly Milled Rice", img: productImg, desc: "Adheres to stringent quality standards and ensures superior taste." },
  { title: "Coffee", img: productImg, desc: "Our commitment to quality begins at the source, delivering rich flavor." },
  { title: "Chai Patti", img: productImg, desc: "Premium tea leaves for a refreshing and aromatic tea experience." },
  { title: "Ginger", img: productImg, desc: "Fresh, organic ginger for culinary and medicinal use." },
  { title: "Saffron", img: productImg, desc: "Top-grade saffron, handpicked and naturally dried for premium quality." },
  { title: "Turmeric (Curcuma)", img: productImg, desc: "Curcuma longa powder and rhizomes. Complementary medicine approved." },
  { title: "Thyme", img: productImg, desc: "Fresh thyme leaves sourced from natural farms." },
  { title: "Bay Leaves", img: productImg, desc: "Fragrant bay leaves ideal for culinary seasoning." },
  { title: "Curry & Other Spice Mixtures", img: productImg, desc: "Blended spice mixtures for authentic flavors." },
  { title: "Buffalo Frozen & Chilled Meat", img: productImg, desc: "Frozen and chilled sheep & mutton carcass and cubes, premium quality." },
  { title: "Whole Chicken", img: productImg, desc: "Fresh, hygienically packed whole chicken for global standards." },
  { title: "Fresh Fruits", img: productImg, desc: "Handpicked fresh fruits for retail and export quality." },
  { title: "Fresh Vegetables", img: productImg, desc: "High-quality vegetables sourced from certified farms." },
  { title: "Hardware", img: productImg, desc: "Durable and reliable hardware for all construction and industrial needs." },
  { title: "Home Decoration Items", img: productImg, desc: "Elegant and premium home decor items for modern interiors." },
  { title: "Garments", img: productImg, desc: "High-quality garments adhering to international fashion standards." },
];

const EliteProductsSection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const navigate = useNavigate(); // ✅ initialize navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 3) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentServices = [
    services[startIdx % services.length],
    services[(startIdx + 1) % services.length],
    services[(startIdx + 2) % services.length],
  ];

  // Function to create a clean URL path for each product
  const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section className="flex flex-col md:flex-row h-auto w-full py-5 text-[#1C1C1C] font-poppins relative overflow-hidden">
      {/* Left Panel */}
      <div className="bg-[#FFFFFF] w-full md:w-[30%] flex flex-col p-10 md:p-12 lg:p-16 relative z-10 shadow-xl">
        <div className="flex flex-col gap-6 mb-8">
          <span className="text-xl font-bold tracking-wide">
            Elite <span className="text-[#C62828]">International Trading</span>
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-[Poppins] font-bold leading-tight">
            Premium <br />
            <span className="text-[#3CB371]">Products</span>
          </h1>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <p className="text-[#515151] text-sm sm:text-base leading-relaxed">
            Explore our wide range of high-quality products — rice, coffee, spices, fresh fruits & vegetables, frozen meats, home decor, garments, and more.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C62828] text-white rounded-md shadow-lg hover:opacity-90 transition font-semibold text-sm sm:text-base w-fit"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right Panels */}
      <div className="flex-1 flex flex-col md:flex-row transition-all duration-700">
        {currentServices.map((service, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/services/${createSlug(service.title)}`)} // ✅ navigate to individual route
            className="relative flex-1 group overflow-hidden shadow-lg cursor-pointer m-2 rounded-xl h-[80vh] hover:shadow-2xl hover:scale-[1.01] transition-all duration-500"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 transition duration-700"></div>
            <div className="absolute bottom-6 left-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-[1px] h-10 bg-[#D9D9D9]/60 mb-3"></div>
              <span className="text-sm text-[#D9D9D9]">{`0${idx + 1}`}</span>
              <h3 className="text-2xl font-semibold mt-1 text-white">{service.title}</h3>
              <p className="text-sm text-white/90 mt-1">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EliteProductsSection;
