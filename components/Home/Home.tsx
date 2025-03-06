"use client";

import { useEffect } from "react";
import About from "./About/About";
import Faq from "./FAQ/Faq";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import RecentImage from "./RecentImage/RecentImage";
import Review from "./Review/Review";
import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
      <Pricing />
      <Review />
      <Faq />
    </div>
  );
};

export default Home;
