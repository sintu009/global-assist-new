import React from "react";
import founder1 from "../assets/founder1.png";
import founder2 from "../assets/founder2.png";

const Founder = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-4xl md:text-7xl text-center mb-12">
        Founder's Insight
      </h2>

      {/* Laimina Section */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-16 max-w-6xl mx-auto">
        <div className="flex justify-center md:justify-start">
          <img
            src={founder1}
            alt="Laimina Methuselha"
            className="rounded-2xl shadow-lg border-4 border-white w-64 md:w-[420px] h-auto"
          />
        </div>
        <div className="max-w-xl">
          <h4 className="text-sky-600 uppercase text-sm font-semibold tracking-widest">
            <span className="gradient-shine">FOUNDER and CEO</span>
          </h4>
          <h3 className="text-4xl md:text-5xl font-semibold mt-2 mb-4">
            Laimina<br />Methuselha
          </h3>
          <p className="text-black leading-relaxed">
            Meet Laimina Methuselha, the visionary founder and CEO behind Global
            Assist Inc., a dynamic and growing organization revolutionizing
            outsourcing and virtual work solutions for small and mid-size firms
            by providing more employment opportunities and delivering innovative
            virtual solutions that empower business to thrive in today’s dynamic
            landscape.
            <br />
            Lamina's professional journey, with an impressive 15 years of corporate expertise, reflects her unwavering commitment to excellence. Having spearheaded a successful staffing brand for 8 years, she transitioned to establish Global Assist Inc. as her own visionary venture.
            Her mission? To bridge the gap for small and mid-size businesses by connecting them with top-tier talent, thereby combatting unemployment while enabling individuals to pursue their passions from the comfort of their homes. Beyond her professional pursuits, Lamina is a devoted mother of two who cherishes quality time spent with her family and delights in exploring new destinations through travel
          </p>
        </div>
      </div>

      {/* Charles Section */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
        <div className="order-2 md:order-1 max-w-xl">
          <h4 className="text-purple-500 uppercase text-sm font-semibold tracking-widest">
            <span className="gradient-shine">CO-FOUNDER and COO</span>
          </h4>
          <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Charles<br />Methuselha
          </h3>
          <p className="text-black leading-relaxed">
            Introducing Charles Methuselha, the dynamic Co-Founder and Chief
            Operating Officer driving innovation and efficiency at Global Assist
            Inc. With a keen focus on creating robust SOPs, implementing
            protocols, and optimizing systems, Charles plays a pivotal role in
            ensuring the organization operates seamlessly.
            <br />
            Boasting an impressive 25 years of multifaceted experience across diverse industries including Recruiting, Real Estate, Corporate, ITES, BPO, KPO, and Aviation, Charles brings a wealth of expertise to the table. His extensive background spans key domains such as Operations, Sales, Business Development, Training, and Administration, making him a versatile leader adept at navigating complex challenges and driving strategic growth initiatives.
            <br />
            Beyond his professional prowess, Charles is fueled by a passion for fast cars and engineering, embodying a perfect blend of work and play. While he thrives in the fast-paced business world, he also understands the importance of family, always prioritizing quality time with loved ones.
          </p>
        </div>
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            src={founder2}
            alt="Charles Methuselha"
            className="rounded-2xl shadow-lg border-4 border-white w-64 md:w-[420px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Founder;
