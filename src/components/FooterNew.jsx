import React from "react";
import footerbg from "../assets/footerbg.png"; // make sure path is correct
import { FaGoogle, FaVideo, FaMicrosoft } from "react-icons/fa";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ for internal navigation

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
            <div className="flex justify-center lg:justify-start gap-6 text-4xl">
              <FaGoogle className="hover:text-cyan-400 cursor-pointer" />
              <FaVideo className="hover:text-cyan-400 cursor-pointer" />
              <FaMicrosoft className="hover:text-cyan-400 cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Nav */}
      <div className="flex flex-col items-center justify-center py-8 bg-[#10182B]">
        {/* Logo */}
        <img
          src="/assets/logo.png" // replace with your logo asset
          alt="Global Assist Logo"
          className="h-18 mb-8"
        />

        {/* ✅ Nav Links with Home + About */}
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
