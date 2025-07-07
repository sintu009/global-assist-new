import React from "react";
import GetInTouch from "./GetInTouch"; 
import ProcessTimeline from "./ProcessTimeline";

export default function HowItWorks() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh]">
        <div
          className="bg-cover bg-center min-h-[80vh] flex items-center justify-center text-center text-black transition-all duration-300"
          style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
        >
          <div className="space-y-4">
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
