import SectionHeading from "@/components/Helper/SectionHeading";
import ImageSlider from "./ImageSlider";

const RecentImage = () => {
  return (
    <div className="pt-16 pb-16 bg-[#000614]">
      {/* heading */}
      <SectionHeading heading="Explore Our Recent Image" />
      {/* slider */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-16">
        <ImageSlider />
      </div>
    </div>
  );
};

export default RecentImage;
