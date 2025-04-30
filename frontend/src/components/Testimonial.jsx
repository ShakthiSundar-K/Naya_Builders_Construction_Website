import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner, Residential Project",
      image: "/test-1.jpg",
      stars: 5,
      date: "2 weeks ago",
      quote:
        "Working with this construction company transformed our house into the dream home we always wanted. Their attention to detail and commitment to quality exceeded our expectations. The project was completed on time and within budget!",
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "CEO, Pacific Real Estate",
      image: "/test-2.jpg",
      stars: 5,
      date: "1 month ago",
      quote:
        "As a commercial developer, I've worked with many construction firms, but this team stands head and shoulders above the rest. Their 7-step process ensured clear communication from concept to completion. Will definitely partner with them again.",
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Restaurant Owner",
      image: "/test-1.jpg",
      stars: 4,
      date: "2 months ago",
      quote:
        "The renovation of our restaurant was handled with remarkable professionalism. They minimized disruption to our business and delivered a stunning result that has our customers raving. Their interior design team has incredible vision!",
    },
    {
      id: 4,
      name: "Michael Davidson",
      role: "School District Facilities Manager",
      image: "/test-2.jpg",
      stars: 5,
      date: "3 months ago",
      quote:
        "Our school renovation project had tight deadlines and specific safety requirements. This team not only met every specification but delivered the project two weeks ahead of schedule. Their project management is truly exceptional.",
    },
    {
      id: 5,
      name: "Amanda Perez",
      role: "Luxury Home Client",
      image: "/test-1.jpg",
      stars: 5,
      date: "4 months ago",
      quote:
        "Building our custom home was a seamless experience from start to finish. Their team listened to our desires and brought them to life while adding expert touches we hadn't even considered. The craftsmanship is impeccable.",
    },
  ];

  // Determine visible cards based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto advance the carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, visibleCards]);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => {
      // Make sure we don't go less than 0
      return Math.max(0, prevIndex - 1);
    });
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => {
      // Make sure we don't exceed the max index
      return Math.min(testimonials.length - visibleCards, prevIndex + 1);
    });
  };

  // Reset timer when manually changing slides
  const handleManualNavigation = (action) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    action();
    intervalRef.current = setInterval(goToNext, 5000);
  };

  // Calculate if we can go further
  const canGoNext = activeIndex < testimonials.length - visibleCards;
  const canGoPrev = activeIndex > 0;

  return (
    <section className='w-full pt-12 pb-20 px-4 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-bold mb-2 flex items-center'>
              <span className='text-gray-800'>What Our </span>
              <span className='text-[#f74401] ml-1'>Clients Say</span>
            </h2>
            <div className='flex items-center'>
              <div className='flex mr-2'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < 4.7 ? "#FBBC05" : "none"}
                    color={i < 4.7 ? "#FBBC05" : "#e2e8f0"}
                  />
                ))}
              </div>
              <span className='font-bold text-lg'>4.7</span>
              {/* <span className='text-gray-500 ml-2'>
                ({testimonials.length} reviews)
              </span> */}
            </div>
          </div>

          <div className='flex space-x-2 mt-4 md:mt-0'>
            <button
              onClick={() => handleManualNavigation(goToPrev)}
              disabled={!canGoPrev}
              className={`p-2 rounded-full ${
                canGoPrev
                  ? "bg-white border border-gray-300 hover:bg-gray-100"
                  : "bg-gray-100 border border-gray-200 cursor-not-allowed"
              }`}
              aria-label='Previous reviews'
            >
              <ChevronLeft size={20} color={canGoPrev ? "#333" : "#ccc"} />
            </button>
            <button
              onClick={() => handleManualNavigation(goToNext)}
              disabled={!canGoNext}
              className={`p-2 rounded-full ${
                canGoNext
                  ? "bg-white border border-gray-300 hover:bg-gray-100"
                  : "bg-gray-100 border border-gray-200 cursor-not-allowed"
              }`}
              aria-label='Next reviews'
            >
              <ChevronRight size={20} color={canGoNext ? "#333" : "#ccc"} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className='relative overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-out'
            style={{
              transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
              width: `${(testimonials.length / visibleCards) * 100}%`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='px-2'
                style={{
                  width: `${(100 / testimonials.length) * visibleCards}%`,
                }}
              >
                <div className='bg-white rounded-lg shadow-md p-6 h-full border border-gray-200 hover:shadow-lg transition-shadow duration-300'>
                  <div className='flex items-center mb-4'>
                    <div className='w-10 h-10 rounded-full overflow-hidden mr-3'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='font-medium text-gray-900'>
                        {testimonial.name}
                      </h3>
                      <div className='flex items-center'>
                        <div className='text-xs text-gray-500'>
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex mb-3'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.stars ? "#FBBC05" : "none"}
                        color={i < testimonial.stars ? "#FBBC05" : "#e2e8f0"}
                      />
                    ))}
                  </div>

                  <p className='text-gray-700 text-sm line-clamp-4'>
                    {testimonial.quote}
                  </p>

                  <div className='mt-4 pt-3 border-t border-gray-100'>
                    <p className='text-xs text-gray-500'>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dots navigation */}
        <div className='flex justify-center mt-6 md:hidden'>
          {[...Array(Math.max(1, testimonials.length - visibleCards + 1))].map(
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  handleManualNavigation(() => setActiveIndex(index))
                }
                className={`mx-1 w-2 h-2 rounded-full transition-all duration-300 
                ${activeIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
                aria-label={`Go to review group ${index + 1}`}
              />
            )
          )}
        </div>

        {/* Google verification badge */}
        {/* <div className='flex justify-center mt-8'>
          <div className='flex items-center px-4 py-2 bg-blue-50 rounded-full'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              className='mr-2 text-blue-500'
            >
              <path
                fill='currentColor'
                d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
              />
            </svg>
            <span className='text-sm font-medium text-gray-700'>
              Google verified reviews
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
