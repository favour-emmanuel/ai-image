import Slider from "./Slider";

const Review = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="mt-16 w-[80%] mx-auto">
        <h1 className="text-3xl text-center my-8 sm:text-4xl md:text-[3.7rem] lg:text-5xl font-bold mb-4 text-white">
          What our clients have to say{" "}
        </h1>
        <div className="my-3">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Review;
