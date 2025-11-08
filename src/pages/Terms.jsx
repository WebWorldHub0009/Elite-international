import React from "react";
import { motion } from "framer-motion";
import { FaBalanceScale, FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  darkText: "#2D2D2D",
  lightBlue: "#4FC3F7",
  lightGreen: "#3CB371",
  hoverBlue: "#AEDFF7",
  hoverGreen: "#BFF0D2",
};

const TermsAndConditions = () => {
  return (
    <section
      className="min-h-screen w-full py-10 px-6 md:px-20 relative overflow-hidden font-[Poppins]"
      style={{ backgroundColor: colors.white, color: colors.darkText }}
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full blur-[160px] animate-pulse"
        style={{ backgroundColor: colors.hoverGreen }}
      ></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[160px] animate-pulse"
        style={{ backgroundColor: colors.hoverBlue }}
      ></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-16"
      >
        <div className="flex justify-center mb-6">
          <FaBalanceScale
            size={60}
            className="drop-shadow-[0_0_10px_rgba(79,195,247,0.4)]"
            style={{ color: colors.lightGreen }}
          />
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold mb-3"
         
        >
          Terms & Conditions
        </h1>
        <p className="text-sm md:text-base" style={{ color: colors.darkText }}>
          Last Updated:{" "}
          <span className="font-semibold" style={{ color: colors.lightGreen }}>
            31/03/2024
          </span>
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-10 leading-relaxed">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Thank you for choosing{" "}
          <span className="font-semibold" style={{ color: colors.lightGreen }}>
            Elite International Trading Co.
          </span>{" "}
          as your trusted partner for your export needs. Please read these
          terms and conditions carefully before engaging in any business with
          us. By using our services, you agree to abide by these terms and
          conditions.
        </motion.p>

        {/* Terms List */}
        {[
          {
            title: "Orders and Contracts",
            content: [
              "All orders placed with Elite International Trading Co. are subject to acceptance and availability.",
              "A contract between you and Elite International Trading Co. will only be formed upon acceptance of your order by us.",
              "We reserve the right to refuse any order without providing any explanation.",
            ],
          },
          {
            title: "Pricing and Payment",
            content: [
              "All prices quoted are in the currency specified and are exclusive of any applicable taxes or duties unless otherwise stated.",
              "Payment terms will be agreed upon between both parties before the execution of any order.",
              "Elite International Trading Co. reserves the right to change prices without prior notice.",
            ],
          },
          {
            title: "Shipping and Delivery",
            content: [
              "Shipping costs and delivery times will be communicated upon confirmation of your order.",
              "We ensure timely delivery but are not liable for delays beyond our control, such as customs clearance or transportation issues.",
              "Risk of loss or damage to goods passes to you upon delivery.",
            ],
          },
          {
            title: "Quality Assurance",
            content: [
              "We take great care in ensuring the quality of our exports but cannot guarantee suitability for specific purposes unless explicitly stated.",
              "Any claims regarding quality or condition of goods must be made within 7 days of receipt.",
            ],
          },
          {
            title: "Returns and Refunds",
            content: [
              "Returns are accepted only if goods are defective or not as described.",
              "Notify us within 7 days of receipt for returns. Items must be in original packaging and condition.",
              "Refunds are processed within 30 days of receiving returned goods.",
            ],
          },
          {
            title: "Intellectual Property",
            content: [
              "All intellectual property rights related to our products remain the property of Elite International Trading Co. or its licensors.",
              "You agree not to use any trademarks, logos, or proprietary information without prior written consent.",
            ],
          },
          {
            title: "Confidentiality",
            content: [
              "Any information exchanged between you and Elite International Trading Co. shall be treated as confidential and used solely for conducting business.",
            ],
          },
          {
            title: "Governing Law and Jurisdiction",
            content: [
              "These terms and conditions are governed by and construed under the laws of [Jurisdiction].",
              "Any disputes shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].",
            ],
          },
          {
            title: "Amendments",
            content: [
              "Elite International Trading Co. reserves the right to amend these terms at any time without prior notice.",
              "Any such amendments are effective immediately upon posting on our website.",
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="rounded-2xl p-6 shadow-md border transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: colors.lightGray,
              borderColor: colors.hoverGreen,
            }}
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: colors.lightGreen }}
            >
              {section.title}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Contact Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <FaRegFileAlt
            size={40}
            className="mx-auto mb-4"
            style={{ color: colors.lightBlue }}
          />
          <p className="max-w-2xl mx-auto">
            By engaging in business with{" "}
            <span className="font-semibold" style={{ color: colors.lightGreen }}>
              Elite International Trading Co.
            </span>
            , you acknowledge that you have read, understood, and agree to be
            bound by these terms and conditions. For any queries, please{" "}
            <Link
              to="/contact"
              className="font-semibold hover:underline"
              style={{ color: colors.lightBlue }}
            >
              contact us
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
