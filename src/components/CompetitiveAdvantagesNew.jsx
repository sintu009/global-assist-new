import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // npm install framer-motion
import person from "../assets/person.png"; // replace with your image path

const pages = [
  {
    step: "STEP 1",
    title: "Diversification",
    content: `In today's business world, diversification is essential for survival
    and growth. At Global Assist, we offer a diverse team of virtual
    assistants from around the world, including India, the Philippines,
    Canada, and the Central America. Each VA brings unique skills,
    ensuring a perfect match for your needs. Whether it's admin,
    creative, or technical support, our team seamlessly integrates into
    your operations, offering fresh perspectives and tailored solutions.
    Continuously expanding our talent pool, we stay agile to meet
    evolving business demands. With diverse skills and cultural
    insights, we provide flexibility to tackle any challenge, keeping
    your operations competitive and agile.`,
  },
  {
    step: "STEP 2",
    title: "Innovation",
    content: `At Global Assist, innovation drives everything we do. Our virtual assistants use cutting-edge tools to streamline operations, boost efficiency, and spur growth. From advanced software for project management to data analysis techniques, our team tackles business challenges with creativity. We prioritize continuous improvement, offering regular training to stay updated on industry trends. This proactive culture empowers our VAs to introduce effective strategies, ensuring you stay ahead of the curve, adapt to market changes, and leverage the latest technologies for transformative outcomes.`,
  },
  {
    step: "STEP 3",
    title: "Global Reach",
    content: `In today's interconnected world, a global perspective is essential for business success. Our diverse virtual assistants offer insights from varied cultural backgrounds, enriching your business strategies. With our international team, adept at navigating global markets, you gain round-the-clock support across time zones, ensuring competitiveness. Our global presence enables tailored solutions for regional markets, facilitating expansion and effective local engagement.`,
  },
  {
    step: "STEP 4",
    title: "Result",
    content: `At Global Assist, we ensure impactful results. Our rigorously trained virtual assistants elevate efficiency, customer satisfaction, and overall productivity, backed by a proven track record. Clients consistently report significant improvements, empowering them to focus on business growth. Our commitment to excellence is evident in numerous success stories, spanning small businesses to enterprises. By partnering with us, you gain access to a dedicated team capable of driving measurable results and overcoming challenges, enhancing your strategic goals. Entrust us with your virtual assistant needs, and experience the difference in your bottom line and business success.`,
  },
];

export default function CompetitiveAdvantagesNew() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const goBack = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="bg-[#FCEED4] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Competitive Advantages
              </h2>

             <p className="text-4xl mb-2">
  <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
    {pages[currentPage].step}
  </span>
</p>

              <h3 className="text-4xl font-semibold mb-4 text-gray-900">
                {pages[currentPage].title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {pages[currentPage].content}
              </p>
            </div>

            {/* Right Content (Image + Arrows) */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute -z-10 inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 md:w-96 md:h-96 bg-[#C47C5F] rounded-full"></div>
                </div>
                <img
                  src={person}
                  alt="Person"
                  className="relative rounded-lg w-72 md:w-80 object-cover"
                />
              </div>

              {/* Arrows Group (Right side of image) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-3">
                <button
                  onClick={goBack}
                  disabled={currentPage === 0}
                  className={`bg-gray-100 rounded-full p-2 shadow hover:bg-gray-200 transition ${
                    currentPage === 0 ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                  onClick={goNext}
                  disabled={currentPage === pages.length - 1}
                  className={`bg-gray-100 rounded-full p-2 shadow hover:bg-gray-200 transition ${
                    currentPage === pages.length - 1
                      ? "opacity-40 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {pages.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentPage ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
