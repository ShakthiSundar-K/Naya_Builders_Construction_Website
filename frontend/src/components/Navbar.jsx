import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle navigation with smooth scroll for same-page links
  const handleNavigation = (e, path, sectionId) => {
    e.preventDefault();

    // If we're already on the page that contains the section
    if (location.pathname === path) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the new path using React Router
      navigate(path);
    }

    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: "Home", path: "/", sectionId: "home" },
    { name: "About", path: "/about", sectionId: "about" },
    { name: "Services", path: "/services", sectionId: "services" },
    { name: "Portfolio", path: "/portfolio", sectionId: "portfolio" },
    { name: "Contact", path: "/contact", sectionId: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2'>
            <span className='text-2xl font-bold text-[#1a1a1a]'>
              Con<span className='text-[#f74401]'>structo</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavigation(e, item.path, item.sectionId)}
                className={`font-medium text-lg transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? "text-[#f74401]"
                    : "text-[#1a1a1a] hover:text-[#f74401]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f74401] transition-all duration-300 group-hover:w-full ${
                    isActive(item.path) ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className='flex items-center space-x-4'>
            <Link
              to='/contact'
              className='hidden md:block bg-[#f74401] hover:bg-[#e03a00] text-white font-semibold px-6 py-2.5 rounded transition-all duration-300 hover:shadow-lg hover:scale-105'
            >
              Talk to our Experts
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='lg:hidden focus:outline-none text-[#1a1a1a] hover:text-[#f74401] transition-colors'
            >
              {isMenuOpen ? (
                <svg
                  className='w-8 h-8'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  className='w-8 h-8'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </button>

            {/* Mobile CTA Small Button */}
            <Link
              to='/contact'
              className='md:hidden bg-[#f74401] text-white p-2 rounded-full hover:bg-[#e03a00] transition-all duration-300 hover:shadow-md'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 px-4 pt-2 pb-6 bg-white shadow-xl transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "top-full opacity-100"
              : "-top-96 opacity-0 pointer-events-none"
          }`}
        >
          <div className='flex flex-col space-y-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavigation(e, item.path, item.sectionId)}
                className={`py-2 px-4 font-medium text-lg transition-all duration-200 border-l-4 ${
                  isActive(item.path)
                    ? "border-[#f74401] text-[#f74401] bg-orange-50"
                    : "border-transparent text-[#1a1a1a] hover:text-[#f74401] hover:bg-orange-50 hover:border-[#f74401]/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className='pt-2'>
              <Link
                to='/contact'
                onClick={() => setIsMenuOpen(false)}
                className='block w-full bg-[#f74401] text-center text-white font-semibold py-3 rounded-md hover:bg-[#e03a00] transition-colors duration-300'
              >
                Talk to our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
