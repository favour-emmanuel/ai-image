import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCard = () => {
  return (
    <Accordion type="single" collapsible className="w-full text-white/90">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg lg:text-[19px] cursor-pointer">
          How does the AI image generator work?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Our AI uses advanced machine learning models to generate high-quality
          images based on your input. Simply enter a prompt, choose your
          preferred style, and let the AI create stunning visuals in seconds.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg lg:text-xl cursor-pointer">
          Can I use the generated images for commercial purposes?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes! Depending on your selected plan, you can use the images for
          personal and commercial projects. Be sure to review our licensing
          terms for details.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg lg:text-xl cursor-pointer">
          Do I need design skills to use this tool?
        </AccordionTrigger>
        <AccordionContent className="text-base font-light md:text-lg">
          Not at all! Our AI image generator is built for everyone—whether
          you're a professional designer or a beginner. Simply enter a prompt,
          and the AI will do the rest.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg lg:text-xl cursor-pointer">
          What file formats are supported?
        </AccordionTrigger>
        <AccordionContent className="text-base font-light md:text-lg">
          The generated images can be downloaded in high-resolution formats such
          as PNG and JPEG, ensuring compatibility with various design and
          printing needs.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg lg:text-xl cursor-pointer">
          Is there a limit to the number of images I can generate?
        </AccordionTrigger>
        <AccordionContent className="text-base font-light md:text-lg">
          The number of images you can generate depends on your chosen plan.
          Free users have a limited number of generations, while premium users
          enjoy unlimited access.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqCard;
