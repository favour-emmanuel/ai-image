import Link from "next/link";
import { navlinks } from "@/constant/constant";
import { XIcon } from "lucide-react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-y-0" : "translate-y-[-200%]";
  return (
    <>
      {/* navlinks */}
      <div
        className={`${navOpen} text-white fixed lg:hidden flex flex-col h-screen transform transition-all duration-1000 w-full bg-gray-950 space-y-12 z-[1050] top-0`}
      >
        {/* logo */}
        <h1 className="text-xl py-4 text-cyan-400 ml-12 font-bold">ImgGen.</h1>
        {navlinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit  hover:text-orange-400 hover:duration-300 text-lg ml-12 border-b-[1.5px] pb-1 border-white sm:text-[28px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* close icon */}
        <XIcon
          onClick={closeNav}
          className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        ></XIcon>
      </div>
    </>
  );
};

export default MobileNav;
