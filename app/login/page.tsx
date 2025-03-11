import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center pt-16">
      <div className="flex w-[90%] max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden h-[28rem]">
        {/* Image Section */}
        <div className="flex-1 h-full">
          <Image
            src={"/images/r5.jpg"}
            alt="image"
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <form className="flex-1 bg-[#e9fafe] px-5 flex flex-col justify-center h-full">
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-900">
            Hey 👋
          </h2>
          <div className="bg-gray-950 px-4 py-3 rounded-lg mb-4">
            <input
              type="text"
              placeholder="Enter your name..."
              className="bg-transparent w-full outline-none text-sm font-light text-gray-100 placeholder:text-white"
            />
          </div>
          <div className="bg-gray-950 px-4 py-3 rounded-lg mb-4">
            <input
              type="email"
              placeholder="example@email.com"
              className="bg-transparent w-full outline-none text-sm font-light text-gray-100 placeholder:text-white"
            />
          </div>
          <Button
            variant={"secondary"}
            className="mt-14 cursor-pointer bg-cyan-500 w-full hover:bg-cyan-600"
            size={"lg"}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
