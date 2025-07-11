import React, { useState } from "react";
import GetInTouch from "./GetInTouch";

const faqData = [
  {
    question: "What is a virtual assistant?",
    answer:
      "Designed to aid users in different tasks, They are the people you hire to handle administrative, technical, or creative tasks for you, whether you're an individual or a company.",
  },
  {
    question: "What hours will my assistant work?",
    answer:
      "It's all up to you. The scope of responsibilities of a Virtual Assistant knows no bounds, as they serve clients across the globe and are able to adjust working hours according to any time zone.",
  },
  {
    question: "How can a virtual assistant help my business?",
    answer:
      "Virtual assistants are meant to make your workplace experience easy by doing things like administrative tasks, customer support, research, among others as well.",
  },
  {
    question: "What are the payment arrangements and terms for hiring a virtual assistant?",
    answer:
      "There are different ways in which virtual assistants are paid such as hourly rates or monthly retainers. It's based on the work to be done.",
  },
  {
    question: "Are there any limitations to the tasks a virtual assistant can perform?",
    answer:
      "Within their field and while considering their availability virtual agents have confined capabilities, nevertheless, their application capacity is diversified.",
  },
  {
    question: "How do you approach target audience identification and segmentation in marketing strategies?",
    answer:
      "The process where target audience is identified covers analyzing data that is demographic, psycho graphic traits together with consumer behavior so as to find out the most reactive segments of a market where marketers should concentrate their promotion campaigns towards.",
  },
  {
    question: "How do you tailor marketing strategies to align with the unique goals and challenges of my business?",
    answer:
      "By carrying out a comprehensive research on the customer's sector, market segment, competition and unique selling proposition (UsP), marketing specialists customize strategies. It is for this reason that these strategies are designed in such a way that they meet particular company objectives and challenges.",
  },
  {
    question: "Where is your office?",
    answer:
      "Our office is located in Canada. We are situated in 15165 Queen Mary Rd - GR-2 Unit #101 Montreal, QC H3W 1X7l. if you need specific directions or further information on how to reach us, feel free to contact +1 514-700-7280 let me know. Our other offices are in the USA, Philippines, India and Venezuela. We also hire local Canadians.",
  },
  {
    question: "Are virtual assistants secure and trustworthy?",
    answer:
      "A lot of digital helpers have stringent security measures and confidentiality treaties but making certain you screen prospective doers and build confidence is crucial.",
  },
  {
    question: "How much does it cost to hire a virtual assistant?",
    answer:
      "The cost of hiring a VA will vary based on a number of factors including experience, location and nature of work at hand.",
  },
  {
    question: "Are virtual assistants available for specific tasks or can they handle a variety of responsibilities?",
    answer:
      "Virtual assistants can be active in handling any tasks one might need help with. Some of these could be planning and scheduling upcoming events or meetings (e.g., appointments), managing emails, looking after social profiles on Facebook or Twitter (via posts) as well as typing information into spreadsheets or databases (data entry).",
  },
  {
    question: "How quickly can I expect a response or task completion from a virtual assistant?",
    answer:
      "Prompt response and task is completed quickly, subject to level of work and urgency.",
  },
  {
    question: "Can you provide examples of successful marketing campaigns you've implemented for similar businesses?",
    answer:
      "There are various examples of successful social media campaigns, email marketing campaigns, or SEO strategies that helped in turning around a business.",
  },
  {
    question: "What tools and technologies do you utilize to execute marketing campaigns effectively?",
    answer:
      "To run successful campaigns, marketing specialists use tools such as analytics platforms (Google Analytics, Facebook Insights), email marketing software (Mailchimp, Constant Contact), social media management tools (Hootsuite, Buffer), and advertising platforms (Google Ads, Facebook Ads Manager).",
  },
  {
    question: "Can you assist with content creation and copywriting for marketing materials?",
    answer:
      "People experts in marketing commonly deliver services of content creation and this often involves composing an engaging copy intended for webpages, blogs, articles on social media platforms, newsletters which are sent electronically as well as adverts.",
  },
  {
    question: "How do you ensure the confidentiality of our data?",
    answer:
      "We follow strict confidentiality protocols. All our virtual assistants sign NDAs, and we use secure platforms to manage communication and file sharing. Your data privacy is our top priority.",
  },
  {
    question: "How soon can we start?",
    answer:
      "We can begin working with you the same day you reach out. Just give us a call — we’ll schedule a meeting with your virtual assistant or project manager. Once the contract is signed, we can get started immediately.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative min-h-[80vh]">
        <div className="relative min-h-[80vh] flex items-center justify-center text-center text-black px-4">
          {/* Background Video */}
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

          {/* Text Overlay */}
          <div className="relative z-10 space-y-4">
            <p className="uppercase text-sm tracking-widest text-gray-700">
              Have Questions?
            </p>
            <h1 className="text-3xl md:text-5xl font-roboto font-semibold leading-snug text-black">
              Frequently Asked <br className="hidden md:block" /> Questions
            </h1>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6 md:px-20 font-['Roboto'] text-[#0A0D17]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-roboto leading-tight">
              Have any questions? <br />
              <span className="text-purple-700">We’ve got answers.</span>
            </h2>
            <p className="text-base text-gray-600">
              Everything you need to know about our services and how we can help your business.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-5 shadow-sm"
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="text-2xl text-[#0A0D17] font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-[300px] mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
