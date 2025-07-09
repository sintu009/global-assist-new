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
           At Global Assist Inc., our vision has always been clear: to become the trusted, one-stop solution for businesses across the globe—so they can focus on the big picture while we take care of the details.
With decades of expertise in outsourcing and strategic support, we specialize in connecting companies with highly trained, cost-effective global talent who act as true extensions of their team. Whether you're scaling operations, improving efficiency, or simply freeing up time to grow your business, our resources are ready to deliver with precision and professionalism.

          </p>

          <p>
            We don’t just assign assistants—we build tailored support systems. Our model offers a team of three experts at the cost of one, ensuring every task is handled with depth, speed, and accuracy. From workflow optimization to daily operations, our teams proactively anticipate needs, implement global best practices, and drive consistent results.
With offices in the USA, Canada, India, and the Philippines, and clients around the world, Global Assist is more than a service provider—we’re a partner in your progress.
Let us handle the work, so you can lead with clarity, confidence, and focus. ) 

          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutV1Hero;