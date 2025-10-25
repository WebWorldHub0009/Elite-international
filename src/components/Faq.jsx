// src/components/FAQElite.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCouch, FaPaintBrush, FaUsers, FaPlus } from "react-icons/fa";

const colors = {
  red: "#C62828",        // Export Red
  black: "#1C1C1C",      // Classic Black
  white: "#FFFFFF",       // Pure White
  gray: "#D9D9D9",        // Neutral Gray
  green: "#3CB371",       // Pattern Green
  gold: "#D4AF37",        // Accent Gold
};

const faqCategories = {
  "Our Products": {
    icon: <FaCouch className="text-2xl" style={{ color: colors.gold }} />,
    faqs: [
      {
        question: "What types of food products do you export?",
        answer:
          "We export a wide range of high-quality food products including spices, grains, dairy, fruits, vegetables, and gourmet items to meet global standards.",
      },
      {
        question: "Can we request specific packaging or labeling?",
        answer:
          "Absolutely. We offer customized packaging, labeling, and branding solutions to comply with international regulations and client preferences.",
      },
      {
        question: "Are your products certified for international export?",
        answer:
          "Yes, all our products comply with international food safety standards and certifications, ensuring premium quality and global acceptance.",
      },
    ],
  },
  "Process & Quality": {
    icon: <FaPaintBrush className="text-2xl" style={{ color: colors.gold }} />,
    faqs: [
      {
        question: "How do you ensure product quality?",
        answer:
          "Each shipment undergoes rigorous quality checks, laboratory testing, and compliance verification to ensure freshness, safety, and premium standards.",
      },
      {
        question: "What is your supply chain process?",
        answer:
          "From sourcing to packaging and shipping, we maintain strict control over the supply chain to guarantee timely delivery and uncompromised quality.",
      },
      {
        question: "Do you handle cold chain logistics?",
        answer:
          "Yes, we provide specialized temperature-controlled logistics for perishable items to maintain freshness and quality during transit.",
      },
    ],
  },
  "Pricing & Support": {
    icon: <FaUsers className="text-2xl" style={{ color: colors.gold }} />,
    faqs: [
      {
        question: "Are your food exports expensive?",
        answer:
          "We provide premium quality at competitive prices, ensuring value for bulk orders and long-term partnerships.",
      },
      {
        question: "Do you offer bulk or recurring order discounts?",
        answer:
          "Yes, we offer tailored pricing for bulk orders, distributors, and recurring shipments to support global business needs.",
      },
      {
        question: "How can I contact your support team?",
        answer:
          "Our dedicated international support team is available 24/7 via email, phone, or WhatsApp to assist with queries, tracking, and documentation.",
      },
    ],
  },
};

export default function FAQElite() {
  const [activeTab, setActiveTab] = useState("Our Products");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  return (
    <section
      className="relative w-full py-8 px-6 md:px-12 font-poppins overflow-hidden "
      aria-labelledby="faq-heading"
    >
      {/* Hollow Circular SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="20%" cy="30%" r="150" stroke={colors.green} strokeWidth="2" fill="none" opacity="0.2" />
        <circle cx="80%" cy="70%" r="200" stroke={colors.red} strokeWidth="2" fill="none" opacity="0.15" />
        <circle cx="50%" cy="50%" r="100" stroke={colors.gold} strokeWidth="2" fill="none" opacity="0.1" />
      </svg>

      {/* Section Title */}
      <div className="relative text-center mb-16 z-10">
        <h2
          id="faq-heading"
          className="text-4xl md:text-5xl mb-4 font-bold"
          style={{ color: colors.red }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-center"
          style={{ color: colors.black }}
        >
          Explore details about{" "}
          <span style={{ color: colors.green, fontWeight: "600" }}>
            Elite International Trading
          </span>{" "}
          — Excellence, Quality, and Global Reach.
        </p>
      </div>

      {/* FAQ Container */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden border border-gray-200 bg-white/90 backdrop-blur-sm">
        {/* Sidebar Tabs */}
        <div className="md:w-1/3 bg-white/80 p-6 flex flex-col gap-4 border-r border-gray-200">
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full text-left px-5 py-3 rounded-xl flex items-center gap-3 text-base font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-gradient-to-r from-red-500 via-green-500 to-gold-400 text-white shadow-lg"
                  : "bg-white text-black hover:bg-gray-50"
              }`}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Questions Area */}
        <div className="md:w-2/3 p-8 bg-white/90 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4 relative">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left px-3 py-2 rounded-md hover:bg-gray-50 transition-all"
                  >
                    <span className="text-lg md:text-xl font-medium" style={{ color: colors.black }}>
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-bold"
                      style={{ color: colors.red }}
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-base mt-3 leading-relaxed px-3"
                        style={{ color: colors.black }}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
