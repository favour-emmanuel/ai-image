"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Hero = () => {
  const [prompt, setPromt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  //   to handle image generation
  const handleImageGeneration = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
      headers: {
        "x-rapidapi-key": "20c45f4a19msh09e667718d2456cp15446ejsnb8706687b444",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        inputs: prompt,
      },
    };

    try {
      const response = await axios.request(options);
      setImage(response?.data.url);
      toast.success("Image generated successfullly");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  //download functionality
  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "generated-img.jpg";
    link.click();
  };

  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      {/* content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent">
          Create Beautiful Image with <br /> Artificial Intelligence
        </h1>
        <p className="mt-3 text-base md:text-lg font-semibold text-center text-gray-300">
          Get started with our AI-powered Image generator tool
        </p>
        {/* prompt input box */}
        <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPromt(e.target.value)}
            placeholder="Generate Your Image"
            className="h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs placeholder:sm:text-base"
          />
          <Button
            onClick={handleImageGeneration}
            variant={"default"}
            size={"lg"}
          >
            Generate
          </Button>
        </div>
        {/* tags */}
        <div className="flex items-center justify-center mt-6 space-x-4 flex-wrap py-2 lg:space-y-0 space-y-3">
          <p>Popular Tag: </p>
          <Button variant={"secondary"}>Creative</Button>
          <Button variant={"secondary"}>Hyperreality</Button>
          <Button variant={"secondary"}>Steampunk</Button>
          <Button variant={"secondary"}>Animation</Button>
          <Button variant={"secondary"}>Business</Button>
        </div>
        {/* show loading */}
        {loading && (
          <div>
            <Loader className="animate-spin mt-6" />
          </div>
        )}

        {image && (
          <div className="mt-8 flex flex-col items-center">
            <img
              src={image}
              alt="Ai Image"
              className="max-w-full h-[500px] rounded-lg shadow-lg"
              loading="lazy"
            />
            <Button
              onClick={handleDownloadImage}
              className="my-4 bg-orange-500 hover:bg-orange-800"
            >
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
