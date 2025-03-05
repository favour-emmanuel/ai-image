const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center ">
        {/* img div */}
        <div className="order-2 xl:order-1">
          <img
            src="/images/about.jpg"
            alt="About"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        {/* content div */}
        <div></div>
      </div>
    </div>
  );
};

export default About;
