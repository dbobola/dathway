import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { CTAObjOne } from "../components/CTA/Data";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Sidebar from "../components/Sidebar";
import Team from "../components/Team";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Benefits />
      <Features />
      <CTA {...CTAObjOne} />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
