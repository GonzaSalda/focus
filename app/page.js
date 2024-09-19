"use client";
// Components
import { Hero } from "./Components/Hero";

// Implement lenis swooth scroll
import { ReactLenis } from "lenis/dist/lenis-react";

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <div className="h-[8000px]"></div>
      </ReactLenis>
    </>
  );
};

export default Home;
