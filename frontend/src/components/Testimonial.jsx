import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const testimonials = [
    {
      id: 1,
      name: "Senthil K",
      role: "Living Room Remodeling",
      image: "/review1.png",
      stars: 5,
      date: "2 weeks ago",
      quote:
        "I'm so pleased with the work done by Naya Builders! They remodeled my living room beautifully, and the team was a pleasure to work with. Their attention to detail is commendable. I highly recommend them.",
    },
    {
      id: 2,
      name: "Ditto Senthil",
      role: "Interior Painting",
      image: "/review2.png",
      stars: 5,
      date: "1 month ago",
      quote:
        "Recently had done our house interior painting and it's all done clean n clear within promise dates and also the amount as discussed earlier. Thanks for the work and grateful. Will be in touch for future plans too. Well done Naya Builders.",
    },
    {
      id: 3,
      name: "Seetha Raman",
      role: "Custom Home Building",
      image: "/review3.png",
      stars: 5,
      date: "2 months ago",
      quote:
        "When I first talked to the best construction company, I knew about their potential. Then, their on-time project completion made me leave in awe. The best part of hiring the Naya Builders is their budget-friendly solution and affordable prices for better customer satisfaction. Highly recommended. Experienced wonderful job on custom home building.",
    },
    {
      id: 4,
      name: "Ashok Kumar",
      role: "Civil Works",
      image: "/review4.png",
      stars: 5,
      date: "1 month ago",
      quote:
        "Excellent civil works, the quality of the products used by them are top notch and on time to project completed definitely will refer to all of my contacts.",
    },
    {
      id: 5,
      name: "MKN D",
      role: "Dream Home Project",
      image: "/review5.png",
      stars: 5,
      date: "3 months ago",
      quote:
        "Naya Builders made my dream home a reality. They were professional from start to finish and the communication was excellent throughout the entire build. They really took the time to understand what I wanted and provided insightful suggestions to improve the project. Best home at affordable price with modern innovation.",
    },
    {
      id: 6,
      name: "Yugender Yugi",
      role: "New Home Construction",
      image: "/review6.png",
      stars: 5,
      date: "2 months ago",
      quote:
        "The builder did a fantastic job bringing my new home to life. Everything was completed beautifully and delivered right on time. I'm genuinely impressed with the quality of work and the professionalism shown throughout the entire journey!",
    },
    {
      id: 7,
      name: "Satheesh Kumar",
      role: "Studio Flat Project",
      image: "/review7.png",
      stars: 5,
      date: "3 months ago",
      quote:
        "NAYA Builders completed our studio flat project along with elevation, and we're extremely satisfied with the results. They finished the project on time and within budget. The team was professional and maintained excellent communication throughout the construction process.",
    },
    {
      id: 8,
      name: "M C",
      role: "Home and Parking Renovation",
      image: "/review8.png",
      stars: 5,
      date: "1 month ago",
      quote:
        "Naya builder's team did an outstanding job on my home and parking renovation. They worked quickly, finished with flawless quality, and were a pleasure to deal with. Highly recommend for top-tier results!",
    },
    {
      id: 9,
      name: "Mukilan K",
      role: "House Renovation",
      image: "/review9.png",
      stars: 5,
      date: "2 months ago",
      quote:
        "We renovated our house with Naya Builders the quality of work is first class, on time delivery. Absolute value for money, I will definitely recommend them to my friends and family.",
    },
    {
      id: 10,
      name: "Vikram Balaji",
      role: "Building Rework",
      image: "/review10.png",
      stars: 5,
      date: "3 months ago",
      quote:
        "I am extremely impressed with their work I have given rework for my building they done their work best, genuine and cost effective.",
    },
    {
      id: 11,
      name: "Manoj Kumar",
      role: "New Home Construction",
      image: "/review11.png",
      stars: 5,
      date: "1 month ago",
      quote:
        "Trusted builder, on time handing over, builder was transparent, happy to our new home.",
    },
  ];

  // Calculate average rating
  const averageRating = (
    testimonials.reduce((acc, curr) => acc + curr.stars, 0) /
    testimonials.length
  ).toFixed(1);

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

  const goToPrev = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        // Loop to the end when at the beginning
        return testimonials.length - visibleCards;
      }
      return prevIndex - 1;
    });
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => {
      // If showing the last card or beyond, loop back to beginning
      if (prevIndex >= testimonials.length - visibleCards) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

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
                    fill={i < averageRating ? "#FBBC05" : "none"}
                    color={i < averageRating ? "#FBBC05" : "#e2e8f0"}
                  />
                ))}
              </div>
              <span className='font-bold text-lg'>{averageRating}</span>
              <span className='text-gray-500 ml-2'>
                ({testimonials.length} reviews)
              </span>
            </div>
          </div>

          <div className='flex space-x-2 mt-4 md:mt-0'>
            <button
              onClick={goToPrev}
              className='p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100'
              aria-label='Previous reviews'
            >
              <ChevronLeft size={20} color='#333' />
            </button>
            <button
              onClick={goToNext}
              className='p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100'
              aria-label='Next reviews'
            >
              <ChevronRight size={20} color='#333' />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className='relative overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-out'
            style={{
              transform: `translateX(-${
                activeIndex > testimonials.length - visibleCards
                  ? 0
                  : activeIndex * (100 / visibleCards)
              }%)`,
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
          {[...Array(Math.ceil(testimonials.length / visibleCards))].map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index * visibleCards)}
                className={`mx-1 w-2 h-2 rounded-full transition-all duration-300 
                ${
                  activeIndex >= index * visibleCards &&
                  activeIndex < (index + 1) * visibleCards
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to review group ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
