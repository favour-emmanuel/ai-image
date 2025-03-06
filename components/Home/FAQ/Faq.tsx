import Image from "next/image";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-[80%] mx-auto">
        {/* image */}
        <Image
          data-aos="zoom-out"
          data-aos-anchor-placement="top center"
          src={"/images/faq.png"}
          alt="Faq Image"
          width={450}
          height={500}
        />
        {/* accordion card */}
        <div>
          <FaqCard />
        </div>
      </div>
    </div>
  );
};

export default Faq;
