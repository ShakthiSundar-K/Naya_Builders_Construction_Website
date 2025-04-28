import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const SocialMediaBar = () => {
  return (
    <div className='fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-4 p-2 bg-transparent z-50'>
      <a
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-[#f74401] text-white p-3 rounded-l-lg hover:bg-white hover:text-[#f74401] transition'
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-[#f74401] text-white p-3 rounded-l-lg hover:bg-white hover:text-[#f74401] transition'
      >
        <FaInstagram size={20} />
      </a>
      <a
        href='https://linkedin.com'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-[#f74401] text-white p-3 rounded-l-lg hover:bg-white hover:text-[#f74401] transition'
      >
        <FaLinkedinIn size={20} />
      </a>
      <a
        href='https://wa.me/919150324381'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-[#f74401] text-white p-3 rounded-l-lg hover:bg-white hover:text-[#f74401] transition'
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default SocialMediaBar;
