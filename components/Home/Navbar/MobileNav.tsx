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
    <div>
      {/* navlinks */}
      <div
        className={`${navOpen} text-white fixed lg:hidden justify-center flex flex-col h-screen transform transition-all duration-1000 w-full bg-[#0d0d0d] space-y-6 z-[1050] top-0`}
      >
        {navlinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        {/* close icon */}
        <XIcon
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        ></XIcon>
      </div>
    </div>
  );
};

export default MobileNav;
