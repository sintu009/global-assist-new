import React from "react";
import heroImage from "../assets/bookkeepinghero.png";
import complianceImg from "../assets/compliance.png";
import financialAnalysisImg from "../assets/financial-analysis.png";
import financingImg from "../assets/financing.png";
import decisionMakingImg from "../assets/decision-making.png";
import smm1 from '../assets/smm1.png';
import smm2 from '../assets/smm2.png';
import smm3 from '../assets/smm3.png';
import smm4 from '../assets/smm4.png';
import smm5 from '../assets/smm5.png';
import GetInTouch from '../components/GetInTouch';
import accproject1 from "../assets/accounting- quickbooks.png";
import accproject2 from "../assets/accounting- zero.png";
import { motion } from "framer-motion";

const fadeFrom = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

export default function AccountingBookkeeping() {
  return (
    <>
      <section className="py-18 mx-auto font-sans overflow-x-hidden">

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20 md:px-20 px-6">
          <div className="flex-1 mt-[-40px] sm:mt-[-86px]">
            <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
              ACCOUNTING & BOOKKEEPING
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#2F327D] mb-4 leading-snug font-[Nunito_Sans,sans-serif]">
              Foundational Pillars of <br />
              Financial Management: <br />
              Accounting and<br />Bookkeeping
            </h1>
            <p className="text-sm text-[#4A4A4A] max-w-md">
              Achieve Financial Mastery: Optimize Your Business with Professional Accounting and
              Bookkeeping Services. Contact Us for Expert Guidance.
            </p>
          </div>
          <div className="flex-1">
            <img src={heroImage} alt="Accounting & Bookkeeping Illustration" className="w-full max-w-xl mx-auto" />
          </div>
        </div>

        <div className="mt-24" />

        {/* Feature Section */}
        <div className="space-y-0 px-6">

          {/* 1. Compliance and Risk Management */}
          <div className="grid md:grid-cols-2 items-center gap-0 gap-y-16">
            <motion.div
              className="w-full mx-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFrom("left")}
            >
              <img
                src={complianceImg}
                alt="Compliance"
                className="w-[85%] h-auto mx-0 md:ml-23 mt-12 md:mt-0"
              />
            </motion.div>
            <motion.div
              className="w-full text-left mx-0 md:ml-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFrom("right")}
            >
              <h3 className="text-3xl font-semibold text-[#0A0D14] mb-3">
                Compliance and Risk<br />Management
              </h3>
              <p className="text-sm text-[#4A4A4A] max-w-md font-roboto">
                Proper accounting and bookkeeping practices ensure compliance with regulatory requirements and financial reporting standards. By accurately documenting financial transactions and maintaining records, businesses minimize the risk of audits, penalties, and legal issues, enhancing overall risk management.
              </p>
            </motion.div>
          </div>

          {/* 2. Improved Financial Analysis */}
          <div className="grid md:grid-cols-2 items-center gap-0 gap-y-16">
            <motion.div
              className="w-full text-left order-2 md:order-1 mx-0 md:ml-28"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFrom("left")}
            >
              <h3 className="text-3xl font-semibold text-[#0A0D14] mb-3">
                Improved Financial<br />Analysis
              </h3>
              <p className="text-sm text-[#4A4A4A] max-w-md">
                Accounting and bookkeeping data enable businesses to conduct comprehensive financial analysis. By analysing key performance indicators (KPIs), financial ratios, and trends over time, businesses gain insights into profitability, liquidity, and operational efficiency, identifying areas for improvement and optimization.
              </p>
            </motion.div>
            <motion.div
              className="w-full mx-0 order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFrom("right")}
            >
              <img
                src={financialAnalysisImg}
                alt="Analysis"
                className="w-[85%] h-auto mx-0 mt-12 md:mt-0"
              />
            </motion.div>
          </div>

          {/* 3. Facilitation of Financing */}
          <div className="grid md:grid-cols-2 items-center gap-0 gap-y-16">
            <motion.div
              className="w-full mx-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFrom("left")}
            >
              <img
                src={financingImg}
                alt="Financing"
                className="w-[85%] h-auto mx-0 md:ml-23 mt-12 md:mt-0"
              />
            </motion.div>
            <motion.div
              className="w-full text-left mx-0 md:ml-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFrom("right")}
            >
              <h3 className="text-3xl font-semibold text-[#0A0D14] mb-3">
                Facilitation of Financing
              </h3>
              <p className="text-sm text-[#4A0A4A] max-w-md">
                Well-maintained financial records enhance a business's credibility and transparency, making it easier to secure financing from lenders, investors, or financial institutions. Banks and investors often require detailed financial statements and records as part of the due diligence process when considering financing opportunities.
              </p>
            </motion.div>
          </div>

          {/* 4. Enhanced Decision-Making */}
          <div className="grid md:grid-cols-2 items-center gap-0 gap-y-16">
            <motion.div
              className="w-full text-left order-2 md:order-1 mx-0 md:ml-28"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFrom("left")}
            >
              <h3 className="text-3xl font-semibold text-[#061C3A] mb-3">
                Enhanced Decision-<br />Making
              </h3>
              <p className="text-sm text-[#4A4A4A] max-w-md">
                Timely access to accurate financial information allows businesses to make informed decisions quickly. Whether evaluating investment opportunities, pricing strategies, or expansion plans, management can rely on accounting and bookkeeping data to assess risks, weigh alternatives, and make strategic decisions that drive business growth.
              </p>
            </motion.div>
            <motion.div
              className="w-full mx-0 order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFrom("right")}
            >
              <img
                src={decisionMakingImg}
                alt="Decision Making"
                className="w-[85%] h-auto mx-0 mt-12 md:mt-0"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-24" />

        {/* Projects Section */}
        <section className="px-4 max-w-7xl mx-auto py-1">
          <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#0A0D17] mb-4">
            Project We Have Done
          </h2>
          <p className="text-gray-600 max-w-3xl mb-10 text-sm md:text-base text-left">
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.youtube.com/watch?v=yOa8dYEjcJQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={accproject1}
                alt="Project 1"
                className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=voNIXa0AKjU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={accproject2}
                alt="Project 2"
                className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105"
              />
            </a>
          </div>
        </section>

      </section>

      <div className="mt-24" />
      <GetInTouch />
    </>
  );
}
