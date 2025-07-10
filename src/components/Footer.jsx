import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";


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
  const dropdownRef = useRef(null);

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
    <footer className="bg-purple-400 px-5 pt-10 pb-6 border-t">
      <div className="max-w-screen-2xl w-full mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Column 1: Logo & Navigation */}
        <div>
          <img src="/assets/logo.png" alt="Global Assist" className="mb-4 w-28" />

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a href="https://www.facebook.com/GlobalAssist123" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-[#1877F2] hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://www.instagram.com/theglobalassist/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-[#E4405F] hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/theglobalassist/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-[#0A66C2] hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <h4 className="font-semibold mb-2">NAVIGATION</h4>
          <ul className="space-y-1 text-sm">
            {navLinks.map(({ name, path }) =>
              name === 'Services' ? (
                <li key={name} className="relative" ref={dropdownRef}>
                  <button
                    className="hover:underline font-medium flex items-center gap-1"
                    onClick={() => setServicesOpen((v) => !v)}
                    onBlur={(e) => {
                      if (!dropdownRef.current?.contains(e.relatedTarget)) {
                        setTimeout(() => setServicesOpen(false), 100);
                      }
                    }}
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
                </li>
              ) : (
                <li key={name}>
                  <Link
                    to={path}
                    className={`hover:underline ${currentPath === path ? 'text-purple-600 font-medium' : ''}`}
                  >
                    {name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 2: Others */}
        <div className="lg:ml-[-200px]">
          <h4 className="font-semibold mb-2">OTHERS</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/case-studies" className="hover:underline">Case Studies</Link></li>
            <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
            <li className="mt-14 font-bold flex items-center gap-2">
  <Phone className="w-4 h-4 text-black" />
  +1 514-700-7280
</li>
<li className="mt-4 font-bold flex items-center gap-2">
  <Phone className="w-4 h-4 text-black" />
  866-450-1441 (Toll Free)
</li>

            <li className="mt-4 font-bold flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@theglobalassist.com
            </li>
          </ul>
        </div>

        {/* Column 3: Flag Grid & Contact */}
        <div className="lg:ml-[-400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-[14px] text-black font-medium leading-relaxed text-center">
            <div>
              <img src="/assets/flag-canada.png" alt="Canada" className="w-18 h-12 mx-auto mb-2" />
              <p className="max-w-[180px] mx-auto">
                5165 Queen Mary Rd<br />
                GR-2 Unit #101<br />
                Montreal, QC<br />
                H3W 1X7
              </p>
            </div>
            <div>
              <img src="/assets/flag-usa.png" alt="USA" className="w-18 h-12 mx-auto mb-2" />
              <p className="max-w-[180px] mx-auto">
                1309 Coffen Avenue<br />
                STE 1200<br />
                Sheridan, Wyoming<br />
                82801
              </p>
            </div>
            <div>
              <img src="/assets/flag-philippines.png" alt="Philippines" className="w-18 h-12 mx-auto mb-2" />
              <p className="max-w-[180px] mx-auto">
                BF Homes<br />
                Manila<br />
                1718
              </p>
            </div>
            <div>
              <img src="/assets/flag-venezuela.png" alt="Venezuela" className="w-18 h-12 mx-auto mb-2" />
              <p className="max-w-[180px] mx-auto">
                Las Gaviotas Bldg<br />
                Milagro St.<br />
                Puerto La Cruz<br />
                6023, Venezuela
              </p>
            </div>
            <div>
              <img src="/assets/flag-india.png" alt="India" className="w-18 h-12 mx-auto mb-2" />
              <p className="max-w-[180px] mx-auto">
                Block B<br />
                Sector 58<br />
                Noida, Uttar Pradesh<br />
                201301
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 text-gray-600">
        © Global Assist 2024
      </div>
    </footer>
  );
}
