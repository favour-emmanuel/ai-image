"use client";

import { Button } from "@/components/ui/button";
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
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const bg_style = navBg ? "bg-[#000510] shadow-md " : "";

  return (
    <div
      className={`flex ${bg_style} items-center justify-between h-[12vh] fixed z-[100] w-full px-8 md:px-16 transition-all duration-200`}
    >
      <h1 className="text-xl text-[#debc89df] font-bold">ImgGen.</h1>

      {/* Centered navigation */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10">
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

      {/* Right-side buttons */}
      <div className="flex items-center space-x-5 md:space-x-8">
        <Link href={"/signUp"}>
          <Button
            variant={"secondary"}
            className="bg-cyan-500 hover:bg-gray-100"
          >
            Sign Up
          </Button>
        </Link>
        <Link href={"/login"}>
          <Button
            variant={"link"}
            className="text-white border border-cyan-500 cursor-pointer"
            size={"lg"}
          >
            Login
          </Button>
        </Link>
        <MenuIcon
          onClick={openNav}
          className="cursor-pointer h-6 w-5 md:hidden text-orange-200"
        />
      </div>
    </div>
  );
};

export default Nav;
