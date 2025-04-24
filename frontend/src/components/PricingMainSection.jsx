import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";

export default function PricingMainSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaqs, setExpandedFaqs] = useState({});

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const packages = [
    {
      name: "Basic Package",
      price: "₹1999",
      unit: "/ sqft",
      description:
        "Perfect for budget-conscious homeowners seeking quality construction",
      features: [
        "2D Floor Plan Design",
        "10 Feet Ceiling Height",
        "ISI Brand Materials",
        "Basic Plumbing & Electrical Setup",
        "Standard Flooring (Tiles upto ₹45/sqft)",
        "Parapet Wall up to 3 Feet High",
      ],
      mainHighlights: {
        structure: '6" Exterior & 4" Interior Block Walls',
        flooring: "Tiles Upto ₹45 Per Sq ft",
        electrical: "ISI Brand Wires & Switches",
        plumbing: "Basic Setup with ISI Fixtures",
      },
      colors: "bg-white border-gray-200 hover:border-orange-500",
    },
    {
      name: "Standard Package",
      price: "₹2199",
      unit: "/ sqft",
      description:
        "Enhanced features with premium materials and better finishes",
      popular: true,
      features: [
        "2D Floor Plan & 3D Elevation Design",
        "Premium ARS Steel & Brand Cement",
        "Enhanced Electrical & Plumbing",
        "Better Flooring Options (Tiles upto ₹50/sqft)",
        "1000L Sintex Water Tank Included",
        "MS Staircase Railing Included",
      ],
      mainHighlights: {
        structure: "Zuari/Penna/Chettinad Cement",
        flooring: "Tiles Upto ₹50 Per Sq ft",
        electrical: "Finolex Wires & Anchor Roma Switches",
        plumbing: "Double Sink & RO Point",
      },
      colors: "bg-white border-gray-200 hover:border-orange-500",
    },
    {
      name: "Premium Package",
      price: "₹2499",
      unit: "/ sqft",
      description:
        "Luxury construction with top-tier materials and superior finishes",
      features: [
        "Complete Design: 2D, 3D & Structural",
        "Tata/SAIL Steel & Ramco/Ultratech Cement",
        "Luxury Granite Flooring (upto ₹120/sqft)",
        "Advanced Electrical & Premium Fixtures",
        "2000L Sintex Water Tank Included",
        "SS Staircase Railing & Safety Grill",
      ],
      mainHighlights: {
        structure: "Premium Steel & Cement Brands",
        flooring: "Granite Upto ₹120 Per Sq ft",
        electrical: "Finolex Wires & Legrand Switches",
        plumbing: "Premium Fixtures & Double Sink",
      },
      colors: "bg-white border-gray-200 hover:border-orange-500",
    },
  ];

  const detailTabs = [
    {
      name: "Design & Structure",
      data: [
        {
          title: "Basic Package",
          items: [
            "2D Floor Plan Design",
            "Basement height: Upto 2 feet",
            "ISI Brand Steel & Cement",
            '6" Exterior & 4" Interior Block Walls',
            "M20 RCC Design Mix",
            "10 Feet Ceiling Height",
          ],
        },
        {
          title: "Standard Package",
          items: [
            "2D Floor Plan & 3D Elevation Design",
            "Basement height: Upto 3 feet",
            "ARS Steel, Zuari/Penna/Chettinad Cement",
            '6" Exterior & 4" Interior Block Walls',
            "Dr.Fixit Waterproofing",
            "10 Feet Ceiling Height",
          ],
        },
        {
          title: "Premium Package",
          items: [
            "2D Floor Plan, 3D Design & Structural Design",
            "Basement height: Upto 4 feet (if required)",
            "Tata Tiscon/SAIL Steel, Ramco/Ultratech Cement",
            '6" Exterior & 4" Interior Block Walls',
            "Dr.Fixit Waterproofing",
            "10 Feet Ceiling Height",
          ],
        },
      ],
    },
    {
      name: "Kitchen & Plumbing",
      data: [
        {
          title: "Basic Package",
          items: [
            "Kitchen Granite Slab: 20mm (Upto ₹80/sqft)",
            "Ceramic Wall Tiles 2 Feet Above Kitchen (Upto ₹35/sqft)",
            "Stainless Steel Sink (Upto ₹2000)",
            "Single Sink with Basic Tap",
            "Bathroom with Basic Fixtures",
            "1 Wash Basin & Tap in Dining Area",
          ],
        },
        {
          title: "Standard Package",
          items: [
            "Kitchen Granite Slab: 20mm (Upto ₹100/sqft)",
            "Ceramic Wall Tiles 2 Feet Above Kitchen (Upto ₹45/sqft)",
            "Stainless Steel Sink (Upto ₹3000)",
            "Double Sink with Better Tap (Upto ₹2000)",
            "RO Point Included",
            "Enhanced Bathroom Fixtures",
          ],
        },
        {
          title: "Premium Package",
          items: [
            "Kitchen Granite Slab: 20mm (Upto ₹120/sqft)",
            "Ceramic Wall Tiles 2 Feet Above Kitchen (Upto ₹55/sqft)",
            "Stainless Steel Sink (Upto ₹4000)",
            "Double Sink with Premium Tap (Upto ₹2500)",
            "RO Point Included",
            "Premium Bathroom Fixtures",
          ],
        },
      ],
    },
    {
      name: "Doors & Windows",
      data: [
        {
          title: "Basic Package",
          items: [
            "Main Door: Ready Made Basic Teak Door (38mm)",
            "Internal Doors: Flush Door With Laminates",
            "Standard Aluminum 2-Track Sliding Window",
            "Door Sizes: Main (3.5'×7'), Room (3'×7'), Bath (2.5'×7')",
            "Window Size: 4'×4' (1 per room)",
          ],
        },
        {
          title: "Standard Package",
          items: [
            "Main Door: Ready Made Malaysian Teak Door (38mm)",
            "Internal Doors: Flush Door With Laminates",
            "Aluminum 2-Track with Powder Coating or UPVC Windows",
            "Door Sizes: Main (3.5'×7'), Room (3'×7'), Bath (2.5'×7')",
            "Window Size: 4'×4' (1 per room)",
          ],
        },
        {
          title: "Premium Package",
          items: [
            "Main Door: First Quality Teak Door (38mm)",
            "Internal Doors: Flush Door With Laminates",
            "Aluminum 3-Track with Mosquito Mesh & Powder Coating or UPVC Windows",
            "Door Sizes: Main (3.5'×7'), Room (3'×7'), Bath (2.5'×7')",
            "Window Size: 4'×4' (1 per room)",
          ],
        },
      ],
    },
    {
      name: "Flooring & Painting",
      data: [
        {
          title: "Basic Package",
          items: [
            "Living & Dining: Tiles Upto ₹45/sqft",
            "Rooms & Kitchen: Tiles Upto ₹45/sqft",
            "Balcony & Open Areas: Tiles Upto ₹35/sqft",
            "Interior: 1 coat ISI putty, 2 coats emulsion",
            "Exterior: 1 coat primer, 1 coat white cement, 2 coats emulsion",
          ],
        },
        {
          title: "Standard Package",
          items: [
            "Living & Dining: Tiles Upto ₹50/sqft",
            "Rooms & Kitchen: Tiles Upto ₹50/sqft",
            "Balcony & Open Areas: Tiles Upto ₹45/sqft",
            "Interior: 2 coats Asian/Birla putty, 3 coats with primer",
            "Exterior: Better quality paints with primer & white cement",
          ],
        },
        {
          title: "Premium Package",
          items: [
            "Living & Dining: Granite Upto ₹120/sqft",
            "Rooms & Kitchen: Granite Upto ₹120/sqft",
            "Balcony & Open Areas: Tiles Upto ₹55/sqft",
            "Interior: 2 coats Asian/Birla putty, 3 coats with primer",
            "Exterior: Weatherproof paints with primer & white cement",
          ],
        },
      ],
    },
    {
      name: "Electrical & Extras",
      data: [
        {
          title: "Basic Package",
          items: [
            "Wires & Switches: Any ISI Brand",
            "Standard electrical points in all rooms",
            "Parapet wall up to 3 feet high",
            "Basic lofts and shelves in bedrooms & kitchen",
            "No overhead tank included",
          ],
        },
        {
          title: "Standard Package",
          items: [
            "Wires: Finolex & Switches: Anchor Roma",
            "Enhanced electrical points with extras",
            "Overhead Tank: 1000 litres Sintex",
            "MS Staircase Railing",
            "Rainwater harvesting included",
          ],
        },
        {
          title: "Premium Package",
          items: [
            "Wires: Finolex & Switches: Legrand",
            "Comprehensive electrical points throughout",
            "Overhead Tank: 2000 litres Sintex",
            "SS Staircase Railing",
            "MS safety grill gate for main door",
            "Soil testing & structural designing included",
          ],
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "What's not included in the package prices?",
      answer:
        "Our packages don't include: compound walls, lifts, carpentry & wooden work, EB connections & charges, government approval charges, water connections, gates, and outer area development. These can be added at additional cost.",
    },
    {
      question: "Do prices vary based on the number of floors?",
      answer:
        "Yes, the price may vary depending on the number of floors for all packages. We'll provide you with a custom quote after understanding your specific requirements.",
    },
    {
      question: "How much do underground water storage sumps cost?",
      answer:
        "Underground water storage sumps cost ₹15 per liter for Basic Package, and ₹25 per liter for Standard and Premium Packages.",
    },
    {
      question: "Is roof weathering included in the packages?",
      answer:
        "Roof weathering is included in the Standard and Premium packages if the build-up area is more than 2000 sq ft. For the Basic package, it's available at additional cost.",
    },
    {
      question: "What type of soil testing is included in the Premium package?",
      answer:
        "The Premium package includes standard soil testing to determine soil bearing capacity and soil type, which helps in designing the foundation structure appropriately.",
    },
  ];

  const toggleFaq = (index) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className='bg-white min-h-screen font-sans'>
      {/* Page Header */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        className='bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-center text-white'
      >
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Construction Packages
        </h1>
        <p className='text-lg md:text-xl max-w-2xl mx-auto'>
          Choose the perfect construction package tailored to your needs and
          budget
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='visible'
        className='max-w-7xl mx-auto px-4 py-12'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`rounded-lg border-2 ${
                pkg.colors
              } shadow-lg transition-all duration-300 overflow-hidden relative ${
                pkg.popular ? "md:transform md:-translate-y-4" : ""
              }`}
            >
              {pkg.popular && (
                <div className='absolute top-0 right-0'>
                  <div className='bg-orange-500 text-white py-1 px-4 rounded-bl-lg text-sm font-semibold'>
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {pkg.name}
                </h3>
                <div className='mt-4 flex items-baseline'>
                  <span className='text-4xl font-bold text-orange-500'>
                    {pkg.price}
                  </span>
                  <span className='ml-1 text-gray-500'>{pkg.unit}</span>
                </div>
                <p className='mt-2 text-gray-600'>{pkg.description}</p>

                <div className='mt-6'>
                  <ul className='space-y-3'>
                    {pkg.features.map((feature, i) => (
                      <li key={i} className='flex items-start'>
                        <Check
                          size={18}
                          className='text-green-500 mr-2 mt-1 flex-shrink-0'
                        />
                        <span className='text-gray-700'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='mt-8 bg-gray-50 -mx-6 p-6'>
                  <h4 className='text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4'>
                    Main Highlights
                  </h4>
                  <ul className='space-y-2'>
                    {Object.entries(pkg.mainHighlights).map(
                      ([key, value], i) => (
                        <li key={i} className='flex items-start'>
                          <span className='text-orange-500 font-medium mr-2'>
                            {key}:{" "}
                          </span>
                          <span className='text-gray-700'>{value}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className='mt-8'>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-md font-medium flex items-center justify-center 
                    ${
                      pkg.popular
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    Choose Package
                    <ArrowRight size={16} className='ml-2' />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Detailed Comparison */}
      <div className='bg-gray-50 py-16 px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeIn}
          className='max-w-7xl mx-auto'
        >
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
            Detailed Package Comparison
          </h2>

          <div className='bg-white rounded-xl shadow-md overflow-hidden'>
            {/* Tabs */}
            <div className='flex overflow-x-auto scrollbar-hide border-b'>
              {detailTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap
                  ${
                    activeTab === index
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className='p-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {detailTabs[activeTab].data.map((column, index) => (
                  <div key={index} className='space-y-4'>
                    <h3 className='text-lg font-semibold text-gray-800 pb-2 border-b'>
                      {column.title}
                    </h3>
                    <ul className='space-y-3'>
                      {column.items.map((item, i) => (
                        <li key={i} className='flex items-start'>
                          <Check
                            size={16}
                            className='text-orange-500 mr-2 mt-1 flex-shrink-0'
                          />
                          <span className='text-gray-700 text-sm'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQs Section */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeIn}
        className='max-w-4xl mx-auto px-4 py-16'
      >
        <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
          Frequently Asked Questions
        </h2>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-gray-200 rounded-lg overflow-hidden'
            >
              <button
                onClick={() => toggleFaq(index)}
                className='w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none hover:bg-gray-50'
              >
                <span className='text-gray-800'>{faq.question}</span>
                {expandedFaqs[index] ? (
                  <ChevronUp size={20} className='text-orange-500' />
                ) : (
                  <ChevronDown size={20} className='text-orange-500' />
                )}
              </button>

              {expandedFaqs[index] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='px-4 pb-4 pt-0 text-gray-600'
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeIn}
        className='bg-gradient-to-r from-orange-500 to-orange-600 py-12 px-4 text-center text-white'
      >
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Start Your Dream Project?
          </h2>
          <p className='text-lg mb-8'>
            Get in touch with us for a personalized quote and consultation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-white text-orange-500 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors'
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.div>

      {/* Note about price variations */}
      <div className='max-w-7xl mx-auto px-4 py-8 text-center'>
        <p className='text-gray-600 text-sm italic'>
          * Prices may vary depending on the number of floors and specific
          requirements. Contact us for a detailed estimate.
        </p>
      </div>
    </div>
  );
}
