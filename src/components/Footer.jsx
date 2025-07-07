import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react"; // ✅ Import Lucide icons


const serviceDropdown = [
  { name: 'ADMINISTRATIVE EXECUTIVE', path: '/administrative-executive' },
  { name: 'MEDICAL VIRTUAL ASSISTANCE', path: '/medical-virtual-assistance' },
  { name: 'VIDEO EDITING', path: '/video-editing' },
  { name: 'ACCOUNTING & BOOKKEEPING', path: '/accounting-bookkeeping' },
  { name: 'SOCIAL MEDIA MANAGEMENT', path: '/social-media-management' },
  { name: 'LEADS GENERATION', path: '/leads-generation' },
  { name: 'DIGITAL MARKETING', path: '/digital-marketing' },
  { name: 'WEBSITE & APP DEVELOPMENT', path: '/website-app-development' },
  { name: 'CUSTOMIZED CRM SOFTWARE', path: '/customized-crm-software' },
  { name: 'BUSINESS DEVELOPMENT', path: '/business-development' },
  { name: 'CALL CENTER SUPPORT', path: '/call-center-support' },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Spectra Planners', path: '/spectra-planners' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("+1 514-700-7280");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-purple-200 px-6 py-10 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 items-start">
        {/* Logo and Social Icons */}
        <div>
          <img src="/assets/logo.png" alt="Global Assist" className="mb-4 w-28" />

          {/* 🔗 Social Media Icons */}
<div className="flex gap-4 mb-6">
  <a
    href="https://www.facebook.com/GlobalAssist123"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    title="Facebook"
  >
    <Facebook className="w-6 h-6 text-[#1877F2] hover:scale-110 hover:text-[#145DA0] transition-transform duration-300" />
  </a>
  <a
    href="https://www.instagram.com/theglobalassist/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    title="Instagram"
  >
    <Instagram className="w-6 h-6 text-[#E4405F] hover:scale-110 hover:text-[#C13584] transition-transform duration-300" />
  </a>
  <a
    href="https://www.linkedin.com/company/theglobalassist/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <Linkedin className="w-6 h-6 text-[#0A66C2] hover:scale-110 hover:text-[#004182] transition-transform duration-300" />
  </a>
</div>

          <h4 className="font-semibold mb-2">NAVIGATION</h4>
          <ul className="space-y-1 text-sm">
            {navLinks.map(({ name, path }) =>
              name === 'Services' ? (
                <li key={name} className="relative">
                  <button
                    className="hover:underline font-medium flex items-center gap-1"
                    onClick={() => setServicesOpen((v) => !v)}
                    onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                    type="button"
                  >
                    Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg z-50">
                      {serviceDropdown.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={name}>
                  <Link
                    to={path}
                    className={`hover:underline ${
                      currentPath === path ? 'text-pink-600 font-medium' : ''
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Others */}
        <div>
          <h4 className="font-semibold mb-2">OTHERS</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:underline">
              Case Studies
              </Link>
            </li>
            <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div className="space-y-4 text-sm">
          <div className="flex gap-2">
            <img src="/assets/flag-canada.png" alt="Canada" className="w-6 h-4" />
            <img src="/assets/flag-usa.png" alt="USA" className="w-6 h-4" />
            <img src="/assets/flag-philippines.png" alt="Philippines" className="w-6 h-4" />
            <img src="/assets/flag-india.png" alt="India" className="w-6 h-4" />
            <img src="/assets/flag-venezuela.png" alt="Venezuela" className="w-6 h-4" />
          </div>
          <div className="flex items-start gap-2">
            <span>📍</span>
            <p>5165 Queen Mary Rd – GR-2 Unit #101 Montreal, QC H3W 1X7</p>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+1 514-700-7280</span>
          </div>
          <button
            onClick={handleCopy}
            className="border border-dashed px-3 py-1 rounded text-xs mt-1"
          >
            {copied ? "Copied!" : "Copy number"}
          </button>
        </div>

        {/* Profile Photo */}
        <div>
          <img
            src="/assets/profile-woman.png"
            alt="Team Member"
            className="rounded-lg w-full max-w-[180px] mx-auto"
          />
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-600">
        © Global Assist 2024
      </div>
    </footer>
  );
}
