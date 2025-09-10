import React, { useState } from "react";
import { Helmet } from "react-helmet";
import heroImage from "../assets/bookkeepinghero.png";
import complianceImg from "../assets/compliance.png";
import financialAnalysisImg from "../assets/financial-analysis.png";
import financingImg from "../assets/financing.png";
import decisionMakingImg from "../assets/decision-making.png";
import GetInTouch from '../components/GetInTouch';
import accproject1 from "../assets/accounting- quickbooks.png";
import accproject2 from "../assets/accounting- zero.png";
import { motion } from "framer-motion";

import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";

import finance1 from "../assets/finance1.png";
import finance2 from "../assets/finance2.png";
import finance3 from "../assets/finance3.png";
import finance4 from "../assets/finance4.png";
import finance5 from "../assets/finance5.png";
import finance6 from "../assets/finance6.png";  
import finance7 from "../assets/finance7.png";  
import finance8 from "../assets/finance8.png";
import finance9 from "../assets/finance9.png";

import HelloSection from "../components/HelloSection";

const fadeFrom = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});


export default function AccountingBookkeeping() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

    const services = [
  {
    img: finance1,
    title: "Bookkeeping",
    desc: (
      <div className="text-left">
        Stay organized with up-to-date records <br />
        - Record daily transactions <br />
        - Maintain ledgers & journals <br />
        - Categorize expenses & income
      </div>
    ),
  },
  {
    img: finance2,
    title: "Financial Reporting",
    desc: (
      <div className="text-left">
        Get a clear picture of your finances <br />
        - Generate monthly reports <br />
        - Share performance insights <br />
        - Create custom financial summaries
      </div>
    ),
  },
  {
    img: finance3,
    title: "Invoices Management",
    desc: (
      <div className="text-left">
        Ensure timely billing and payments <br />
        - Create & send invoices <br />
        - Track paid/unpaid bills <br />
        - Follow up on payments
      </div>
    ),
  },
  {
    img: finance4,
    title: "Bank Reconciliation",
    desc: (
      <div className="text-left">
        Align your books with your bank <br />
        - Match transactions <br />
        - Resolve discrepancies <br />
        - Maintain financial accuracy
      </div>
    ),
  },
  {
    img: finance5,
    title: "Profit & Loss Statements",
    desc: (
      <div className="text-left">
        Understand what’s driving profit <br />
        - Compile revenue & costs <br />
        - Analyze net gains/losses <br />
        - Deliver easy-to-read reports
      </div>
    ),
  },
  {
    img: finance6,
    title: "Financial Forecasting",
    desc: (
      <div className="text-left">
        Plan your growth with confidence <br />
        - Predict future cash flow <br />
        - Analyze revenue trends <br />
        - Guide strategic decisions
      </div>
    ),
  },
  {
    img: finance7,
    title: "Payroll Processing",
    desc: (
      <div className="text-left">
        Pay your team on time, every time <br />
        - Calculate wages & taxes <br />
        - Process direct deposits <br />
        - Handle deductions & compliance
      </div>
    ),
  },
  {
    img: finance8,
    title: "Tax Filing",
    desc: (
      <div className="text-left">
        Stay compliant and stress-free <br />
        - Prepare necessary forms <br />
        - File federal/state returns <br />
        - Maximize deductions legally
      </div>
    ),
  },
  {
    img: finance9,
    title: "Budgeting & Financial Planning",
    desc: (
      <div className="text-left">
        Control your spending, grow with purpose <br />
        - Set financial goals <br />
        - Build actionable budgets <br />
        - Monitor plan vs. actuals
      </div>
    ),
  },
];


  return (
    <>
      <Helmet>
        <title>Virtual Assistant Bookkeeping Services | Online Accounting Support</title>
        <meta name="description" content="Streamline your finances with affordable bookkeeping virtual assistants. Global Assist Inc provides reliable online accounting support for businesses of all sizes." />
      </Helmet>
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

        {/* Projects Section
        <section className="px-4 max-w-7xl mx-auto py-1">
          <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#0A0D17] mb-4">
            Projects We Have Completed
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
        </section> */}

      </section>
       <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Smart accounting. Stronger business.
          </span>
        </h2>
      </div>

      {/* Intro text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-52 mb-12">
        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
          Precision-driven finance support for smarter business decisions. We handle the numbers so you can focus on growth. 

        </p>
        <p className="text-gray-600 leading-relaxed">
          From daily bookkeeping and payroll to forecasting and compliance, our financial experts bring clarity, accuracy, and structure to your operations—helping you stay compliant, profitable, and prepared.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => toggleService(idx)}>
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-white p-4 transition-all duration-500 md:opacity-0 md:transform md:-translate-x-full md:group-hover:opacity-100 md:group-hover:translate-x-0 ${
                  activeService === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                }`}
              >
                <p className="text-base text-left">
                  {service.desc}
                </p>
              </div>
            </div>
            <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>

      <div className="mt-24" />
      <HelloSection />
    </>
  );
}