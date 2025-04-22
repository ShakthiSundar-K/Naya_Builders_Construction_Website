import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner, Residential Project",
      image: "/api/placeholder/100/100",
      stars: 5,
      quote:
        "Working with this construction company transformed our house into the dream home we always wanted. Their attention to detail and commitment to quality exceeded our expectations. The project was completed on time and within budget!",
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "CEO, Pacific Real Estate",
      image: "/api/placeholder/100/100",
      stars: 5,
      quote:
        "As a commercial developer, I've worked with many construction firms, but this team stands head and shoulders above the rest. Their 7-step process ensured clear communication from concept to completion. Will definitely partner with them again.",
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Restaurant Owner",
      image: "/api/placeholder/100/100",
      stars: 4,
      quote:
        "The renovation of our restaurant was handled with remarkable professionalism. They minimized disruption to our business and delivered a stunning result that has our customers raving. Their interior design team has incredible vision!",
    },
    {
      id: 4,
      name: "Michael Davidson",
      role: "School District Facilities Manager",
      image: "/api/placeholder/100/100",
      stars: 5,
      quote:
        "Our school renovation project had tight deadlines and specific safety requirements. This team not only met every specification but delivered the project two weeks ahead of schedule. Their project management is truly exceptional.",
    },
    {
      id: 5,
      name: "Amanda Perez",
      role: "Luxury Home Client",
      image: "/api/placeholder/100/100",
      stars: 5,
      quote:
        "Building our custom home was a seamless experience from start to finish. Their team listened to our desires and brought them to life while adding expert touches we hadn't even considered. The craftsmanship is impeccable.",
    },
  ];

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
  }, [activeIndex]);

  const goToPrev = () => {
    setDirection("prev");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection("next");
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
  };

  // Reset timer when manually changing slides
  const handleManualNavigation = (action) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    action();
    intervalRef.current = setInterval(goToNext, 5000);
  };

  return (
    <section className='w-full py-16 px-4 bg-gray-100 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold mb-3'>
            <span className='text-black'>What Our </span>
            <span className='text-[#f74401]'>Clients Say</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Hear from our satisfied clients about their experience working with
            our construction team
          </p>
        </div>

        <div className='relative'>
          {/* Carousel Container */}
          <div className='relative h-full overflow-hidden rounded-xl shadow-lg bg-white'>
            <div
              className='flex transition-transform duration-700 ease-out h-full'
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className='w-full flex-shrink-0 p-6 md:p-12'
                >
                  <div className='flex flex-col md:flex-row items-center gap-8'>
                    <div className='md:w-1/3 flex flex-col items-center'>
                      <div className='relative mb-4'>
                        <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg'>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='absolute -bottom-3 -right-3 bg-[#f74401] rounded-full p-2 shadow-md'>
                          <Quote size={16} color='white' />
                        </div>
                      </div>
                      <h3 className='text-xl font-bold text-gray-800 text-center'>
                        {testimonial.name}
                      </h3>
                      <p className='text-gray-500 text-center'>
                        {testimonial.role}
                      </p>
                      <div className='flex items-center mt-2 mb-6'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill={i < testimonial.stars ? "#f74401" : "none"}
                            color={
                              i < testimonial.stars ? "#f74401" : "#e2e8f0"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <div className='md:w-2/3'>
                      <div className='relative'>
                        <Quote
                          size={48}
                          className='absolute -top-6 -left-6 text-gray-200 opacity-50'
                          color='#f74401'
                          opacity={0.1}
                        />
                        <blockquote className='text-gray-700 text-lg italic leading-relaxed pt-4 pl-4'>
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleManualNavigation(goToPrev)}
            className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f74401]'
            aria-label='Previous testimonial'
          >
            <ChevronLeft size={24} color='#333' />
          </button>

          <button
            onClick={() => handleManualNavigation(goToNext)}
            className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f74401]'
            aria-label='Next testimonial'
          >
            <ChevronRight size={24} color='#333' />
          </button>

          {/* Indicators */}
          <div className='flex justify-center mt-6'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => goToSlide(index))}
                className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
                  ${
                    activeIndex === index
                      ? "bg-[#f74401] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
