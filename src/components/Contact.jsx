import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import contactImage from "../assets/contact-image.png";
import formBgImage from "../assets/form-bg-new2.jpg";

const Contact = () => {
  const formRef = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        "service_crrbtt8",      // ✅ EmailJS Service ID
        "template_ft76liq",     // ✅ EmailJS Template ID
        formRef.current,
        "JGwllsXmyKjSd6jWG"     // ✅ Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
        setRecaptchaToken(null);
        setSelectedService("");
        setCustomService("");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="font-roboto flex flex-col md:flex-row w-full md:min-h-screen">
      {/* LEFT */}
      <div className="w-full bg-[#060b1b] text-white flex flex-col items-start relative overflow-hidden pt-12 pb-8 px-6 md:p-10 md:w-7/12 md:justify-center">
        <img
          src={contactImage}
          alt="Contact Visual"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 hidden md:block"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-0 hidden md:block" />

        <div className="relative z-10 w-full max-w-md md:max-w-none md:-mt-80 md:ml-20">
          <p className="text-lg tracking-widest uppercase mb-4 md:text-xl">CONTACT</p>
          <h2 className="text-4xl font-bold mb-4 leading-tight md:text-5xl">
            Tell us your requirement.
          </h2>
          <p className="text-4xl text-gray-200 md:text-3xl mb-0 md:mb-0">
            We respond within 24 hours
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="w-full relative px-6 pt-10 pb-12 flex flex-col items-start justify-start md:items-center md:justify-center md:w-5/12 md:p-10 md:bg-transparent"
        style={{
          background: "linear-gradient(252.54deg, #6A10E1 -9.68%, #081420 54.48%)",
        }}
      >
        <div
          className="absolute inset-0 z-0 md:hidden"
          style={{
            backgroundImage: `url(${formBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
        <div className="absolute inset-0 z-0 hidden md:block bg-[linear-gradient(to_right,_rgba(8,20,32,1),_rgba(106,16,225,1))]" />

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full max-w-md space-y-4 relative z-10 mt-0 bg-transparent font-roboto"
        >
          <input
            type="text"
            name="full_name"
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your e-mail"
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Service Dropdown */}
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full rounded-md p-3 text-black bg-white focus:outline-none"
            required
          >
            <option value="">What service do you need?</option>
            <option value="Administrative Executive">Administrative Executive</option>
            <option value="Medical Virtual Assistance">Medical Virtual Assistance</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
            <option value="Social Media Management">Social Media Management</option>
            <option value="Leads Generation">Leads Generation</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Website & App Development">Website & App Development</option>
            <option value="Customized CRM Software">Customized CRM Software</option>
            <option value="Business Development">Business Development</option>
            <option value="Call Center Support">Call Center Support</option>
            <option value="Others">Others</option>
          </select>

          {/* Conditional Input for 'Others' */}
          {selectedService === "Others" ? (
            <input
              type="text"
              name="service"
              placeholder="Please specify your service"
              value={customService}
              onChange={(e) => setCustomService(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          ) : (
            <input type="hidden" name="service" value={selectedService} />
          )}

          <textarea
            name="message"
            rows="4"
            placeholder="Requirements detail"
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <input type="hidden" name="date" value={new Date().toLocaleString()} />

          {/* Checkboxes */}
          <div className="space-y-4 text-white text-sm">
            <label className="flex items-start gap-2">
              <input type="checkbox" name="sms_consent" className="mt-1" required />
              <span>
                I Consent to Receive SMS Notifications, Alerts from Global Assist Inc. Message
                frequency varies. Message & data rates may apply. Text HELP to (438) 408-6799
                for assistance. You can reply STOP to unsubscribe at any time.
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" name="marketing_consent" className="mt-1" required />
              <span>
                By checking this box I agree to receive occasional marketing messages from
                Global Assist Inc.
              </span>
            </label>

            {/* reCAPTCHA */}
            <ReCAPTCHA
              sitekey="6Le9v3YrAAAAACfks1mJ-wc2kJz6qwSFqMNdIy1A"
              onChange={(token) => setRecaptchaToken(token)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 hover:bg-purple-700 text-white py-3 font-semibold transition text-lg md:text-base"
          >
            Request advice
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
