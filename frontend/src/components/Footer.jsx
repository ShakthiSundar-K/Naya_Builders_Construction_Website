import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 text-white py-16 transition-all duration-1000 delay-500'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div>
              <div className='flex items-center gap-2 mb-6'>
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
                <h3 className='text-xl font-bold'>Architeca</h3>
              </div>
              <p className='text-gray-400'>
                Building dream homes with sustainable solutions for a better
                tomorrow.
              </p>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Contact Us</h4>
              <ul className='space-y-2'>
                <li className='text-gray-400'>1234 Construction Ave</li>
                <li className='text-gray-400'>Building City, BC 56789</li>
                <li className='text-gray-400'>info@architeca.com</li>
                <li className='text-gray-400'>(123) 456-7890</li>
              </ul>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Newsletter</h4>
              <p className='text-gray-400 mb-4'>
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800'
                />
                <button className='bg-[#f74401] px-4 py-2 rounded-r-md hover:bg-[#e03b00] transition-colors'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className='mt-12 pt-8 border-t border-gray-800 text-center text-gray-500'>
            <p>© {new Date().getFullYear()} Architeca. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
