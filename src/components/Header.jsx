import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Briefcase, LayoutGrid, Headset, Globe, Lightbulb, Code, PiggyBank, BarChart2 } from 'lucide-react';

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

const servicesByCategory = {
  'Administrative Tasks': [
    { name: 'ADMINISTRATIVE EXECUTIVE SUPPPORT', path: '/administrative-executive' },
    { name: 'MEDICAL VIRTUAL ASSISTANCE', path: '/medical-virtual-assistance' },
  ],
  'Digital Marketing Services': [
    { name: 'SOCIAL MEDIA MANAGEMENT', path: '/social-media-management' },
    { name: 'LEADS GENERATION', path: '/leads-generation' },
    { name: 'DIGITAL MARKETING', path: '/digital-marketing' },
  ],
  'Customer Support & Experience': [
    { name: 'CALL CENTER SUPPORT', path: '/call-center-support' },
  ],
  'Business Growth & Strategy': [
    { name: 'BUSINESS DEVELOPMENT', path: '/business-development' },
  ],
  'GA Creatives Labs': [
    { name: 'VIDEO EDITING', path: '/video-editing' },
  ],
  'Software & App Development': [
    { name: 'WEBSITE & APP DEVELOPMENT', path: '/website-app-development' },
    { name: 'CUSTOMIZED CRM SOFTWARE', path: '/customized-crm-software' },
  ],
  'Finance & Accounting': [
    { name: 'ACCOUNTING & BOOKKEEPING', path: '/accounting-bookkeeping' },
  ],
};

const categoryIcons = {
  'Administrative Tasks': <Briefcase />,
  'Digital Marketing Services': <LayoutGrid />,
  'Customer Support & Experience': <Headset />,
  'Business Growth & Strategy': <BarChart2 />,
  'GA Creatives Labs': <Lightbulb />,
  'Software & App Development': <Code />,
  'Finance & Accounting': <PiggyBank />,
};

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
              <div
                className="relative"
                key={name}
                ref={dropdownRef}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`font-medium transition hover:text-purple-300 flex items-center gap-1 ${serviceDropdown.some(s => currentPath.startsWith(s.path)) ? 'text-purple-700' : ''}`}
                  type="button"
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 p-8 w-[900px] max-w-7xl bg-white border border-gray-200 rounded-2xl shadow-xl z-50">
                    <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                      {Object.entries(servicesByCategory).map(([category, services]) => (
                        <div key={category} className="p-4 transition hover:bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-2 text-purple-700 mb-2">
                            {categoryIcons[category]}
                            <h3 className="font-semibold text-sm">{category}</h3>
                          </div>
                          <ul className="space-y-1">
                            {services.map((service) => (
                              <li key={service.name}>
                                <Link
                                  to={service.path}
                                  className="block text-gray-600 hover:text-purple-700 transition font-normal"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
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
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <a
              href="https://heyzine.com/flip-book/49ed8d081d.html"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 rounded-full text-sm bg-white text-gray-800 border border-transparent group-hover:border-transparent transition"
            >
              Flip Book
            </a>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <a
              href="https://calendly.com/mina-36"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 rounded-full text-sm bg-white text-gray-800 border border-transparent group-hover:border-transparent transition"
            >
              Book a Call
            </a>
          </div>
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
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <a
                href="https://heyzine.com/flip-book/49ed8d081d.html"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full block text-center px-5 py-2 rounded-full text-sm bg-white text-gray-800 border border-transparent group-hover:border-transparent transition"
              >
                Flip Book
              </a>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <a
                href="https://calendly.com/mina-36"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full block text-center px-5 py-2 rounded-full text-sm bg-white text-gray-800 border border-transparent group-hover:border-transparent transition"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}