import React from "react";
import GetInTouch from "./GetInTouch"; 
import ProcessTimeline from "./ProcessTimeline";

export default function HowItWorks() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh]">
        <div className="relative min-h-[80vh] flex items-center justify-center text-center text-black">
          {/* ✅ Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* ✅ Text Content Overlay */}
          <div className="relative z-10 space-y-4">
            <p className="uppercase text-sm tracking-widest text-gray-700">One Stop Shop</p>
            <h1 className="text-3xl md:text-5xl font-roboto font-semibold leading-snug text-black">
              What can Global Assist <br className="hidden md:block" />General VAs do?
            </h1>
          </div>
        </div>
      </section>
      <ProcessTimeline />
      <GetInTouch />
    </div>
  );
}
