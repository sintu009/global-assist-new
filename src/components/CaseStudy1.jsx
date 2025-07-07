import React from "react";
import cs1 from "../assets/cs1.png";
import csBg from "../assets/cs-bg.png";
import cs2 from "../assets/cs2.png";
import cs3 from "../assets/cs3.png";
import GetInTouch from "./GetInTouch";

const CaseStudy1 = () => {
  return (
    <section className="bg-white text-[#0A0D17] font-sans">
      {/* Hero Section */}
      <div className="relative px-6 md:px-20 pt-16 pb-12 overflow-hidden">
        {/* Background swirl */}
        <img
          src={csBg}
          alt="Background swirl"
          className="absolute top-[210px] right-[4px] md:right-24 md:top-10 w-80 pointer-events-none z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-[#f1e9f8] text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#553982] mb-4">
              Digital Revamp for <br /> MyRenewHome by<br/>Dan
            </h1>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Industry:</strong> Handyman Services
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Services Provided:</strong> Meta Ads Setup, Website<br/>Overhaul, Branding, CRM Integration, App Strategy
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src={cs1} alt="Case study preview" className="w-full max-w-xs md:max-w-md md:transform md:-translate-x-16" />
          </div>
        </div>
      </div>

      {/* Client Overview */}
      <div className="bg-[] py-12 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4 text-purple-700">
            Client <span className="text-gray-900">Overview</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MyRenewHome is a handyman services business led by Dan, focused on delivering prompt, real-time support to clients in need. Whether someone is stuck on the road or facing a household issue, Dan’s vision is to create an accessible, digital-first service platform that’s always available when needed.
          </p>
        </div>
      </div>

      {/* Challenges */}
      <div className="py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 ">
              Challenges
            </h2>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 text-sm">
              <li>Outdated and inconsistent Instagram creatives</li>
              <li>Graphic style not aligned with current trends or brand personality</li>
              <li>A cluttered and broken Meta Business Suite</li>
              <li>Expired ad accounts and locked payment methods</li>
              <li>Poorly designed website with minimal engagement value</li>
              <li>Lack of operational CRM or automation tools</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src={cs2} alt="Challenges illustration" className="w-full max-w-sm" />
          </div>
        </div>
      </div>

      {/* Our Solution & Strategy */}
      <div className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            Our Solution <span className="text-purple-700">& Strategy</span>
          </h2>

          {/* Each solution block */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                <span className="text-2xl text-purple-700 shadow-2xl">•</span> Meta Business Suite Overhaul
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Audited and cleaned the existing account</li>
                <li>Fixed multiple ad setup errors and updated payment methods</li>
                <li>Resolved email/login issues tied to Gmail and account access</li>
                <li>Created a new Meta Business Manager, Facebook page, and Ad account</li>
                <li>Established a clean slate for future ad campaigns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                <span className="text-2xl text-purple-700 shadow-2xl">•</span> Instagram Branding & Visual Identity
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Redesigned Instagram flyers and visual creatives</li>
                <li>Ensured brand tone and graphics matched current industry trends</li>
                <li>Strategically aligned posts for better engagement and consistency</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                <span className="text-2xl text-purple-700 shadow-2xl">•</span> Website Audit & Upgrade
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Identified limitations in the previous basic website</li>
                <li>Proposed modern UI/UX improvements</li>
                <li>Website redesign now in progress with positive feedback from the client</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                <span className="text-2xl text-purple-700 shadow-2xl">•</span> CRM Integration — Jobber AI Assistance
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Advised and assisted in integrating Jobber CRM with automation features</li>
                <li>Enabled streamlined bookings, tracking, and communication systems</li>
                <li>Created better backend operations using Jobber’s AI support features</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                <span className="text-2xl text-purple-700 shadow-2xl">•</span> App Planning (In Progress)
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Proposed and initiated planning for a mobile app called “PickUp”</li>
                <li>The app will allow real-time service bookings based on user needs and location</li>
                <li>Developer coordination and requirement mapping underway</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Results Section */}
<div className="py-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Image */}
    <div className="flex justify-center md:justify-start">
      <img src={cs3} alt="Results Illustration" className="w-full max-w-sm" />
    </div>

    {/* Text */}
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        <span className="text-[#000000]">
          Results
        </span>
      </h2>
      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
        <li>Fresh, trendy Instagram content leading to improved engagement</li>
        <li>CRM and automation setup through Jobber</li>
        <li>New website development underway</li>
        <li>
          Full client confidence secured, leading to ongoing work on app development
        </li>
      </ul>
    </div>
  </div>
</div>

      <GetInTouch />
    </section>
      
  );
};

export default CaseStudy1;
