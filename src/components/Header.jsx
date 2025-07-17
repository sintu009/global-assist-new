import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const serviceDropdown = [
  { name: 'ADMINISTRATIVE EXECUTIVE SUPPPORT', path: '/administrative-executive' },
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

export default function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile
  const location = useLocation();
  const currentPath = location.pathname;
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Spectra Planners', path: '/spectra-planners' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="Global Assist Logo"
              className="h-12 md:h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700" aria-label="Main navigation">
          {navLinks.map(({ name, path }) =>
            name === 'FAQ' ? (
              <Link
                key={name}
                to={path}
                className={`font-medium transition hover:text-purple-300 ${currentPath === path ? 'text-purple-700' : ''}`}
              >
                {name}
              </Link>
            ) : name === 'Services' ? (
              <div className="relative" key={name} ref={dropdownRef}>
                <button
                  className={`font-medium transition hover:text-purple-300 flex items-center gap-1 ${serviceDropdown.some(s => currentPath.startsWith(s.path)) ? 'text-purple-700' : ''}`}
                  onClick={() => setServicesOpen((v) => !v)}
                  type="button"
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
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
              </div>
            ) : (
              <Link
                key={name}
                to={path}
                className={`font-medium transition hover:text-purple-300 ${currentPath === path ? 'text-purple-700' : ''}`}
              >
                {name}
              </Link>
            )
          )}
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex gap-3">
          <a
            href="https://heyzine.com/flip-book/49ed8d081d.html"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#6A10E1] text-purple-700 px-5 py-2 rounded-full text-sm hover:bg-purple-300 transition"
          >
            Flip Book
          </a>
          <a
            href="https://calendly.com/mina-36"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#6A10E1] text-purple-700 px-5 py-2 rounded-full text-sm hover:bg-purple-300 transition text-center"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm text-gray-700">
          {navLinks.map(({ name, path }) =>
            name === 'FAQ' ? (
              <Link
                key={name}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block transition hover:text-purple-600 ${currentPath === path ? 'text-purple-600 font-medium' : ''}`}
              >
                {name}
              </Link>
            ) : name === 'Services' ? (
              <div className="relative" key={name}>
                <button
                  className={`w-full text-left font-medium transition hover:text-purple-300 flex items-center gap-1 ${serviceDropdown.some(s => currentPath.startsWith(s.path)) ? 'text-purple-700' : ''}`}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  type="button"
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="w-full bg-white border border-gray-200 rounded shadow-lg z-50 mt-1">
                    {serviceDropdown.map((service) => (
                      <button
                        key={service.name}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                        onClick={() => {
                          setMobileServicesOpen(false);
                          setMobileMenuOpen(false);
                          window.scrollTo(0, 0);
                          navigate(service.path);
                        }}
                        type="button"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={name}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block transition hover:text-purple-600 ${currentPath === path ? 'text-purple-600 font-medium' : ''}`}
              >
                {name}
              </Link>
            )
          )}

          {/* CTA Buttons - Mobile */}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://heyzine.com/flip-book/49ed8d081d.html"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#6A10E1] text-purple-700 px-5 py-2 rounded-full text-sm text-center hover:bg-purple-300 transition"
            >
              Flip Book
            </a>
            <a
              href="https://calendly.com/mina-36"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#6A10E1] text-purple-700 px-5 py-2 rounded-full text-sm hover:bg-purple-300 transition text-center"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
