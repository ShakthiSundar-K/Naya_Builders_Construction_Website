import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";
import SocialMediaBar from "./SocialMediaBar";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SocialMediaBar />
    </>
  );
};

export default Layout;
