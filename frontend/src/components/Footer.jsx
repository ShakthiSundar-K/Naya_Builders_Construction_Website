import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  // For scroll to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className='relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden'>
      {/* Decorative Construction Elements */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-px h-full bg-orange-500'></div>
        <div className='absolute top-0 right-1/4 w-px h-full bg-orange-500'></div>
        <div className='absolute top-1/3 left-0 w-full h-px bg-orange-500'></div>
        <div className='absolute top-2/3 left-0 w-full h-px bg-orange-500'></div>
      </div>

      {/* Top diagonal cut */}
      <div className='relative h-16 bg-gradient-to-r from-gray-800 to-gray-900'>
        <div className='absolute bottom-0 left-0 w-0 h-0 border-l-[100vw] border-l-transparent border-b-[40px] border-b-gray-900'></div>
      </div>

      <div className='container mx-auto px-6 py-12 relative z-10'>
        {/* Main Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Company Info Column */}
          <div className='space-y-6 transform transition-all duration-500 hover:translate-y-[-5px]'>
            {/* Logo Section */}
            <div className='flex flex-col items-start'>
              <div className='flex flex-col mb-4'>
                <span className='text-2xl font-bold tracking-tight'>
                  <span className='bg-gradient-to-r from-[#f74401] to-orange-500 text-transparent bg-clip-text'>
                    NAYA
                  </span>
                  <span className='bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text font-light ml-1'>
                    BUILDERS
                  </span>
                </span>
                <span className='text-xs text-gray-400 font-medium tracking-wider'>
                  BUILD SMART | BUILD RIGHT
                </span>
              </div>
              <img
                src='/logo2.png'
                alt='Naya Builders Logo'
                className='h-16 w-auto mb-4'
              />
            </div>

            <p className='text-gray-300 leading-relaxed'>
              Transforming dreams into concrete realities. With sustainable
              solutions and innovative design, we build not just structures, but
              legacies that stand the test of time.
            </p>

            {/* Social Media Icons */}
            {/* <div className='flex space-x-3'>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f74401] transition-all duration-300'
                aria-label='Facebook'
              >
                <Facebook size={18} />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f74401] transition-all duration-300'
                aria-label='Instagram'
              >
                <Instagram size={18} />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f74401] transition-all duration-300'
                aria-label='LinkedIn'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect x='2' y='9' width='4' height='12'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f74401] transition-all duration-300'
                aria-label='Twitter'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                </svg>
              </a>
            </div> */}
          </div>

          {/* Navigation Links Column */}
          <div className='md:pl-8 transform transition-all duration-500 hover:translate-y-[-5px]'>
            <h4 className='text-xl font-bold mb-6 flex items-center'>
              <span className='inline-block w-8 h-1 bg-[#f74401] mr-3'></span>
              Quick Links
            </h4>
            <ul className='space-y-3'>
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index} className='group'>
                  <a
                    href={link.path}
                    className='flex items-center text-gray-300 hover:text-white transition-colors duration-300'
                  >
                    <span className='inline-block w-0 group-hover:w-4 h-[2px] bg-[#f74401] mr-0 group-hover:mr-2 transition-all duration-300'></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div className='transform transition-all duration-500 hover:translate-y-[-5px]'>
            <h4 className='text-xl font-bold mb-6 flex items-center'>
              <span className='inline-block w-8 h-1 bg-[#f74401] mr-3'></span>
              Our Services
            </h4>
            <ul className='space-y-3'>
              {[
                "Residential Construction",
                "Commercial Projects",
                "Renovation & Remodeling",
                "Interior Design",
                "Sustainable Building",
                "Project Management",
              ].map((service, index) => (
                <li key={index} className='group'>
                  <span className='inline-block w-0 group-hover:w-4 h-[2px] bg-[#f74401] mr-0 group-hover:mr-2 transition-all duration-300'></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className='transform transition-all duration-500 hover:translate-y-[-5px]'>
            <h4 className='text-xl font-bold mb-6 flex items-center'>
              <span className='inline-block w-8 h-1 bg-[#f74401] mr-3'></span>
              Contact Us
            </h4>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <div className='mr-3 mt-1'>
                  <MapPin size={20} className='text-[#f74401]' />
                </div>
                <span className='text-gray-300'>
                  No:9/5, Suresh Nagar, Selaiyur, Chennai-600073
                </span>
              </li>
              <li className='flex items-center'>
                <Mail size={20} className='mr-3 text-[#f74401]' />
                <a
                  href='mailto:nayabuilders1@gmail.com'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  nayabuilders1@gmail.com
                </a>
              </li>
              <li className='flex items-center'>
                <Phone size={20} className='mr-3 text-[#f74401]' />
                <a
                  href='tel:9150324381'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  +91 9150324381
                </a>
              </li>
            </ul>

            <div className='mt-6 pt-6 border-t border-gray-800'>
              <h5 className='text-lg font-semibold mb-4'>Working Hours</h5>
              <div className='flex justify-between text-gray-300'>
                <span>Monday - Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className='flex justify-between text-gray-300'>
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-center md:text-left mb-4 md:mb-0'>
            © {year} <span className='text-white'>Naya Builders</span>. All
            rights reserved.
          </p>
          <div className='flex space-x-4 text-sm text-gray-400'>
            <a href='#' className='hover:text-white transition-colors'>
              Privacy Policy
            </a>
            <span>|</span>
            <a href='#' className='hover:text-white transition-colors'>
              Terms of Service
            </a>
            <span>|</span>
            <span>
              Powered by{" "}
              <a
                href='#'
                className='text-[#f74401] hover:text-white transition-colors'
              >
                Torqsoft Solutions
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div className='relative h-16 bg-black'>
        <div className='absolute top-0 right-0 w-0 h-0 border-r-[100vw] border-r-transparent border-t-[40px] border-t-black'></div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 bg-[#f74401] hover:bg-orange-500 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label='Scroll to top'
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
