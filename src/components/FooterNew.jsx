import React from "react";
import footerbg from "../assets/footerbg.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiZoom } from "react-icons/si";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FooterNew = () => {
  return (
    <footer className="w-full bg-[#10182B] text-white">
      {/* Background Image */}
      <div className="w-full">
        <img
          src={footerbg}
          alt="Footer Visual"
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-16 py-16 text-center lg:text-left">
        {/* Left Text */}
        <motion.h1
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl md:text-8xl font-bold leading-snug"
        >
          <span className="gradient-shine">Strategy,</span>
          <br />
          <span className="gradient-shine">Structure,</span>
          <br />
          <span className="gradient-shine">Support.</span>
        </motion.h1>

        {/* Right Text */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-xl w-full"
        >
          <h2 className="text-2xl md:text-5xl mb-5">
            Let&apos;s Build Something Great Together!
          </h2>
          <p className="text-gray-300 mb-6">
            Our pros are primed, vetted & ready to rocket-fuel every role and
            function of your organization.
          </p>

          {/* Divider line */}
          <hr className="border-gray-600 mb-6" />

          {/* Schedule meeting section */}
          <div>
            <p className="mb-4 text-lg">Schedule a meet with us.</p>
            <div className="flex justify-center lg:justify-start gap-6 text-5xl">
              {/* Google Calendar */}
              <a
                href="https://calendar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                {/* --- THIS IS THE UPDATED GOOGLE CALENDAR ICON --- */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12"
                >
                  <path fill="#34A853" d="M12 22a2 2 0 0 1-2-2v-8h4v8a2 2 0 0 1-2 2z" />
                  <path fill="#4285F4" d="M12 2H4a2 2 0 0 0-2 2v8h10z" />
                  <path fill="#EA4335" d="M12 2h8a2 2 0 0 1 2 2v8h-10z" />
                  <path fill="#FBBC05" d="M12 22h8a2 2 0 0 0 2-2v-8h-10z" />
                  <text x="12" y="14"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontWeight="bold"
                  >
                    31
                  </text>
                </svg>
              </a>

              {/* Calendly */}
              <a
                href="https://calendly.com/mina-36"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-12 h-12"
                >
                  <rect width="256" height="256" rx="60" fill="#0069FF" />
                  <path
                    fill="#FFF"
                    d="M172 188a64 64 0 1 1 0-120l-14 22a40 40 0 1 0 0 76z"
                  />
                </svg>
              </a>

              {/* Zoom */}
              <a
                href="https://us05web.zoom.us/j/5587388488?pwd=akhtUWh4VEdDaHJpZGhtQm9OYkdIUT09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <SiZoom className="text-[#2D8CFF] w-12 h-12" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Nav */}
      <div className="flex flex-col items-center justify-center py-8 bg-[#10182B]">
        {/* Logo */}
        <img
          src="/assets/logo.png"
          alt="Global Assist Logo"
          className="h-18 mb-8"
        />

        {/* Nav Links */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 text-base font-medium mb-6">
            <li>
              <Link to="/" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-cyan-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-cyan-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-cyan-400">
                Case Studies
              </Link>
            </li>
            <li>
              <a href="/terms-conditions" className="hover:text-cyan-400">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/GlobalAssist123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-10 h-10 text-[#1877F2] hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.instagram.com/theglobalassist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-10 h-10 text-[#E4405F] hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/company/theglobalassist/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-10 h-10 text-[#0A66C2] hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 shadow-sm py-6 text-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Left - slogan */}
          <div className="mb-2 md:mb-0">
            <span className="text-cyan-500 font-semibold">Real People</span>,{" "}
            <span className="text-pink-600 font-semibold">Real Help</span>,{" "}
            <span className="text-cyan-500 font-semibold">Real Fast</span>
          </div>

          {/* Center - copyright */}
          <div className="mb-2 md:mb-0 text-center">
            © 2025 <span className="font-semibold">Global Assist®</span>. All
            Rights Reserved.
          </div>

          {/* Right - contact info */}
          <div className="flex flex-col md:items-end text-center md:text-right">
            <div className="flex gap-4 justify-center md:justify-end">
              <span className="text-pink-600">📞</span>
              <span>+1 514-700-7280</span>
              <span>866-450-1441</span>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-end">
              <span className="text-cyan-500">✉</span>
              <a
                href="mailto:info@theglobalassist.com"
                className="hover:underline"
              >
                info@theglobalassist.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;