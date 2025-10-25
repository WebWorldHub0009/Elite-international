// src/components/ProductMarquee.jsx
import React from "react";
import { FaSeedling, FaLeaf, FaCoffee, FaPepperHot, FaAppleAlt, FaDrumstickBite } from "react-icons/fa";

const products = [
  { name: "Rice Semi Milled", icon: <FaSeedling className="text-[#3CB371]" /> },
  { name: "Glazed Basmati Rice", icon: <FaLeaf className="text-[#3CB371]" /> },
  { name: "Wholly Milled Rice", icon: <FaSeedling className="text-[#3CB371]" /> },
  { name: "Coffee", icon: <FaCoffee className="text-[#C62828]" /> },
  { name: "Chai Patti", icon: <FaCoffee className="text-[#C62828]" /> },
  { name: "Ginger", icon: <FaPepperHot className="text-[#C62828]" /> },
  { name: "Saffron", icon: <FaPepperHot className="text-[#C62828]" /> },
  { name: "Turmeric (Curcuma)", icon: <FaPepperHot className="text-[#C62828]" /> },
  { name: "Thyme", icon: <FaLeaf className="text-[#3CB371]" /> },
  { name: "Bay Leaves", icon: <FaLeaf className="text-[#3CB371]" /> },
  { name: "Curry & Other Spice Mixtures", icon: <FaPepperHot className="text-[#C62828]" /> },
  { name: "Buffalo Frozen & Chilled Meat", icon: <FaDrumstickBite className="text-[#C62828]" /> },
  { name: "Whole Chicken", icon: <FaDrumstickBite className="text-[#C62828]" /> },
  { name: "Fresh Fruits", icon: <FaAppleAlt className="text-[#3CB371]" /> },
  { name: "Fresh Vegetables", icon: <FaSeedling className="text-[#3CB371]" /> },
  { name: "Hardware", icon: <FaLeaf className="text-[#D9D9D9]" /> },
  { name: "Home Decoration Items", icon: <FaLeaf className="text-[#D9D9D9]" /> },
  { name: "Garments", icon: <FaLeaf className="text-[#D9D9D9]" /> },
];

const ProductMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#1C1C1C] py-2 font-poppins">
      {/* Keyframes for smooth infinite scroll */}
      <style>{`
        @keyframes marqueeRtoL {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-content {
          display: flex;
          gap: 3rem;
          animation: marqueeRtoL 40s linear infinite;
        }
      `}</style>

      <div className="marquee-content">
        {products.concat(products).map((prod, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md"
          >
            <span className="text-lg">{prod.icon}</span>
            <span className="text-white text-sm font-[Poppins]">{prod.name}</span>
          </div>
        ))}
      </div>

      {/* Edge gradients for premium look */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#1C1C1C] to-transparent pointer-events-none"></div>

    </div>
  );
};

export default ProductMarquee;
