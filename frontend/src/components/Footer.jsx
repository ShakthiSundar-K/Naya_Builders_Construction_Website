import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 text-white py-16 transition-all duration-1000 delay-500'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div>
              <div className='flex items-center gap-2 mb-6'>
                {/* <div className='w-10 h-10 bg-[#f74401] rounded-lg flex items-center justify-center'>
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
                </div> */}
                <img
                  src='/logo.png'
                  alt='Logo'
                  className='w-10 h-10 rounded-lg'
                />
                <h3 className='text-xl font-bold'>Naya Builders</h3>
              </div>
              <p className='text-gray-400 mb-6'>
                Building dream homes with sustainable solutions for a better
                tomorrow.
              </p>

              {/* Social Media Icons */}
              <div className='flex space-x-4'>
                {/* Facebook */}
                {/* <a
                  href='#'
                  className='text-white hover:text-[#f74401] transition-colors'
                  aria-label='Facebook'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                  </svg>
                </a> */}

                {/* Instagram */}
                {/* <a
                  href='#'
                  className='text-white hover:text-[#f74401] transition-colors'
                  aria-label='Instagram'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </a> */}

                {/* YouTube */}
                {/* <a
                  href='#'
                  className='text-white hover:text-[#f74401] transition-colors'
                  aria-label='YouTube'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
                  </svg>
                </a> */}

                {/* LinkedIn */}
                {/* <a
                  href='#'
                  className='text-white hover:text-[#f74401] transition-colors'
                  aria-label='LinkedIn'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                  </svg>
                </a> */}

                {/* WhatsApp */}
                {/* <a
                  href='#'
                  className='text-white hover:text-[#f74401] transition-colors'
                  aria-label='WhatsApp'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                  </svg>
                </a> */}

                {/* Pinterest - relevant for design/construction */}
                {/* <a
                  href='#'
                  className='text-white hover:text-[#f74401] transition-colors'
                  aria-label='Pinterest'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z' />
                  </svg>
                </a> */}

                {/* Houzz - specific to construction/architecture */}
                {/* <a
                  href='#'
                  className='text-white hover:text-[#f74401] transition-colors'
                  aria-label='Houzz'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 7.85l-3 1.73v-3.46l3-1.73 3 1.73v3.46l-3 1.73zm9 2.31v3.46l-3 1.73v-3.46l3-1.73zm-18 0l3 1.73v3.46l-3-1.73v-3.46zm15-6.93v3.46l-3 1.73v-3.46l3-1.73zm-12 0l3 1.73v3.46l-3-1.73v-3.46zm6 10.39l3-1.73v3.46l-3 1.73-3-1.73v-3.46l3-1.73zm0 5.77l3-1.73v3.46l-3 1.73-3-1.73v-3.46l3-1.73z' />
                  </svg>
                </a> */}
              </div>
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
                <li className='text-gray-400'>Naya Builders</li>
                <li className='text-gray-400'>
                  No:9/5, Suresh Nagar, Selaiyur, Chennai-600073
                </li>
                <li className='text-gray-400'>nayabuilders1@gmail.com </li>
                <li className='text-gray-400'>9150324381</li>
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
            <p>
              © {new Date().getFullYear()} Naya Builders. All rights reserved.
            </p>
            <p>Powered By Torqsoft Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
