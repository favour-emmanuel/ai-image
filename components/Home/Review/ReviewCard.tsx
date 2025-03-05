import { QuoteIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  role: string;
  clientReview: string;
};

const ReviewCard = ({ image, name, role, clientReview }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <QuoteIcon className="w-10 h-10 text-teal-300" />
      <p className="text-center mt-4 w-full lg:max-w-[48rem] text-white text-base md:text-lg lg:text-xl font-semibold opacity-70">
        {clientReview}
      </p>
      <div className="mt-8">
        <h1 className="text-base md:text-2xl font-bold text-white text-center">
          {name}
        </h1>
        <p className="text-sm md:text-lg font-black text-white text-center">
          {role}
        </p>
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="mt-6 rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
