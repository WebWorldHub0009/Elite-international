// src/components/FooterElite.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaClipboardList,
  FaTrello,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgImage from "../assets/home/footer.jpg";

const colors = {
  gold: "#C5A46D",
  maroon: "#800000",
  black: "#000000",
  borderGray: "#E0E0E0",
};

const services = [
  "Rice Semi Milled",
  "Glazed Basmati Rice",
  "Wholly Milled Rice",
  "Coffee",
  "Chai Patti",
  "Ginger",
  "Saffron",
  "Turmeric (Curcuma)",
  "Thyme",
  "Bay Leaves",
  "Curry & Other Spice Mixtures",
  "Buffalo Frozen & Chilled Meat",
  "Whole Chicken",
  "Fresh Fruits",
  "Fresh Vegetables",
  "Hardware",
  "Home Decoration Items",
  "Garments",
];

const quickLinks = [
  { title: "Home", path: "/", icon: <FaHome /> },
  { title: "About", path: "/about", icon: <FaInfoCircle /> },
  { title: "Services", path: "/services", icon: <FaLayerGroup /> },
  { title: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  // { title: "Certificates", path: "/certificates", icon: <FaClipboardList /> },
  { title: "Privacy Policy", path: "/privacy", icon: <FaLayerGroup /> },
  { title: "Terms & Condition", path: "/terms&condition", icon: <FaTrello /> },
];

export default function FooterElite() {
  return (
    <footer
      className="relative pt-10 pb-5 px-6 md:px-16 overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <p
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{ color: colors.maroon }}
          >
            Elite International Trading Co.
          </p>
          <p className="leading-relaxed text-black text-base mt-2">
            Exporting premium food items worldwide with quality, reliability, and excellence. 
            We ensure global standards in every shipment.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send/?phone=917618287878&text=Hello%20Elite%20International",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#C5A46D] text-[#000000] transition duration-300 shadow-lg`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Webmail Button */}
          <div className="mt-5">
            <a
              href="https://id.cpanel.net/get/login?url=aHR0cHM6Ly9zdG9yZS5jcGFuZWwubmV0L2F1dGgtc2VydmljZS9jaGVjay1zZXNzaW9uLz9yZWRpcmVjdD1odHRwczovL3N0b3JlLmNwYW5lbC5uZXQvbG9naW4="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A46D] text-[#000000] px-4 py-2 rounded-lg font-semibold hover:bg-[#800000] hover:text-[#F3F3F3] transition duration-300 shadow-md"
            >
              <FaEnvelope /> Webmail
            </a>
          </div>
        </div>

        {/* Quick Links + Business Numbers */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon }}>
            Quick Links
          </h4>
          <ul className="space-y-2 mb-6">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-black hover:text-[#C5A46D] transition duration-300"
                >
                  {link.icon} {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Business Numbers Section */}
          <div className="mt-2 "
               style={{ borderColor: colors.gold, }}>
            <h4 className="text-2xl font-semibold mb-2" style={{ color: colors.maroon }}>
              Business Numbers
            </h4>
            <p className="text-black font-medium tracking-wide">
              <span style={{ color: colors.gold }}>GST :</span> 09BJSPK7801B1Z4
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon }}>
            Our Products
          </h4>
          <ul className="space-y-2">
            {services.slice(0, 12).map((item, i) => (
              <li key={i} className="text-black hover:text-[#C5A46D] transition duration-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info + Founder */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon }}>
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-black">
            Dorrah Mafi, Aligarh - 202002,<br />
            Uttar Pradesh, India
          </address>

          <p className="text-sm mb-2 flex items-center gap-2 text-black">
            <FaPhoneAlt style={{ color: colors.gold }} />
            <a href="tel:+917618287878" className="hover:text-[#C5A46D] transition duration-300">
              +91 7618287878
            </a>
          </p>
          <p className="text-sm mb-2 flex items-center gap-2 text-black">
            <FaEnvelope style={{ color: colors.gold }} />
            <a href="mailto:Info@theliteco.com" className="hover:text-[#C5A46D] transition duration-300">
              Info@theliteco.com
            </a>
          </p>
          <p className="text-sm mb-2 flex items-center gap-2 text-black">
            <FaEnvelope style={{ color: colors.gold }} />
            <a href="mailto:arif.exportsales@gmail.com" className="hover:text-[#C5A46D] transition duration-300">
              arif.exportsales@gmail.com
            </a>
          </p>
            <p className="text-sm mb-2 flex items-center gap-2 text-black">
            <FaEnvelope style={{ color: colors.gold }} />
            <a href="mailto:eliteinternationaltradingco@gmail.com" className="hover:text-[#C5A46D] transition duration-300">
             eliteinternationaltradingco@gmail.com
            </a>
            
          </p>

          {/* Founder Info */}
          <div className="mt-6">
            <h4 className="text-2xl font-semibold mb-2" style={{ color: colors.maroon }}>
              Co-Founder
            </h4>
            <p className="text-black mb-1 font-semibold">Arif ul Islam Khan</p>
            <p className="text-gray-700 italic">Co-Founder & Director</p>
          </div>

          <div className="relative right-6">
            <div>
              <Translator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 text-center text-sm border-t border-black pt-6 relative z-10 space-y-2 text-black">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Elite International Trading Co. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#C5A46D] hover:text-[#800000] transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
