import React from "react";
import { useNavigate } from "react-router-dom";
import helloPeople from "../assets/hello-people.png"; // <-- your image of the 2 people

const HelloSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-2xl font-medium text-gray-800">
          Ready to evaluate your productivity?
        </p>

        {/* This container switches layout strategy based on screen size.
          - Mobile (default): 'flex flex-col' stacks the items vertically.
          - Desktop ('md:'): 'grid' allows for layering items on top of each other.
        */}
        <div className="mt-8 flex flex-col items-center md:grid md:grid-cols-1 md:place-items-center">
          
          {/* Layer 1: The "HELLO!" text. It's the base layer in the grid. */}
          <h1 className="order-1 text-8xl md:text-[180px] lg:text-[240px] font-extrabold md:col-start-1 md:row-start-1 z-0 md:-translate-y-45">
            <span className="gradient-shine">
              HELLO!
            </span>
          </h1>

          {/* Layer 2: The people image. Placed in the same grid cell on desktop. */}
          {/* A negative top margin is used on mobile to slightly overlap "HELLO!" */}
          <div className="order-2 -mt-12 sm:-mt-16 md:mt-0 md:col-start-1 md:row-start-1 md:self-end z-10 md:-translate-x-[200px] md:translate-y-[64px]">
            <img
              src={helloPeople}
              alt="Two smiling people with phones"
              className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl h-auto"
            />
          </div>

          {/* Layer 3: The text and button. Placed in the same grid cell on desktop. */}
          <div className="order-3 mt-6 text-center md:text-left md:col-start-1 md:row-start-1 md:self-end md:justify-self-end md:p-8 z-10 md:translate-y-[45px]">
            <h2 className="text-2xl font-semibold mb-2">
              It all starts with a conversation.
            </h2>
            <p className="text-gray-700 mb-6 max-w-xs mx-auto md:mx-0">
              Getting started with Global Assist is simple. We start with a
              consultation, craft tailored solutions, onboard your dedicated VA,
              and set up tools for smooth collaboration.
            </p>
            <button
              className="px-6 py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition"
              onClick={() => navigate("/contact")}
            >
              BOOK A CALL
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HelloSection;