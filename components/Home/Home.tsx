import About from "./About/About";
import Hero from "./Hero/Hero";
import RecentImage from "./RecentImage/RecentImage";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
    </div>
  );
};

export default Home;
