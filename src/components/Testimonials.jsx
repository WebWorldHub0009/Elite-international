import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Elite International Color Palette
const colors = {
  exportRed: "#C62828",
  classicBlack: "#1C1C1C",
  pureWhite: "#FFFFFF",
  neutralGray: "#D9D9D9",
  patternGreen: "#3CB371",
};

// Expanded Testimonials (15)
const testimonials = [
  { name: "Anil Mehra", country: "India", title: "Homeowner, Kanpur", text: "Elite International delivered premium quality food products with unmatched reliability. Highly satisfied!" },
  { name: "Simran Kaur", country: "India", title: "Interior Designer, Kanpur", text: "Their global-standard products and professional service impressed my clients immensely." },
  { name: "Rahul Verma", country: "India", title: "Café Owner, Kanpur", text: "Top-quality products and excellent support. My café now feels truly luxurious." },
  { name: "Priya Nair", country: "India", title: "Architect, Kanpur", text: "Every product speaks premium craftsmanship. Their attention to detail is unmatched." },
  { name: "John Smith", country: "USA", title: "Importer, New York", text: "Elite International ensures timely delivery with excellent quality. Trusted globally." },
  { name: "Maria Gonzalez", country: "Spain", title: "Restaurant Owner, Madrid", text: "The freshness and consistency of the shipments are outstanding. Highly recommend Elite International!" },
  { name: "Vikram Singh", country: "India", title: "Homeowner, Kanpur", text: "Loved the customization options. Every product fits perfectly and feels premium!" },
  { name: "Li Wei", country: "China", title: "Retail Partner, Shanghai", text: "Their international shipping and product quality are flawless. A reliable trading partner." },
  { name: "Ahmed Khan", country: "UAE", title: "Distributor, Dubai", text: "Fast, reliable, and premium products. A truly international trading partner." },
  { name: "Sophia Rossi", country: "Italy", title: "Chef, Rome", text: "Consistent quality, timely delivery, and excellent customer support." },
  { name: "Rohan Patel", country: "India", title: "Restaurant Owner, Mumbai", text: "Elite International’s products add premium touch to my restaurants." },
  { name: "Emma Johnson", country: "UK", title: "Retail Partner, London", text: "Reliable shipments and top-notch product quality. Highly recommended!" },
  { name: "Kumar Sinha", country: "India", title: "Hotel Owner, Jaipur", text: "Premium products that meet international standards. Very satisfied." },
  { name: "Liu Chen", country: "China", title: "Importer, Beijing", text: "Excellent quality and smooth shipping process. Elite International is trustworthy." },
  { name: "Fatima Noor", country: "Pakistan", title: "Distributor, Lahore", text: "High-quality products with consistent delivery. A partner you can rely on." },
];

export default function TestimonialSliderElite() {
  return (
    <section className="relative w-full py-8 px-6 md:px-12 font-[Poppins] bg-classicBlack overflow-hidden">
      {/* Colorful SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colors.exportRed} stopOpacity="0.2" />
            <stop offset="50%" stopColor={colors.patternGreen} stopOpacity="0.2" />
            <stop offset="100%" stopColor={colors.pureWhite} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1)"
          d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,192C672,203,768,181,864,176C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64V320H0Z"
        ></path>
      </svg>

      {/* Floating Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-patternGreen/20 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-exportRed/15 blur-3xl animate-pulse-slow" />

      {/* Section Heading */}
      <div className="relative max-w-6xl mx-auto text-center z-10 mb-12">
        <h2 className="text-4xl md:text-5xl text-[#C62828] font-bold text-pureWhite mb-4">
          What Our <span className="text-patternGreen">Clients Say</span>
        </h2>
        <p className="text-neutralGray text-lg md:text-xl max-w-3xl mx-auto italic">
          Trusted globally — delivering premium products and satisfaction across continents.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative rounded-3xl p-10 hover:shadow-4xl hover:-translate-y-2 transition-transform duration-500 border border-patternGreen/30">
              {/* Floating Verified Badge */}
              <span className="absolute -top-5 right-5 text-xs font-semibold px-4 py-1 rounded-full shadow-md"
                style={{ backgroundColor: colors.exportRed, color: colors.pureWhite }}
              >
                ★ Verified Client
              </span>

              {/* Quote Icon */}
              <div className="flex justify-center items-center mb-6 text-patternGreen">
                <FaQuoteLeft className="text-4xl opacity-80" />
              </div>

              {/* Testimonial Text */}
              <p className="text-neutralGray text-base md:text-lg italic leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-bold text-xl text-patternGreen">
                  {item.name} <span className="text-neutralGray text-sm">({item.country})</span>
                </p>
                <p className="text-neutralGray/80 text-sm">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
