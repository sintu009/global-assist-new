import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import astronaut from '../assets/astronaut.png';
import ReCAPTCHA from "react-google-recaptcha";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const GetInTouch = () => {
  const formRef = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    emailjs.sendForm(
      'service_crrbtt8',
      'template_lkvcoqd',
      formRef.current,
      'JGwllsXmyKjSd6jWG'
    )
    .then(() => {
      alert("Message sent successfully!");
      formRef.current.reset();
      setRecaptchaToken(null); // reset the recaptcha token
    })
    .catch((error) => {
      console.error('Email send error:', error);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section className="min-h-screen bg-[#0A0D17] text-white px-6 py-20 flex flex-col items-center justify-center font-roboto">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-7xl font-bold">
          Get in <span className="text-purple-400">touch</span>
        </h2>
        <p className="mt-3 text-gray-300 text-lg max-w-xl mx-auto font-inter">
          Reach out, and let's create a universe of possibilities together!
        </p>
      </motion.div>

      {/* Form + Image Container */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col lg:flex-row gap-10 bg-[#18182f] p-6 md:p-10 rounded-2xl w-full max-w-6xl"
      >
        {/* Form Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1"
        >
          <h3 className="text-2xl font-semibold mb-2">Let’s connect constellations</h3>
          <p className="text-gray-400 mb-6 text-sm">
            Let’s align our constellations! Reach out and let the magic of collaboration illuminate our skies.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="flex-1 bg-[#1f1f3c] p-3 rounded-md text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="flex-1 bg-[#1f1f3c] p-3 rounded-md text-white placeholder-gray-400"
              />
            </div>

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full bg-[#1f1f3c] p-3 rounded-md text-white placeholder-gray-400"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full bg-[#1f1f3c] p-3 rounded-md text-white placeholder-gray-400"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              required
              className="w-full bg-[#1f1f3c] p-3 rounded-md text-white placeholder-gray-400"
            ></textarea>

            {/* Checkboxes */}
            <div className="space-y-3 text-sm text-white">
              <label className="flex items-start gap-2">
                <input type="checkbox" name="sms_consent" required className="mt-1" />
                <span>
                  I consent to receive SMS notifications, alerts from Global Assist Inc.
                  Message frequency varies. Message & data rates may apply.
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" name="marketing_consent" required className="mt-1" />
                <span>
                  By checking this box I agree to receive occasional marketing messages from Global Assist Inc.
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
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 w-full rounded-md hover:opacity-90 transition"
            >
              Send it to the moon 🚀
            </button>
          </form>
        </motion.div>

        {/* Astronaut Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 relative rounded-xl overflow-hidden"
        >
          <img
            src={astronaut}
            alt="Astronaut"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1f1f3c]/90 via-[#1f1f3c]/60 to-transparent p-4">
            <p className="text-gray-300 text-sm italic leading-relaxed">
              “Two lunar months revealed Earth’s fragile beauty against vast silence,
              transforming my view of our place in the universe.”<br />
              <span className="text-white font-medium">Irinel Traista</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
