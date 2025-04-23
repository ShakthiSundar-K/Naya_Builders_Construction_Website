import React from "react";
import ContactSection from "../components/ContactSection";
import ContactHeroSection from "../components/ContactHeroSection";

const Contact = () => {
  return (
    <div className='mt-20'>
      <ContactHeroSection />
      <ContactSection />
    </div>
  );
};

export default Contact;
