"use client";

import { navlinks } from "@/constant/constant";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.screenY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const bg_style = navBg ? "bg-[#1b1b1b] shadow-md " : "";

  return (
    <div
      className={`flex ${bg_style} items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200`}
    >
      <h1 className="text-2xl text-white font-bold ml-8 md:ml-16">ImgGen.</h1>
      <div className="md:flex items-center space-x-10 hidden">
        {/* navlinks */}
        {navlinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="relative text-base text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-0 hover:after:scale-100 after:transition after:duration-300 after:origin-center"
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      {/* buttons */}
      <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
        <ShoppingCart className="cursor-pointer h-6 w-6" />
        <Search className="cursor-pointer h-6 w-6" />
        <MenuIcon
          onClick={openNav}
          className="cursor-pointer h-6 w-6 md:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
