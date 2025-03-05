import About from "./About/About";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import RecentImage from "./RecentImage/RecentImage";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
      <Pricing />
      <Review />
    </div>
  );
};

export default Home;
