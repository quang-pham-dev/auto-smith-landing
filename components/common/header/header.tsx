"use client";

import Image from "next/image";

import useScroll from "@/hooks/use-scroll";
import NavBar from "@/components/sections/nav-bar";
import MobileNav from "@/components/sections/mobile-nav";
import { logo } from "@/assets";

export default function Header() {
  const { y: scrollY } = useScroll();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 10 ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="py-5 px-[1rem] md:px-[30px] lg:px-[80px]">
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            alt="logo"
            width={188}
            height={24}
            priority
            className="w-[188px] h-[24px]"
          />
          <NavBar />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
