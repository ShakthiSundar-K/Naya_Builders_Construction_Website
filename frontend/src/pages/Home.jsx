import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HomeMainSection from "../components/HomeMainSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HomeMainSection />
      <Footer />
    </div>
  );
};

export default Home;
