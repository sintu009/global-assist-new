import React, { useState } from "react";
import aboutbg1 from "../assets/aboutbg1.png";
import aboutbg2 from "../assets/aboutbg2.png";

const timelineData = [
  {
    year: 2012,
    title: "The Beginning",
    subtitle: "The Journey Begins",
    description:
      "Our story started in 2012 with a vision to provide reliable and efficient virtual assistant services to businesses of all sizes. What began as a small team with big aspirations quickly transformed into a trusted partner for entrepreneurs and growing companies worldwide.",
  },
  {
    year: 2015,
    title: "Expanding Horizons",
    subtitle: "",
    description:
      " By 2015, our dedication and proven results opened doors to international markets. We proudly expanded our services to clients in the United States, United Kingdom, and Australia, establishing ourselves as a global virtual assistance provider committed to delivering excellence across borders.",
  },
  {
    year: 2019,
    title: "Driving Social Impact",
    subtitle: "",
    description:
      "In 2019, we were honored to join Immigrant Women in Business, an initiative that highlights leadership, resilience, and community impact. This milestone reinforced our belief in empowering not just businesses, but also people—especially women—by creating opportunities with meaningful social impact.",
  },
  {
    year: 2021,
    title: "Trusted by Big Clients",
    subtitle: "",
    description:
      " With years of consistent performance, 2021 marked a turning point as we acquired various big clients under our umbrella. This recognition was not only a testament to our expertise but also to the trust that global brands placed in our team to handle their critical operations.",
  },
  {
    year: 2023,
    title: "Building Stronger Teams",
    subtitle: "",
    description:
      "By 2023, our growth reached new heights with an employee strength of 80+ highly skilled Virtual Assistants offering round-the-clock support. With a diverse team working across time zones, we ensured our clients received uninterrupted service and seamless operations.",
  },
  {
    year: 2025,
    title: "Global Recognition",
    subtitle: "",
    description:
      "Today, in 2025, our journey has earned us global recognition. Being featured in Digital Journal is not just an achievement but a reflection of the value we bring to our clients and the impact we continue to create in the virtual assistance industry.",
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
                md:pt-[20vh] lg:pt-[15vh] text-black z-10">
  <h2 className="text-6xl lg:text-9xl lg:mb-70 font- text-center sm:mb-10 drop-shadow-lg">
    JOURNEY OF<br/>GLOBAL ASSIST
  </h2>
  <p className="text-3xl lg:text-5xl drop-shadow-md">
    <span className="gradient-shine">Milestones That Made Us </span>
    
  </p>
</div>

      </div>

      {/* Section 2: aboutbg2 with timeline + content */}
<div className="relative w-full">
  <img src={aboutbg2} alt="About Background 2" className="w-full h-[80vh] object-cover" />
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
          className={`mb-3 text-sm font-medium gradient-shine ${
            index === activeIndex ? "" : "text-gray-400"
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
          <h3 className="text-5xl font-bold gradient-shine bg-clip-text text-transparent">
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
