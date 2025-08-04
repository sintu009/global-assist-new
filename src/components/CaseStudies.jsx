import React from "react";
import { Link } from "react-router-dom";
import cs1 from "../assets/case1.png"; // Thumbnail image
import cs2 from "../assets/case2.png";
import cs3 from "../assets/case3.png";
import cs4 from "../assets/case4.png";

const caseStudies = [
  {
    title: "Digital Revamp for MyRenewHome by Dan",
    image: cs1,
    link: "/digital-revamp-myrenewhome-dan", // ✅ Linked to CaseStudy1.jsx
  },
  {
    title: "How Our Virtual Assistant Helped an Insurance Agent",
    image: cs2,
    link: "/virtual-assistant-insurance-agent-success",
  },
  {
    title: "How I Helped Heartland Realty Build a Modern Marketing System That Converts",
    image: cs3,
    link: "/heartland-realty-modern-marketing-system",
  },
  {
    title: "Elevating RER & LVI: A Digital Makeover for Aleya Bhaloo’s Luxury Brands",
    image: cs4,
    link: "/digital-makeover-rer-lvi-aleya-bhaloo",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-[#0A0D17]">
      <h2 className="text-4xl font-bold text-center mb-12">Our Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((cs, index) => (
          <Link
            to={cs.link}
            key={index}
            className="group block border rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={cs.image}
              alt={cs.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold group-hover:text-purple-700 transition">
                {cs.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Click to read full case study
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
