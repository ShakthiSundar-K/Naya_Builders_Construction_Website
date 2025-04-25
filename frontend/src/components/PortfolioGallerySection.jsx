import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Simplified Portfolio Gallery Section with optimizations for React
export function PortfolioGallerySection() {
  const [filter, setFilter] = useState("all");
  const [loadedItems, setLoadedItems] = useState(8); // Initial items to show
  const loadingRef = useRef(null);

  // Sample projects data
  const projects = [
    {
      id: 1,
      category: "residential",
      image: "/pe1.jpg",
      // Optional: Add thumbnail versions of your images
      thumbnail: "/thumbnails/pe1-thumbnail.jpg",
      title: "Modern Family Home",
      location: "Chennai",
    },
    {
      id: 2,
      category: "residential",
      image: "/pe2.jpg",
      thumbnail: "/thumbnails/pe2-thumbnail.jpg",
      title: "Modern Family Home",
      location: "Chennai",
    },
    {
      id: 3,
      category: "residential",
      image: "/pe3.jpg",
      thumbnail: "/thumbnails/pe3-thumbnail.jpg",
      title: "Modern Family Home",
      location: "Chennai",
    },
    {
      id: 4,
      category: "residential",
      image: "/pe5.jpg",
      thumbnail: "/thumbnails/pe5-thumbnail.jpg",
      title: "Modern Family Home",
      location: "Chennai",
    },
    {
      id: 5,
      category: "residential",
      image: "/pe7.jpg",
      thumbnail: "/thumbnails/pe7-thumbnail.jpg",
      title: "Modern Family Home",
      location: "Chennai",
    },
    {
      id: 6,
      category: "residential",
      image: "/pe21.jpg",
      thumbnail: "/thumbnails/pe21-thumbnail.jpg",
      title: "Modern Family Home",
      location: "Chennai",
    },
    {
      id: 7,
      category: "residential",
      image: "/pe22.jpg",
      thumbnail: "/thumbnails/pe22-thumbnail.jpg",
      title: "Modern Family Home",
      location: "Chennai",
    },
    {
      id: 8,
      category: "interior",
      image: "/pi4.jpg",
      thumbnail: "/thumbnails/pi4-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 9,
      category: "interior",
      image: "/pi6.jpg",
      thumbnail: "/thumbnails/pi6-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 10,
      category: "interior",
      image: "/pi8.jpg",
      thumbnail: "/thumbnails/pi8-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 11,
      category: "interior",
      image: "/pi9.jpg",
      thumbnail: "/thumbnails/pi9-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 12,
      category: "interior",
      image: "/pi10.jpg",
      thumbnail: "/thumbnails/pi10-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 13,
      category: "interior",
      image: "/pi11.jpg",
      thumbnail: "/thumbnails/pi11-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 14,
      category: "interior",
      image: "/pi12.jpg",
      thumbnail: "/thumbnails/pi12-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 15,
      category: "interior",
      image: "/pi13.jpg",
      thumbnail: "/thumbnails/pi13-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 16,
      category: "interior",
      image: "/pi14.jpg",
      thumbnail: "/thumbnails/pi14-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 17,
      category: "interior",
      image: "/pi15.jpg",
      thumbnail: "/thumbnails/pi15-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 18,
      category: "interior",
      image: "/pi16.jpg",
      thumbnail: "/thumbnails/pi16-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 19,
      category: "interior",
      image: "/pi18.jpg",
      thumbnail: "/thumbnails/pi18-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 20,
      category: "interior",
      image: "/pi19.jpg",
      thumbnail: "/thumbnails/pi19-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 21,
      category: "interior",
      image: "/pi20.jpg",
      thumbnail: "/thumbnails/pi20-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
    {
      id: 22,
      category: "interior",
      image: "/pi23.jpg",
      thumbnail: "/thumbnails/pi23-thumbnail.jpg",
      title: "Home Interior",
      location: "Chennai",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Intersection Observer for infinite scrolling
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && loadedItems < filteredProjects.length) {
        setLoadedItems((prevCount) =>
          Math.min(prevCount + 4, filteredProjects.length)
        );
      }
    }, options);

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [loadedItems, filteredProjects.length]);

  // Reset loaded items when filter changes
  useEffect(() => {
    setLoadedItems(8); // Reset to initial count when filter changes
  }, [filter]);

  return (
    <section id='portfolio-gallery' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Portfolio Introduction */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Crafting Excellence
          </h2>
          <div className='w-24 h-1 bg-[#f74401] mx-auto mb-6'></div>
          <p className='text-gray-600 max-w-3xl mx-auto'>
            Explore our diverse portfolio showcasing our commitment to quality
            craftsmanship and innovative design. Each project reflects our
            dedication to excellence and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          <button
            onClick={() => setFilter("residential")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "residential"
                ? "bg-[#f74401] text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Residential
          </button>

          <button
            onClick={() => setFilter("interior")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "interior"
                ? "bg-[#f74401] text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Interior Design
          </button>
        </div>

        {/* Gallery Grid with LazyLoadImage */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProjects.slice(0, loadedItems).map((project) => (
            <div
              key={project.id}
              className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='relative h-64 overflow-hidden bg-gray-100'>
                <LazyLoadImage
                  src={project.image}
                  // Use thumbnail as placeholder or remove if you don't have thumbnails yet
                  // placeholderSrc={project.thumbnail || "/placeholder-image.jpg"}
                  alt={project.title}
                  effect='blur'
                  height='100%'
                  width='100%'
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                  wrapperClassName='w-full h-full'
                  threshold={300}
                  placeholderSrc='/placeholder-image.jpg' // Fallback placeholder
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70'></div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                <h3 className='font-semibold text-lg'>{project.title}</h3>
                <p className='text-sm text-gray-200'>{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator and infinite scroll trigger */}
        {loadedItems < filteredProjects.length && (
          <div ref={loadingRef} className='text-center mt-10'>
            <button
              onClick={() =>
                setLoadedItems((prev) =>
                  Math.min(prev + 8, filteredProjects.length)
                )
              }
              className='px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-md font-medium transition-colors'
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Simple Portfolio Page Component
export default function PortfolioPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Only Portfolio Gallery Section */}
      <PortfolioGallerySection />
    </div>
  );
}
