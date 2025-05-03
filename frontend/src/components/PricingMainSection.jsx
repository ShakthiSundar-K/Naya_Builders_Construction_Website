import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight,
  Plus,
  Minus,
  Phone,
  MessageSquare,
  Calendar,
} from "lucide-react";

export default function PricingMainSection() {
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedFaqs, setExpandedFaqs] = useState({});

  const toggleSection = (packageIndex, sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [`${packageIndex}-${sectionKey}`]: !prev[`${packageIndex}-${sectionKey}`],
    }));
  };

  const toggleFaq = (index) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const packages = [
    {
      name: "Basic Package",
      price: "₹1999",
      unit: "/ sqft",
      description:
        "Perfect for budget-conscious homeowners seeking quality construction",
      colors:
        "bg-gradient-to-b from-white to-gray-50 border-gray-200 hover:border-orange-500",
      details: {
        Design: ["SCHEME DRAWING: ALL FLOORS (2D)", "ELEVATION DESIGN: (3D)"],
        Structure: [
          "Basement Height: Upto 2 feet",
          "Steel: Any ISI Brand",
          "AAC: 8-Inch Exterior, 4-Inch Interior Walls",
          "Cement: Penna / Priya",
          "M Sand for Blockwork & Masonry",
          "P Sand for Plastering Works",
          "Concrete Grade: M20 (Manual Mix)",
          "Ceiling Height: 10 Feet",
          "Standard Steel Reinforcement",
          'Parapet Wall: 3 Feet Height | 4" Thick',
        ],
        "Bathroom & Plumbing": [
          "Wall Tiles: Upto 7' Height (2'X1' Vitrified, Upto ₹40/Sqft)",
          "Bath & CP Fittings: Cera (Upto ₹12000 Per Bathroom)",
          "Floor Mounted EWC, Wall Mounted Wash Basin",
          "Plumbing: CPVC Inner, PVC Outer (ISI Brand)",
          "Overhead Tank: 1000L Sintex (3 Layered, UV Protected)",
        ],
        Flooring: [
          "Living, Dining, Bedrooms & Kitchen: 2'X2' Vitrified Tiles (Upto ₹45/Sqft)",
          "Balcony & Utility: 1'X1' Tiles (Upto ₹35/Sqft)",
          "Staircase: 1'X1' Tile (Upto ₹35/sqft)",
          "Car Parking: 1'X1' Parking Tile (Upto ₹35/Sqft)",
          "Terrace: Screed Concreting with Waterproofing",
        ],
        "Kitchen & Dining": [
          "Wall Tile: 2'X1' Vitrified Tile (Upto ₹45/Sqft)",
          "Sink Faucet: Upto ₹900",
          "Kitchen Sink: Stainless Steel Single Bowl (Upto ₹2800)",
          "Dining: Wall Mounted Wash Basin",
          "Kitchen Granite Top: Upto ₹90/Sqft",
        ],
        "Doors, Windows & Railing": [
          "Main Door: Malaysian Teak Door & Frame (32mm, 7'x3.5')",
          "Room Doors: White Panel Door, Sal Wood Frame (7'x3')",
          "Bathroom Door: PVC Door (7'x2.5')",
          "Windows: Aluminium Sliding (Max 4'x4', One Per Room)",
          "Staircase & Balcony Railing: MS Railing",
        ],
        Painting: [
          "Inner Wall Putty: 2 coats (ISI Brand)",
          "Wall & Ceiling Painting: 1 coat primer, 2 coats Tractor emulsion",
          "Exterior Paint: 1 coat primer, 2 coats Ace (ISI Brand)",
        ],
        Electrical: [
          "Wires: Orbit",
          "Switches: Fybros",
          "Standard switch boxes in all rooms",
          "AC Points: 1 for each bedroom",
          "Basic electrical setup throughout",
        ],
      },
    },
    {
      name: "Standard Package",
      price: "₹2199",
      unit: "/ sqft",
      description:
        "Enhanced features with premium materials and better finishes",
      popular: true,
      colors:
        "bg-gradient-to-b from-white to-gray-50 border-gray-200 hover:border-orange-500",
      details: {
        Design: [
          "SCHEME DRAWING: ALL FLOORS (2D)",
          "ELEVATION DESIGN: (3D)",
          "WORKING DRAWING: ALL FLOORS (2D)",
        ],
        Structure: [
          "Basement Height: Upto 3 feet",
          "Steel: Arun TMT / GBR or Equivalent",
          "Chamber Bricks: 9-Inch Exterior, 4-Inch Interior Walls",
          "Cement: Ramco / Dalmia",
          "M Sand for Blockwork & Masonry",
          "P Sand for Plastering Works",
          "Concrete Grade: M20 | RMC for Roof",
          "Ceiling Height: 10 Feet",
          "Standard Steel Reinforcement",
          'Parapet Wall: 3 Feet Height | 6" Thick',
        ],
        "Bathroom & Plumbing": [
          "Wall Tiles: Full Height (2'x2' Vitrified, Upto ₹50/Sqft)",
          "Bath & CP Fittings: Parryware (Upto ₹17000 Per Bathroom)",
          "Wall Mounted EWC & Wash Basin",
          "Plumbing: CPVC Inner, PVC Outer (ISI Brand)",
          "Overhead Tank: 2000L Sintex (3 Layered, UV Protected)",
        ],
        Flooring: [
          "Living, Dining, Bedrooms & Kitchen: 4'X2' Vitrified Tiles (Upto ₹65/Sqft)",
          "Balcony & Utility: 2'X2' Tiles (Upto ₹50/Sqft, Antiskid)",
          "Staircase: Full Body Tile (Upto ₹110/sqft)",
          "Car Parking: 1'X1' Heavy Duty Tile (Upto ₹50/Sqft)",
          "Terrace: Screed Concreting with Waterproofing",
        ],
        "Kitchen & Dining": [
          "Wall Tile: 2'X2' Vitrified Tile (Upto ₹55/Sqft)",
          "Sink Faucet: Upto ₹2000",
          "Kitchen Sink: Stainless Steel with Drain (Upto ₹4000)",
          "Dining: Wall Mounted Wash Basin",
          "Kitchen Granite Top: Upto ₹140/Sqft",
        ],
        "Doors, Windows & Railing": [
          "Main Door: Malaysian Teak Door & Frame (Readymade, 35mm, 7'x3.5')",
          "Room Doors: Flush Door with Sal Wood Frame (7'x3')",
          "Bathroom Door: WPC Door & Frame (7'x2.5')",
          "Windows: UPVC Sliding White (Max 5'x5', One Per Room)",
          "Staircase Railing: SS 304 Grade",
          "Balcony Railing: SS 304 Grade with 8mm Toughened Glass",
        ],
        Painting: [
          "Inner Wall Putty: 2 coats (Nippon)",
          "Wall & Ceiling Painting: 1 coat primer, 2 coats Breeze emulsion",
          "Exterior Paint: 1 coat primer, 2 coats Sumo Xtra (Nippon)",
          "Elevation Putty: 2 coats for Front Elevation",
        ],
        Electrical: [
          "Wires: Orbit (FRLS)",
          "Switches: Legrand",
          "Enhanced electrical points throughout",
          "AC Points: 1 for each bedroom and living room",
        ],
      },
    },
    {
      name: "Premium Package",
      price: "₹2499",
      unit: "/ sqft",
      description:
        "Luxury construction with top-tier materials and superior finishes",
      colors:
        "bg-gradient-to-b from-white to-gray-50 border-gray-200 hover:border-orange-500",
      details: {
        Design: [
          "SCHEME DRAWING: ALL FLOORS (2D)",
          "ELEVATION DESIGN: (3D)",
          "WORKING DRAWING: ALL FLOORS (2D)",
          "SOIL TEST REPORT",
          "STRUCTURAL DRAWINGS",
          "FURNITURE LAYOUT: ALL FLOORS (2D)",
        ],
        Structure: [
          "Basement Height: Upto 3.5 feet",
          "Steel: ARS or Equivalent",
          "Wire-Cut Bricks: 9-Inch Exterior, 4-Inch Interior Walls",
          "Cement: Ramco / Dalmia",
          "M Sand for Blockwork & Masonry",
          "River Sand for Plastering",
          "Concrete Grade: M20 | RMC for Roof",
          "Ceiling Height: 10 Feet (FFL to FFL)",
          "Enhanced Steel Reinforcement",
          'Parapet Wall: 3.5 Feet Height | 6" Thick',
          "RCC Lift Pit & Shaft (If Required)",
        ],
        "Bathroom & Plumbing": [
          "Wall Tiles: Full Height (4'x2' Digital Vitrified, Upto ₹85/Sqft)",
          "Bath & CP Fittings: Jaquar (Upto ₹22000 Per Bathroom)",
          "Wall Mounted EWC, Wall Mounted Wash Basin",
          "Concealed Wall Mixer, Premium Fixtures",
          "Plumbing: Ashirwad / Finolex (CPVC Inner, PVC Outer)",
          "Overhead Tank: 3000L Sintex (5 Layered) with Sensor",
          "Solar Heater Plumbing Lines (If Required)",
        ],
        Flooring: [
          "Living, Dining, Bedrooms & Kitchen: 4'X2' Tiles (Upto ₹80/Sqft)",
          "Balcony & Utility: 2'X2' Tiles (Upto ₹60/Sqft)",
          "Staircase: Granite (Upto ₹160/sqft)",
          "Car Parking: 2'X2' Heavy Stone (Upto ₹80/Sqft)",
          "Terrace: White Cooling Tile 1'X1' with Waterproofing",
        ],
        "Kitchen & Dining": [
          "Wall Tile: 4'X2' Vitrified Tile (Upto ₹65/Sqft)",
          "Sink Faucet: Designer Brand (Upto ₹3500)",
          "Kitchen Sink: Quartz Sink with Drain (Upto ₹5000)",
          "Dining: Wash Basin with Granite Counter",
          "Kitchen Granite Top: Upto ₹160/Sqft",
        ],
        "Doors, Windows & Railing": [
          "Main Door: Ghana Teak Door & Frame (35mm, 8'x4')",
          "Room Doors: Flush Door with Laminate, Ghana Wood Frame (7'x3')",
          "Bathroom Door: WPC Door & Frame (7'x2.5')",
          "Windows: UPVC Sliding White (No Size Restriction)",
          "Staircase Railing: SS 304 Grade",
          "Balcony Railing: 10mm Full Toughened Glass with 304 Grade Railing",
        ],
        Painting: [
          "Inner Wall Putty: 2 coats (Birla)",
          "Wall & Ceiling: 1 coat primer, 2 coats Pro Matex Gold Emulsion",
          "Exterior Paint: 1 coat primer, 2 coats Weather bond PRO (Nippon)",
          "Elevation Putty: 2 coats for Two Sides of Elevation",
        ],
        Electrical: [
          "Wires: Finolex / Havells (FRLS)",
          "Switches: GM",
          "No restriction on number of points",
          "Electricity Panel Board with RLCB (Exterior Grade)",
        ],
      },
    },
    {
      name: "Ultra Premium Package",
      price: "₹2999",
      unit: "/ sqft",
      description:
        "Exceptional luxury with exclusive materials and unparalleled craftsmanship",
      colors:
        "bg-gradient-to-b from-white to-gray-50 border-gray-200 hover:border-orange-500",
      highlight: true,
      details: {
        Design: [
          "COMPREHENSIVE DESIGN PACKAGE INCLUDING:",
          "2D Floor Plans & 3D Elevation Designs",
          "Half Layout in 3D for All Floors",
          "Electrical & Plumbing Drawings",
          "Soil Test Report & Structural Drawings",
          "Interior Views & Detailing for All Rooms",
          "3D Interior Walk-Through",
          "Approval Drawing & Landscaping Designs",
        ],
        Structure: [
          "Basement Height: Upto 5 feet",
          "Steel: TATA Steel",
          "Wire-Cut Bricks: 9-Inch Exterior, 4-Inch Interior Walls",
          "Cement: Ramco / Dalmia / Coramandel",
          "River Sand for Both Blockwork & Plastering",
          "Concrete Grade: M25 | RMC for Roof",
          "Ceiling Height: 11 Feet (FFL to FFL)",
          "RCC Concrete Slab for Base",
          "Premium Steel Reinforcement as per Structural Design",
          "Parapet: 3.5' Height | 6\" Thick or Toughened Glass Railing",
        ],
        "Bathroom & Plumbing": [
          "Wall Tiles: Full Height (4'x2' Vitrified, Upto ₹120/Sqft)",
          "Bath & CP Fittings: Kohler (Upto ₹60000 Per Bathroom)",
          "Concealed EWC, Counter Top Wash Basin with Marble Counter",
          "Premium Fixtures & Concealed Wall Mixer",
          "Plumbing: Ashirwad/Finolex/Jindal (CPVC Inner, PVC Outer, HDPE)",
          "RCC Overhead Tank: Upto 6000 Liters with Waterproofing",
          "Solar Heater Plumbing Lines Included",
        ],
        Flooring: [
          "Living, Dining, Bedrooms & Kitchen: 6'X6' Quartz Tiles (Upto ₹200/Sqft)",
          "Balcony & Utility: 2'X2' Tiles (Upto ₹60/Sqft)",
          "Staircase: Marble (Upto ₹350/sqft)",
          "Car Parking: Granite (Upto ₹120/Sqft)",
          "Terrace: 2'X2' Exterior Grade Vitrified Tile with Waterproofing",
        ],
        "Kitchen & Dining": [
          "Wall Tile: 4'X2' Designer Vitrified Tile (Upto ₹125/Sqft)",
          "Sink Faucet: Floor Mounted Pull-Out (Upto ₹8000)",
          "Kitchen Sink: Multifunction Sink (Upto ₹15000)",
          "Dining: Premium Designer Wash Basin with Marble Counter",
          "Kitchen Top: Quartz Stone (Upto ₹350/Sqft)",
        ],
        "Doors, Windows & Railing": [
          "Main Door: Designer Wood Door (8'x5') or Security Steel Door with Digital Lock",
          "Room Doors: Flush Door with Laminate, Ghana Wood Frame (8'x3.5')",
          "Bathroom Door: Waterproof Flush Door with Designer Laminates (8'x3')",
          "Windows: UPVC Colored Openable with Toughened Glass (No Size Restriction)",
          "Staircase: Toughened Glass with SS/Wood/Aluminum Railing",
          "Balcony: 10mm Toughened Glass with Aluminum Railing",
        ],
        Painting: [
          "Inner Wall Putty: 2 coats (Birla)",
          "Wall & Ceiling: 1 coat primer, 2 coats Royal Shyne (Asian/Nippon)",
          "Exterior Paint: 1 coat primer, 2 coats Apex Ultima ProteK (Asian)",
          "Elevation Putty: 2 coats for All Sides with Birla Wallseal Waterproofing",
        ],
        Electrical: [
          "Wires: Finolex / Havells (FRLS)",
          "Switches: Touch Switches with Glass Plates",
          "No restriction on number of points",
          "Up to 2 Service Connections with RLCB (Exterior Grade)",
        ],
      },
    },
  ];

  const faqs = [
    {
      question: "What's not included in the package prices?",
      answer:
        "Our packages don't include: compound wall (₹425/Sqft) & gate, sump & septic tank (₹24/Litre), lift, electricity connection, building plan approval, and elevation special materials. These can be added at additional cost.",
    },
    {
      question: "Do prices vary based on the number of floors?",
      answer:
        "Yes, the price may vary depending on the number of floors for all packages. We'll provide you with a custom quote after understanding your specific requirements.",
    },
    {
      question: "How much do underground water storage sumps cost?",
      answer:
        "Underground water storage sumps cost ₹24 per liter across all packages.",
    },
    {
      question: "Is roof weathering included in the packages?",
      answer:
        "Basic waterproofing is included in all packages. Premium waterproofing treatments are available in Standard and Premium packages if the build-up area is more than 2000 sq ft.",
    },
    {
      question: "What type of soil testing is included in the Premium package?",
      answer:
        "The Premium package includes standard soil testing to determine soil bearing capacity and soil type, which helps in designing the foundation structure appropriately.",
    },
  ];

  return (
    <div className='bg-gray-50 min-h-screen font-sans'>
      {/* Page Header */}
      <div className='bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-center text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative z-10'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Construction Packages
          </h1>
          <p className='text-lg md:text-xl max-w-2xl mx-auto'>
            Choose the perfect construction package tailored to your needs and
            budget
          </p>
        </div>
      </div>

      {/* Enhanced Pricing Cards with Expandable Details */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
          {packages.map((pkg, packageIndex) => (
            <div
              key={packageIndex}
              className={`rounded-lg border-2 ${
                pkg.colors
              } shadow-lg transition-all duration-300 overflow-hidden relative ${
                pkg.popular
                  ? "ring-2 ring-orange-500 transform hover:scale-105"
                  : pkg.highlight
              }`}
            >
              {pkg.popular && (
                <div className='absolute top-0 right-0'>
                  <div className='bg-orange-500 text-white py-1 px-4 rounded-bl-lg text-sm font-semibold'>
                    MOST POPULAR
                  </div>
                </div>
              )}

              {pkg.highlight && (
                <div className='absolute top-0 right-0'>
                  <div className='bg-orange-500 text-white py-1 px-4 rounded-bl-lg text-sm font-semibold'>
                    PREMIUM CHOICE
                  </div>
                </div>
              )}

              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800'>{pkg.name}</h3>
                <div className='mt-4 flex items-baseline'>
                  <span className='text-4xl font-extrabold text-orange-500'>
                    {pkg.price}
                  </span>
                  <span className='ml-1 text-gray-500'>{pkg.unit}</span>
                </div>
                <p className='mt-2 text-gray-600 text-sm'>{pkg.description}</p>

                {/* Expandable Detail Sections */}
                <div className='mt-6 space-y-3'>
                  {Object.entries(pkg.details).map(
                    ([sectionKey, items], sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className='border-b border-gray-100 pb-1'
                      >
                        <button
                          onClick={() =>
                            toggleSection(packageIndex, sectionKey)
                          }
                          className='w-full flex justify-between items-center py-2 text-left focus:outline-none'
                        >
                          <span className='font-medium text-gray-800'>
                            {sectionKey}
                          </span>
                          {expandedSections[`${packageIndex}-${sectionKey}`] ? (
                            <Minus size={16} className='text-orange-500' />
                          ) : (
                            <Plus size={16} className='text-orange-500' />
                          )}
                        </button>

                        {expandedSections[`${packageIndex}-${sectionKey}`] && (
                          <div className='mt-2 pl-2 space-y-1 text-sm text-gray-600 pb-2'>
                            {items.map((item, itemIndex) => (
                              <div key={itemIndex} className='flex items-start'>
                                <Check
                                  size={12}
                                  className='text-green-500 mr-2 mt-1 flex-shrink-0'
                                />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>

                <div className='mt-6'>
                  <button
                    className={`w-full py-3 px-6 rounded-md font-medium flex items-center justify-center 
                    ${
                      pkg.popular
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : pkg.highlight
                        ? "bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
                        : "bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
                    } transition-colors duration-300`}
                  >
                    Choose Package
                    <ArrowRight size={16} className='ml-2' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className='max-w-4xl mx-auto px-4 py-12 bg-white rounded-lg shadow-md my-12'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>
          Frequently Asked Questions
        </h2>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-gray-200 rounded-lg overflow-hidden hover:border-orange-300 transition-colors'
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
                <div className='px-4 pb-4 pt-0 text-gray-600 animate-fadeIn'>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className='bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-center text-white relative'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='max-w-5xl mx-auto relative z-10'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Build Your Dream Home?
          </h2>
          <p className='text-lg mb-10 max-w-3xl mx-auto'>
            Get in touch with our expert team for a personalized consultation
            and detailed quote. We'll help you choose the perfect package for
            your dream home.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto'>
            <button className='bg-white text-orange-600 font-semibold py-3 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center'>
              <Phone size={18} className='mr-2' /> Call Now
            </button>
            <button className='bg-white text-orange-600 font-semibold py-3 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center'>
              <MessageSquare size={18} className='mr-2' /> WhatsApp Us
            </button>
            <button className='bg-white text-orange-600 font-semibold py-3 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center'>
              <Calendar size={18} className='mr-2' /> Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Note about price variations */}
      <div className='max-w-7xl mx-auto px-4 py-8 text-center'>
        <p className='text-gray-600 text-sm'>
          * Prices may vary depending on the number of floors and specific
          requirements. Contact us for a detailed estimate tailored to your
          project.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
