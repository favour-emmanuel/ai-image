type Props = {
  heading: string;
  subText: string;
};

const SectionHeading = ({ heading, subText }: Props) => {
  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-3xl lg:text-4xl font-black text-white">{heading}</h1>
      <p className="text-sm w-full lg:max-w-[48rem] sm:text-base md:text-lg font-medium mt-2 text-gray-200">
        {subText}
      </p>
    </div>
  );
};

export default SectionHeading;
