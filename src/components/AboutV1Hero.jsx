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
            // Ensure no shadow or border is applied to the image itself if you want a seamless blend.
            // The image itself should ideally NOT have a shadow if you want it to blend perfectly.
            // If the transparent image still shows a shadow, it might be part of the image itself.
            className="w-full max-w-6xl h-auto object-cover rounded-xl" // Removed shadow-2xl from here if it was present
          />
        </div>

        {/* Description Text */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 text-gray-800 text-sm md:text-base leading-relaxed">
          <p>
           Global Assist Inc. is a leading 360-degree Business solution firm with offices in the USA, Canada, India, and the Philippines and branches spread globally. We identify with the importance of your work and make sure that your requirements are looked after in the best way possible.
          </p>

          <p>
            Accounts, Bookkeeping, Travel Booking, Research, Emails, & Scheduling. Accounts, Bookkeeping, Travel Booking, Research, Emails, & Scheduling. Accounts, Bookkeeping, Travel Booking, Research, Emails, & Scheduling. Accounts, Bookkeeping, Travel Booking, Research, Emails, & Scheduling. Accounts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutV1Hero;