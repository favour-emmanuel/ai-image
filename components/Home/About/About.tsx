import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center ">
        {/* img div */}
        <div
          className="order-2 xl:order-1"
          data-aos="zoom-in"
          data-aos-anchor-placement="top center"
        >
          <img
            src="/images/about.jpg"
            alt="About"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        {/* content div */}
        <div className="order-1 xl:order-2 ">
          <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">
            What we do{" "}
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-[3.7rem] lg:text-5xl font-bold mb-4 text-cyan-300">
            Create your own Ai Business easily.
          </h1>
          <p className="text-gray-200 mb-8 text-base font-normal">
            Launch and scale your AI-powered business with ease. Whether you're
            automating workflows, enhancing customer experiences, or building
            intelligent solutions, our platform empowers you with the tools to
            turn your ideas into reality.
          </p>
          <Button
            className="bg-teal-600 w-36 h-12 text-base uppercase hover:bg-[#549788]"
            size={"lg"}
          >
            About us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
