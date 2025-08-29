import React, { useState } from "react";
import aboutbg1 from "../assets/aboutbg1.png";
import aboutbg2 from "../assets/aboutbg2.png";

const timelineData = [
  {
    year: 2007,
    title: "Foundation",
    subtitle: "The Journey Begins",
    description:
      "Global Assist was founded with the vision of transforming the way businesses access virtual assistance worldwide.",
  },
  {
    year: 2009,
    title: "To Be the World's Most Trusted Virtual Assistant Partner",
    subtitle: "",
    description:
      "At Global Assist, our mission is to be the most trusted global brand in virtual assistance, delivering high-quality, cost-effective business solutions. We empower businesses of all sizes to scale smarter through expertly trained virtual assistants and our 360° support model.",
  },
  {
    year: 2012,
    title: "Expansion",
    subtitle: "Global Presence Strengthened",
    description:
      "We expanded our operations internationally, providing multilingual support and round-the-clock availability to clients worldwide.",
  },
  {
    year: 2013,
    title: "Innovation",
    subtitle: "Tech-driven Growth",
    description:
      "Introduced AI-driven tools and advanced project management systems to streamline operations and boost productivity.",
  },
  {
    year: 2015,
    title: "Scaling Enterprises",
    subtitle: "Trusted by Large Organizations",
    description:
      "Became the go-to virtual assistance partner for enterprises, managing large-scale projects with tailored support models.",
  },
  {
    year: 2017,
    title: "Recognition",
    subtitle: "Industry Leader",
    description:
      "Recognized as one of the leading global providers of virtual assistant services, setting benchmarks for excellence.",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(1); // default = 2009

  return (
    <div className="w-full">
      {/* Section 1: aboutbg1 with overlayed heading */}
      <div className="relative w-full">
        <img src={aboutbg1} alt="About Background 1" className="w-full h-[40vh] md:h-screen object-cover" />
       <div className="absolute inset-0 flex flex-col items-center 
                justify-center md:justify-start 
                md:pt-[20vh] lg:pt-[30vh] text-black">
  <h2 className="text-7xl lg:text-9xl lg:mb-70 sm:mb-10 drop-shadow-lg">
    TIMELINE
  </h2>
  <p className="text-3xl lg:text-5xl drop-shadow-md">
    <span className="text-purple-500">Milestones </span>
    <span className="text-sky-400">That Made Us</span>
  </p>
</div>

      </div>

      {/* Section 2: aboutbg2 with timeline + content */}
<div className="relative w-full">
  <img 
  src={aboutbg2} 
  alt="About Background 2" 
  className="w-full h-auto md:h-[70vh] object-cover" 
/>

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="absolute inset-0 z-10 text-white px-6 py-10 flex flex-col">
    {/* Timeline Bar */}
<div className="relative w-4/5 mx-auto">
  {/* Base line */}
  <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-700 rounded-full"></div>

  {/* Progress line */}
  <div
    className="absolute top-1/2 left-0 h-[4px] rounded-full transition-all duration-500"
    style={{
      width: `${(activeIndex / (timelineData.length - 1)) * 100}%`,
      background: "linear-gradient(to right, #00c6ff, #0072ff)",
    }}
  ></div>

  {/* Circles + years */}
  <div className="flex justify-between relative z-10">
    {timelineData.map((item, index) => (
      <div
        key={item.year}
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setActiveIndex(index)}
      >
        {/* Year */}
        <p
          className={`mb-3 text-sm font-medium ${
            index === activeIndex ? "text-white" : "text-gray-400"
          }`}
        >
          {item.year}
        </p>

        {/* Circle */}
        <div
          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 transform -translate-y-1/2`}
          style={{
            backgroundColor:
              index === activeIndex ? "#22d3ee" : "#111827", // cyan for active, dark for inactive
            borderColor: index === activeIndex ? "#22d3ee" : "#9ca3af",
            boxShadow:
              index === activeIndex
                ? "0 0 10px rgba(34,211,238,0.8)"
                : "none",
          }}
        ></div>
      </div>
    ))}
  </div>
</div>


    {/* Content Area */}
    <div className="flex-1 flex items-center justify-center">
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div>
          <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {timelineData[activeIndex].year}
          </h3>
          <h4 className="text-3xl font-semibold mt-4">
            {timelineData[activeIndex].title}
          </h4>
          {timelineData[activeIndex].subtitle && (
            <p className="text-lg text-gray-300 mt-2">
              {timelineData[activeIndex].subtitle}
            </p>
          )}
        </div>

        {/* Right side */}
        <div>
          <p className="text-lg text-gray-200 leading-relaxed">
            {timelineData[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
