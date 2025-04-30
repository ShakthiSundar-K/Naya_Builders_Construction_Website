import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className='fixed bottom-8 left-8 flex flex-col gap-4 z-50'>
      <div className='relative'>
        <div className='absolute w-4 h-4 bg-[#f74401] left-0 top-1/2 transform -translate-x-2 rotate-45'></div>
        <a
          href='https://wa.me/9150324381'
          target='_blank'
          rel='noopener noreferrer'
          className='relative bg-[#f74401] text-white p-3 rounded-lg shadow-lg hover:bg-white hover:text-[#f74401] transition-all block'
          aria-label='Chat on WhatsApp'
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      <div className='relative'>
        <div className='absolute w-4 h-4 bg-[#f74401] left-0 top-1/2 transform -translate-x-2 rotate-45'></div>
        <a
          href='tel:9150324381'
          className='relative bg-[#f74401] text-white p-3 rounded-lg shadow-lg hover:bg-white hover:text-[#f74401] transition-all block'
          aria-label='Call us'
        >
          <FaPhone size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
