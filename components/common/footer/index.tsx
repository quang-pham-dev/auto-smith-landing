"use client";

import Link from "next/link";
import Image from "next/image";
import { bottomCarModel } from "@/assets";
import Logo from "@/components/icons/logo";
import { Heading } from "../heading";

const quickLinks = [
  { href: "#", label: "What we offer" },
  { href: "#", label: "Why trust us" },
  { href: "#", label: "How it works" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Our customers" },
];

const legalLinks = [
  { href: "#", label: "Terms" },
  { href: "#", label: "Privacy" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="container mt-[50px] md:mt-[140px] items-start pb-[40px] md:pb-[65px]">
      <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start">
        <div className="flex flex-col md:flex-1 justify-between items-start">
          <Logo />
          <Heading
            variant="h2"
            className="text-left mt-5 md:mt-5 md:text-3xl lg:text-[55px] md:leading-[100%] "
          >
            Driven by enthusiasts
          </Heading>
        </div>

        <div className="mt-10 md:mt-2 md:flex-grow lg:pl-10">
          <Image
            src={bottomCarModel}
            alt="car model"
            width={372}
            height={150}
            className="md:max-w-[230px] md:max-h-[100px] lg:max-w-[372px] lg:max-h-[150px]"
          />
        </div>

        <div className="mt-10 md:mt-0 flex flex-col md:flex-row md:flex-grow lg:flex-grow justify-between">
          <div className="md:flex-grow-0">
            <Heading
              variant="h4"
              className="mb-3 leading-normal tracking-[-0.4px]"
            >
              Quick Links
            </Heading>
            <ul className="space-y-[15px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-[15px] font-medium text-[#929292] hover:text-[#000] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 md:mt-0 md:flex-grow-0">
            <Heading
              variant="h4"
              className="mb-3 leading-normal tracking-[-0.4px]"
            >
              Legal
            </Heading>
            <ul className="space-y-[15px]">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-[15px] font-medium text-[#929292] hover:text-[#000] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 md:mt-0 md:flex-grow-0">
            <Heading
              variant="h4"
              className="mb-3 leading-normal tracking-[-0.4px]"
            >
              Socials
            </Heading>
            <ul className="space-y-[15px]">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-[15px] font-medium text-[#929292] hover:text-[#000] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200 md:mt-[50px] mt-[30px] mb-5 md:mb-[40px]" />

      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-[16px] font-normal leading-[140%] text-gray-500">
          © {new Date().getFullYear()} Copyright Autosmith. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
