import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const DepartmentItem = ({ title, services, initialExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="flex justify-between items-center w-full text-left py-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
        {/* Button Styling with Concentric Circles and Heroicons */}
        <div className="bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center"> {/* Outer purple circle */}
          <div className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center"> {/* Inner dark gray circle */}
            {isExpanded ? (
              <ChevronUpIcon className="h-5 w-5 text-white" /> // White arrow icon
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-white" /> // White arrow icon
            )}
          </div>
        </div>
      </button>
      {isExpanded && (
        <p className="mt-2 text-gray-600 text-sm md:text-base pl-2">
          {services}
        </p>
      )}
    </div>
  );
};

const DepartmentsSection = () => {
  return (
    <section className="font-roboto w-full bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-500 mb-2 uppercase tracking-wide">
          <span className="gradient-shine">Departments </span>
        </h2>
        {/* Main heading: Not bold for the whole line, "We offer a host" is purple */}
        <h3 className="text-3xl md:text-4xl text-gray-900 mb-0 leading-tight"> {/* Removed font-bold from h3 */}
          <span className="text-purple-700">We offer a host</span> of business-critical <br/> services to our clients.
        </h3>

<div className="space-y-0">
  <DepartmentItem
    title="Consulting Firms"
    services="Services we offer - Digital Marketing Support, Live Event Support, Payroll processing, Invoicing Support, File or Document Sorting, Inbox Management, Social Media Management, Calendar Management, B2B Lead Generation."
    initialExpanded={true}
  />

  {/* New Departments Start Here */}
  <DepartmentItem
    title="E-Commerce"
    services="Services we offer - Creating Listings, Customer Service, Email Marketing, Inventory & Bookkeeping, Listing Maintenance, Order Fulfillment, Onboarding Stores, Shop Administration, Social Media Management, Product Sourcing, Logistics Management, Platform PPC Ads."
  />
  <DepartmentItem
    title="Health & Wellness"
    services="Services we offer - Patient Database Management, Inbox Management, Social Media Management, Financial Tracking, Staffing & Recruitment, Data Checking, Receptionist Service, Calendar Management, Administrative Support, Content Creation."
  />
  <DepartmentItem
    title="Investment Firms"
    services="Services we offer - Project Accounting Support, Resolving Discrepancies, Office Administration, Calendar Maintenance, Event Coordination, Document Preparation, Expense Tracking & Reporting, Travel Coordination, File or Document Organization, Inbox Management."
  />
  <DepartmentItem
    title="IT Services"
    services="Services we offer - Customer Support, Payroll Processing, Inbox Management, Monitoring Software Issues, Lead & Prospect Research, Marketing Strategy Support, File or Document Sorting, Invoicing Support, Social Media Management."
  />
  <DepartmentItem
    title="Construction"
    services="Services we offer - Appointment Setting, Field Notes Transcription, Receptionist and Call Routing, Managing Customer Data, Project Warranty Support, Permit Submissions Support, General Research, Payroll Administration, Data Entry, License Renewals, Subcontractor Hiring, Material Ordering."
  />
  <DepartmentItem
    title="Marketing & Sales"
    services="Services we offer - B2B Lead Acquisition, Backlinks & Rankings, In-Person Events, Community Management, Content Creation, Content Strategy Support, Handling CRM Tools, Cross-Channel Posting, Demo Booking."
  />
  <DepartmentItem
    title="Medical Services"
    services="Services we offer - Recruitment Support, Patient Intake, General Coordination, Medical Services Support, Calendar Management, Insurance Checking, Inventory Management, Inbox Management, Practice Customer Success, Billing Support, Payroll Support, Practice Data Entry."
  />
  <DepartmentItem
    title="Professional Coaching"
    services="Services we offer - Data Entry for Coaches, Content Creation, Coordination for In-Person Events, Coordination for Online Events, Scheduling & Calendar Maintenance, Customer Data Management, General Industry Research, Marketing Strategy Support, Payroll Support, Receptionist Service, Administrative Support, Social Media Management."
  />
  <DepartmentItem
    title="Real Estate"
    services="Services we offer - Appointment Scheduling, Bid Management, Designing Collateral, Creating Listing Websites, Lead Generation, Monitoring GMB Listings, Negotiation Support, Office Administration, Project Management, Property Appraisal, Property Sourcing, Setting Up 3D Tours."
  />
  <DepartmentItem
    title="Staffing Companies"
    services="Services we offer - Inbox Management, Payroll Support, Talent Acquisition, Digital Marketing Support, Applicant Screening, HR Admin Tasks, HR Database Management, Recruitment Cycle Support, B2B Lead Generation, Scheduling Interviews, Onboarding Support, Recruitment Research."
  />
  <DepartmentItem
    title="Startups"
    services="Services we offer - Brand Positioning Assistance, Calendar Maintenance, Content Creation, Digital Marketing Support, Invoicing Support, Lead Generation, Simple Graphic Design, Product Development Support, Recruitment Cycle Support, Scheduling Interviews, Market Trends Monitoring, Travel Coordination."
  />
  <DepartmentItem
    title="Talent Agencies"
    services="Services we offer - Travel Coordination, Talent Booking Support, Calendar Management, Inbox Management, Social Media Management, Event Planning, Video Editing, Entertainment Marketing, File or Document Sorting, Strategic Planning Support, Office Administration, Invoicing Support."
  />
</div>

      </div>
    </section>
  );
};

export default DepartmentsSection;