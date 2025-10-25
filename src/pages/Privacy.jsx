import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaEnvelopeOpenText } from "react-icons/fa";

const colors = {
  red: "#C62828",
  green: "#3CB371",
  white: "#FFFFFF",
  black: "#1C1C1C",
  gray: "#D9D9D9",
};

const PrivacyPolicy = () => {
  return (
    <section
      className="min-h-screen w-full py-20 px-6 md:px-20 relative overflow-hidden font-[Poppins]"
      style={{ backgroundColor: colors.black }}
    >
      {/* 🔆 Background Glows */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#3CB371]/20 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#C62828]/20 rounded-full blur-[160px] animate-pulse"></div>

      {/* 🔒 Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-16"
      >
        <div className="flex justify-center mb-6">
          <FaUserShield
            size={60}
            className="text-[#3CB371] drop-shadow-[0_0_15px_rgba(60,179,113,0.5)]"
          />
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold mb-3"
          style={{
            background:
              "linear-gradient(90deg, #3CB371, #D4AF37, #C62828, #3CB371)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Privacy Policy
        </h1>
        <p className="text-[#D9D9D9] text-sm md:text-base">
          Effective Date: <span className="text-[#3CB371]">31/03/2024</span>
        </p>
      </motion.div>

      {/* 📜 Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-[#D9D9D9] space-y-10 leading-relaxed">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-[#3CB371] font-semibold">
            Elite International Trading Co.
          </span>{" "}
          (“we,” “us,” or “our”) is committed to protecting the privacy and
          security of your personal information. This Privacy Policy describes
          how we collect, use, and disclose the personal information we obtain
          from users of our website, products, and services.
        </motion.p>

        {/* 🧩 Policy Sections */}
        {[
          {
            title: "Information We Collect",
            content: [
              "We may collect personal information about you when you interact with us, including when you:",
              "• Visit our website",
              "• Make inquiries about our products or services",
              "• Place orders",
              "• Sign up for our newsletters or promotional materials",
              "• Participate in surveys or provide feedback",
              "The types of personal information we may collect include:",
              "• Contact information (such as name, address, email address, and phone number)",
              "• Payment information (such as credit card details)",
              "• Order details and transaction history",
              "• Information you provide to us for customer service or support purposes",
            ],
          },
          {
            title: "How We Use Your Information",
            content: [
              "We may use the personal information we collect for various purposes, including to:",
              "• Process and fulfill orders",
              "• Communicate with you about your orders or inquiries",
              "• Provide customer support",
              "• Send you newsletters, promotional materials, and other marketing communications",
              "• Improve our products, services, and website",
              "• Comply with legal obligations",
            ],
          },
          {
            title: "Information Sharing",
            content: [
              "We may share your personal information with third parties who provide services on our behalf, such as payment processors, shipping companies, and marketing service providers.",
              "We may also share your information with our affiliates, business partners, or in connection with a corporate transaction (such as a merger or sale).",
              "We may disclose your personal information when required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.",
            ],
          },
          {
            title: "Data Security",
            content: [
              "We take reasonable measures to protect the security of your personal information and to prevent unauthorized access, disclosure, or alteration.",
              "However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information.",
            ],
          },
          {
            title: "Your Choices",
            content: [
              "You may choose not to provide certain personal information, but this may limit your ability to use certain features of our website or services.",
              "You may unsubscribe from our marketing communications at any time by following the instructions provided in the emails we send.",
            ],
          },
          {
            title: "Updates to This Privacy Policy",
            content: [
              "We may update this Privacy Policy from time to time by posting a new version on our website.",
              "We will notify you of any material changes by email or by prominently posting a notice on our website.",
            ],
          },
          {
            title: "Contact Us",
            content: [
              "If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:",
              "✉️ info@theliteco.com",
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            className="bg-[#1C1C1C]/70 backdrop-blur-sm border border-[#3CB371]/10 rounded-2xl p-6 hover:border-[#3CB371]/30 hover:shadow-[0_0_20px_rgba(60,179,113,0.2)] transition-all duration-300"
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: colors.green }}
            >
              {section.title}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <FaEnvelopeOpenText
            size={40}
            className="mx-auto mb-4 text-[#3CB371] drop-shadow-[0_0_10px_rgba(60,179,113,0.4)]"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            For more details about how{" "}
            <span className="text-[#3CB371] font-medium">
              Elite International Trading Co.
            </span>{" "}
            manages and protects your information, feel free to{" "}
            <a
              href="/contact"
              className="text-[#C62828] hover:underline font-semibold"
            >
              contact us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
