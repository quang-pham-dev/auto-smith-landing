"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import NavBar from "@/components/sections/nav-bar";
import MobileNav from "@/components/sections/mobile-nav";
import { logo } from "@/assets";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="py-5 px-[1rem] md:px-[30px] lg:px-[80px]">
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            alt="logo"
            width={118}
            height={18}
            className="w-auto"
          />
          <NavBar />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
