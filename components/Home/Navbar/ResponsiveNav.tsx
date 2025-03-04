"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleOpenNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={handleOpenNav} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNav;
