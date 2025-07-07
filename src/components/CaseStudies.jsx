import React from "react";
import { Link } from "react-router-dom";
import cs1 from "../assets/cs1.png"; // Thumbnail image
import cs2 from "../assets/cs2.png";
import cs3 from "../assets/cs3.png";
import cs4 from "../assets/cs4.jpeg";

const caseStudies = [
  {
    title: "Digital Revamp for MyRenewHome by Dan",
    image: cs1,
    link: "/case-study-1", // ✅ Linked to CaseStudy1.jsx
  },
  {
    title: "Case Study 2",
    image: cs2,
    link: "/case-study-2",
  },
  {
    title: "Case Study 3",
    image: cs3,
    link: "/case-study-3",
  },
  {
    title: "Case Study 4",
    image: cs4,
    link: "/case-study-4",
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
