import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import bgImage from '../assets/form-bg-new.jpg';
import ReCAPTCHA from "react-google-recaptcha";

const FormPopup = ({ onClose }) => {
  const formRef = useRef();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const [service, setService] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        'service_crrbtt8',
        'template_ft76liq',
        formRef.current,
        'JGwllsXmyKjSd6jWG'
      )
      .then(() => {
        alert('Message sent successfully!');
        formRef.current.reset();
        setEmail('');
        setRecaptchaToken(null);
      })
      .catch((error) => {
        console.error('Email send error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-roboto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Form Modal */}
      <div
  className="relative z-50 w-[90%] max-w-md max-h-[90vh] overflow-y-auto rounded-xl bg-cover bg-center p-6 text-white shadow-xl"
  style={{ backgroundImage: `url(${bgImage})` }}
>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-[#9900F0] text-lg flex items-center justify-center shadow-md hover:bg-gray-100 transition leading-none"
        >
          &times;
        </button>

        {/* Header */}
        <p className="text-sm text-center tracking-widest uppercase">Contact</p>
        <p className="text-center text-2xl font-bold">Tell us your requirement.</p>
        <p className="text-center text-2xl mb-6">We respond within 24 hours</p>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            name="full_name"
            placeholder="Enter your full name"
            required
            className="w-full rounded-md p-3 text-black bg-white focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={handleEmailChange}
            required
            className={`w-full rounded-md p-3 text-black bg-white focus:outline-none ${emailError ? 'border border-red-500' : ''}`}
          />
          {emailError && (
            <p className="text-red-400 text-xs mt-[-12px] mb-[-8px]">{emailError}</p>
          )}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full rounded-md p-3 text-black bg-white focus:outline-none"
          />
          <select
  name="service"
  required
  className="w-full rounded-md p-3 text-black bg-white focus:outline-none"
  onChange={(e) => setService(e.target.value)}
>
  <option value="">What service do you need?</option>
  <option>Administrative Executive</option>
  <option>Medical Virtual Assistance</option>
  <option>Video Editing</option>
  <option>Accounting & Bookkeeping</option>
  <option>Social Media Management</option>
  <option>Leads Generation</option>
  <option>Digital Marketing</option>
  <option>Website & App Development</option>
  <option>Customized CRM Software</option>
  <option>Business Development</option>
  <option>Call Center Support</option>
  <option>Others</option>
</select>

{service === "Others" && (
  <input
    type="text"
    name="custom_service"
    placeholder="Please specify your requirement"
    className="w-full rounded-md p-3 text-black bg-white focus:outline-none"
    required
  />
)}

          <textarea
            name="message"
            placeholder="Requirements detail"
            required
            className="w-full rounded-md p-3 text-black bg-white h-24 resize-none focus:outline-none"
          ></textarea>

          {/* Hidden Date Field */}
          <input type="hidden" name="date" value={new Date().toLocaleString()} />

          {/* Checkboxes */}
          <div className="space-y-2 text-white text-sm">
            <label className="flex items-start gap-2">
              <input type="checkbox" name="sms_consent" required className="mt-1" />
              <span>
                I consent to receive SMS notifications, alerts from Global Assist Inc. Message
                frequency varies. Message & data rates may apply. Text HELP to (438) 408-6799 for
                assistance. Reply STOP to unsubscribe.
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" name="marketing_consent" required className="mt-1" />
              <span>
                By checking this box I agree to receive occasional marketing messages from Global
                Assist Inc.
              </span>
            </label>
          </div>

          {/* reCAPTCHA */}
          <div className="mt-4">
            <ReCAPTCHA
              sitekey="6Le9v3YrAAAAACfks1mJ-wc2kJz6qwSFqMNdIy1A"
              onChange={(token) => setRecaptchaToken(token)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#9900F0] hover:bg-[#7d00c7] transition-colors duration-200 text-white p-3 rounded-md"
          >
            Request advice
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
