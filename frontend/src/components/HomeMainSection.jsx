import React, { useState, useEffect, useRef } from "react";

// Create placeholder images
const placeholders = [
  "/section-1.jpg",
  "/section-2.jpg",
  "/section-3.jpg",
  "/section-4.png",
  "/section-5.jpg",
  "/section-6.jpg",
  "/section-7.jpg",
];

// Main section data
const sections = [
  {
    heading:
      "Crafting Your Perfect Home, Not Just a Space, but a Better Way of Living",
    content:
      "Naya Builders focuses on redefining homes with modern, sustainable designs and quality materials, ensuring your home aligns with your lifestyle.",
  },
  {
    heading:
      "Turning Dreams Into Reality – Seamless, Stress-Free Home Building Starts Here",
    content:
      "We make building your dream home effortless with turn-key construction, delivering projects on time and under one roof.",
  },
  {
    heading: "Building Homes for a Healthier, Happier Lifestyle",
    content:
      "We adhere to over 15 quality checks to ensure your home promotes well-being, with a 10-year guarantee for lasting comfort.",
  },
  {
    heading: "Maximizing Comfort and Efficiency for a Sustainable Future",
    content:
      "We design homes with energy-saving features, eco-friendly materials, and comfort-focused amenities.",
  },
  {
    heading: "Your Home, Your Way – Total Control Over Every Detail",
    content:
      "Naya Builders gives you complete control over your home's design, with regular updates and virtual meetings to ensure satisfaction.",
  },
  {
    heading: "All-in-One Service for Your Home – No Need to Look Elsewhere",
    content:
      "We offer comprehensive solutions from interiors to landscaping, handling all your construction needs with seamless coordination.",
  },
  {
    heading:
      "Save More, Get More – Achieve Your Dream Home with Our Turnkey Solution",
    content:
      "Naya Builders saves you up to 20% by managing everything, eliminating the need for separate contractors or consultants.",
  },
];

// Section component with intersection observer for animations
const Section = ({ index, heading, content, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isEven = index % 2 === 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full min-h-screen flex items-center py-16 lg:py-0 transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isEven ? "relative" : ""}`}
      style={
        isEven
          ? {
              backgroundImage: "url('/main-section-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      {isEven && (
        <div className='absolute inset-0 bg-black bg-opacity-30'></div>
      )}
      <div
        className={`container mx-auto px-6 lg:px-12 flex flex-col ${
          isEven ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-10 lg:gap-16 relative z-10`}
      >
        <div
          className={`w-full lg:w-1/2 flex flex-col justify-center transform transition-transform duration-1000 ${
            isVisible
              ? "translate-x-0"
              : isEven
              ? "translate-x-16"
              : "-translate-x-16"
          } ${isEven ? "text-white" : "text-gray-900"}`}
        >
          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight ${
              isEven ? "drop-shadow-lg" : ""
            }`}
          >
            {heading}
          </h2>
          <p
            className={`text-lg lg:text-xl ${
              isEven ? "text-gray-100" : "text-gray-700"
            } max-w-lg ${isEven ? "drop-shadow-md" : ""}`}
          >
            {content}
          </p>
          <div className='mt-8'>
            <button
              className={`px-6 py-3 bg-[#f74401] text-white rounded-md hover:bg-[#e03b00] transition-colors duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-1`}
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          className={`w-full lg:w-1/2 h-64 md:h-80 lg:h-96 relative overflow-hidden rounded-2xl transform transition-transform duration-1000 ${
            isVisible
              ? "translate-x-0"
              : isEven
              ? "-translate-x-16"
              : "translate-x-16"
          }`}
        >
          <div className='absolute inset-0 bg-black bg-opacity-20 z-10'></div>
          <img
            src={image}
            alt={`Section ${index + 1}`}
            className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
              isEven ? "shadow-2xl" : ""
            }`}
          />
          {isEven ? (
            <div className='absolute inset-0 border-2 border-white border-opacity-30 m-4 rounded-xl pointer-events-none'></div>
          ) : (
            <div className='absolute inset-0 shadow-inner'></div>
          )}
        </div>
      </div>

      {/* Additional decorative elements for even sections */}
      {isEven && (
        <>
          <div className='absolute top-16 left-16 w-24 h-24 border-2 border-white border-opacity-20 rounded-full'></div>
          <div className='absolute bottom-16 right-16 w-32 h-32 border-2 border-white border-opacity-20 rounded-full'></div>
        </>
      )}
    </div>
  );
};

// Parallax background component
const ParallaxBackground = () => {
  return (
    <div className='fixed inset-0 -z-10'>
      <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-70'></div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <pattern
              id='grid'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 40 0 L 0 0 0 40'
                fill='none'
                stroke='#f0f0f0'
                strokeWidth='1'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid)' />
        </svg>
      </div>
    </div>
  );
};

// Scroll progress indicator
const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollWidth(scrollPercent * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50'>
      <div
        className='h-full bg-[#f74401] transition-all duration-150 ease-out'
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

// Main component
export default function AlternatingLayout() {
  return (
    <div className='bg-white min-h-screen w-full overflow-x-hidden'>
      <ScrollProgress />
      <ParallaxBackground />

      {/* <header
        className={`fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-40 py-4 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
      >
        <div className='container mx-auto px-6 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 bg-[#f74401] rounded-lg flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </div>
            <h1 className='text-2xl font-bold text-gray-900'>Naya Builders</h1>
          </div>
          <nav className='hidden md:flex space-x-8'>
            <a
              href='#'
              className='text-gray-700 hover:text-[#f74401] transition-colors'
            >
              Home
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-[#f74401] transition-colors'
            >
              Services
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-[#f74401] transition-colors'
            >
              Projects
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-[#f74401] transition-colors'
            >
              About
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-[#f74401] transition-colors'
            >
              Contact
            </a>
          </nav>
          <button className='block md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </header> */}

      <main className='pt-24'>
        <div className='space-y-0'>
          {sections.map((section, index) => (
            <Section
              key={index}
              index={index}
              heading={section.heading}
              content={section.content}
              image={placeholders[index]}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
