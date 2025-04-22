import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  // Images for the carousel
  const images = ["/hero-cons-5.jpg", "/hero-cons-6.jpg", "/hero-con.jpg"];

  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  // Function to advance to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Set up automatic image transition
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            currentImage === index
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            transform: `scale(${currentImage === index ? "1.05" : "1"})`,
            zIndex: currentImage === index ? 0 : -1,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50 z-10'></div>

      {/* Content Container - Improved vertical centering for desktop */}
      <div className='relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16'>
        <div className='max-w-4xl mx-auto text-center my-auto'>
          {/* Main Heading with Animation */}
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight animate-fade-in'>
            We Enhance People's Living Through
            <span className='text-[#f74401]'> Architecture & Interiors</span>
          </h1>

          {/* Subheading with Animation */}
          <p className='text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed'>
            At Architeca, we bring your dream home to life with expert
            construction and design, creating interiors that reflect your unique
            personality and meet the needs of your family.
          </p>

          {/* CTA Button with fixed animation */}
          <a
            href='/contact'
            className='inline-block bg-[#f74401] hover:bg-[#e03a00] text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-button-appear'
          >
            Talk to Our Experts
          </a>
        </div>

        {/* Carousel Navigation Dots */}
        <div className='absolute bottom-8 left-0 right-0 flex justify-center space-x-3'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImage(index);

                // Reset interval timer on manual click
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                }
                intervalRef.current = setInterval(nextImage, 5000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "bg-[#f74401] w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonAppear {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-button-appear {
          animation: buttonAppear 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
