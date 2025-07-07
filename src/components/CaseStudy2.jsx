import React from "react";
import GetInTouch from "./GetInTouch";

const CaseStudy2 = () => {
  return (
    <section className="bg-white text-[#0A0D17] font-sans">
      {/* Hero Section */}
      <div className="px-6 md:px-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="inline-block bg-[#f1e9f8] text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#553982] mb-4">
              How Our Virtual Assistant Helped an Insurance Agent<br />
              <span className="text-black">Scale, Simplify, and Succeed</span>
            </h1>
            <p className="text-gray-700 text-sm mb-2"><strong>Industry:</strong> Insurance (Home & Auto)</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Client Type:</strong> Independent Insurance Agent</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Location:</strong> United States</p>
            <p className="text-gray-700 text-sm"><strong>Previous Setup:</strong> Solo operator handling all tasks manually</p>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            The Problem: <span className="text-purple-700">Overwhelmed, Overworked, and Under-supported</span>
          </h2>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 text-sm">
            <li>Manual Workload Overload: handling calls, quotes, data, client follow-ups, and reporting alone</li>
            <li>Limited Time = Lost Leads: many inquiries went unresponded; slow quote generation</li>
            <li>Inconsistent CRM Usage: had tools but didn’t have time/skills to use them fully</li>
            <li>No Lead Follow-Up System: leads slipped through with no nurturing process</li>
            <li>Stress & Burnout: no support system, leading to missed opportunities</li>
          </ul>
        </div>
      </div>

      {/* Our Solution Section */}
      <div className="py-12 px-6 md:px-20 bg-purple-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-purple-700">
            Our Solution: <span className="text-black">A Dedicated VA to Streamline, Support, and Scale</span>
          </h2>

          {/* Phase Breakdown */}
          <div className="space-y-10 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Phase 1: Understanding the Business</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Discovery call to assess workflow, target market, CRM tools</li>
                <li>Audited tools: Formost Signature, Travelers, AAA, Progressive, National General, spreadsheets</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Phase 2: CRM Optimization</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>VA took over CRM tasks: lead entry, pipeline updates, follow-ups, scheduling</li>
                <li>Organized policies, quotes, and workflows across platforms</li>
                <li>Ensured every lead was responded to and tracked</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Phase 3: Daily Administrative Support</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Managed appointment scheduling and inbox</li>
                <li>Sent quotes/follow-ups immediately after inquiries</li>
                <li>Maintained updated lead sheets and conversion tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Phase 4: Lead Nurturing and Customer Retention</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Monthly check-ins, thank-you messages, referral campaigns</li>
                <li>Simple automations for renewal reminders</li>
                <li>Past client database organized for upsells/cross-sales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Results: <span className="text-purple-700">Tangible Growth in Just 90 Days</span></h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-300">
              <thead className="bg-purple-100">
                <tr>
                  <th className="px-4 py-2 font-medium border">METRICS</th>
                  <th className="px-4 py-2 font-medium border">BEFORE ONBOARDING</th>
                  <th className="px-4 py-2 font-medium border">AFTER 90 DAYS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Quotes Sent Weekly</td>
                  <td className="border px-4 py-2">~8–10</td>
                  <td className="border px-4 py-2">30–35</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Response Time</td>
                  <td className="border px-4 py-2">12–24 hours</td>
                  <td className="border px-4 py-2">Under 1 hour</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">New Clients per Month</td>
                  <td className="border px-4 py-2">2–4</td>
                  <td className="border px-4 py-2">10–12</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CRM Utilization</td>
                  <td className="border px-4 py-2">Inconsistent</td>
                  <td className="border px-4 py-2">Fully Streamlined</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Time Spent on Admin</td>
                  <td className="border px-4 py-2">6+ hrs/day</td>
                  <td className="border px-4 py-2">&lt;1 hr/day</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Client Satisfaction</td>
                  <td className="border px-4 py-2">Low due to delays</td>
                  <td className="border px-4 py-2">High due to responsiveness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Client Feedback */}
      <div className="bg-purple-50 py-12 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="italic text-gray-700 text-lg mb-4">
            "I didn’t realize how much time I was losing every day until I got help. The VA has been a game-changer. I finally have time to talk to clients and grow my business, not just run in circles. I’m closing more policies now with less stress—it's the best investment I’ve made."
          </blockquote>
          <cite className="block text-sm text-gray-600">— Independent Insurance Agent, U.S.</cite>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-12 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-purple-700">Timeline</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>Onboarding & Workflow Setup: 1st week</li>
            <li>CRM Training & Implementation: 2nd–3rd week</li>
            <li>Full Operational Efficiency: By the 4th week</li>
            <li>Client Results Peak: Within 90 days</li>
          </ul>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="py-12 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-purple-700">Key Takeaways</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
            <li>A dedicated VA drastically improves responsiveness and efficiency in client-heavy industries like insurance.</li>
            <li>With proper CRM handling and lead follow-up, conversions can more than double.</li>
            <li>Even solo professionals can scale like an agency—with the right virtual support.</li>
          </ul>
        </div>
      </div>

      <GetInTouch />
    </section>
  );
};

export default CaseStudy2;
