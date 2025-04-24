import { useState } from "react";
import viteLogo from "/vite.svg";
import "./sass/style.scss";
import { Navbar } from "./sections/Navbar/Navbar";
import { HeroSection } from "./sections/Hero/Hero";

function App() {
  return (
    <>
     <Navbar />
     <HeroSection/>
    </>
  );
}

export default App;
