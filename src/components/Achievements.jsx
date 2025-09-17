import React from "react";
import photoji from "../assets/photoji.jpg"; // Make sure the path to your image is correct

const Achievements = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
      <div className="text-center max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-7xl mb-12">
          <span className="gradient-shine">Our Achievements</span>
        </h2>
        
        {/* Centered Image Container */}
        <div className="flex justify-center">
          <img
            src={photoji}
            alt="Our Achievement"
            className="rounded-2xl shadow-lg border-4 border-white max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;