import React from "react";
import singleImage from "../assets/single.png"; // This image should have the background rgba(245, 244, 246, 1)

const AboutV1Hero = () => {
  return (
    <section 
      className="w-full py-16 px-4 md:px-20" 
      style={{ 
        backgroundColor: "rgba(245, 244, 246, 1)", // Set section background to match image background
        boxShadow: "0 0 15px rgba(0,0,0,0.1)" // The section shadow is still there if you want it
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section Title */}
        <div className="mb-10">
          <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full mb-4">
            WHY CHOOSE US
          </button>
          <h2 className="text-3xl md:text-4xl text-gray-900">
            We are 360 degree total virtual{" "}
            <span className="text-purple-700">team solutions</span>
          </h2>
        </div>

        {/* Single Large Image Container */}
        <div className="relative w-full mt-10 flex justify-center items-center">
          <img
            src={singleImage}
            alt="Combined collage of team and abstract images"
            
            className="w-full max-w-6xl h-auto object-cover rounded-xl" // Removed shadow-2xl from here if it was present
          />
        </div>

        {/* Description Text */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 text-gray-800 text-sm md:text-base leading-relaxed">
          <p>
           At Global Assist Inc., our goal has always been simple: to be a reliable, all-in-one partner for businesses worldwide—so you can focus on what matters most while we manage the rest. With decades of hands-on experience in outsourcing and business support, we connect you with highly skilled, affordable global talent who work as true members of your team. Whether you're expanding your reach, streamlining how you work, or just reclaiming valuable time, our professionals are here to help. We deliver consistent, high-quality support with efficiency, care, and attention to detail—so your business can move forward, faster and smarter.



          </p>

          <p>
           We don’t just assign assistants—we create customized systems that fit the way you work. Our approach gives you a team of three dedicated experts for the cost of one, making sure tasks are done with speed, precision, and depth. From refining operations to handling day-to-day responsibilities, our teams stay ahead of your needs—bringing structure, clarity, and global best practices. With offices in the USA, Canada, India, and the Philippines, and clients around the world, Global Assist goes beyond outsourcing. We’re a true extension of your business—ready to support your goals so you can lead with clarity and confidence.

          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutV1Hero;