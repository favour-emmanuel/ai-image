import { Check } from "lucide-react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="lg:w-[90%] w-[80%] mx-auto  grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* content */}
        <div>
          <h1 className="uppercase text-white mb-6 font-bold">
            Flexible and Affordable
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
            Pricing
          </h1>
          <p className="text-white font-medium text-base opacity-70 my-5">
            Choose a plan that suits your needs. Whether you're an individual or
            a business, our AI-powered image generator offers flexible pricing
            for everyone.
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-[17px] text-white font-semibold opacity-60">
                High Quality Services
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-[17px] text-white font-semibold opacity-60">
                24/7 Customer Services
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-[17px] text-white font-semibold opacity-60">
                Affordable Rate
              </p>
            </div>
          </div>
        </div>
        {/* Price Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-10">
          <div data-aos="fade-right" data-aos-anchor-placement="top center">
            <PriceCard price="4" user="1" type="Silver" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top center"
            data-aos-delay="100"
          >
            <PriceCard price="8" user="3" type="Goldedn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
