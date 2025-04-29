import { useState } from "react";
import viteLogo from "/vite.svg";
import "./sass/style.scss";
import { Navbar } from "./sections/Navbar/Navbar";
import { HeroSection } from "./sections/Hero/Hero";
import { Features } from "./sections/Features/Features";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </>
  );
}

export default App;
