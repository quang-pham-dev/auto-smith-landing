"use client";

import Image from "next/image";

import { Heading } from "@/components/common/heading";
import { BrandScroll } from "../brand-scroll";
import OutstandingFeature from "./outstanding-feature";
import TakeItForSpin from "./take-it-for-spin";
import { carModelLeft, carModelRight } from "@/assets";

const LeftModelOutstandingFeature = [
  {
    id: 1,
    description: "High-Value Deals",
  },
  {
    id: 2,
    description: "Premium Condition",
  },
  {
    id: 3,
    description: "Power Restored",
  },
];

const RightModelOutstandingFeature = [
  {
    id: 1,
    description: "Affordable Restoration",
  },
  {
    id: 2,
    description: "Credit Flexibility",
  },
  {
    id: 3,
    description: "Unbeatable Prices",
  },
];

export default function WorkWithTheBest() {
  return (
    <section
      id="work-with-the-best"
      className="container flex flex-col mt-5 md:mt-[70px]"
    >
      <div className="w-full max-w-[100vw]">
        <p className="text-center text-lg md:text-2xl font-normal">
          We work with the best
        </p>
        <BrandScroll />
        <Heading variant="h2" className="text-center tracking-[-2.2px]">
          Supercar performance on a shoestring budget
        </Heading>

        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10">
            <div className="flex flex-col gap-2 items-center">
              <div className="aspect-[4/3] w-full relative max-w-[450px]">
                <Image
                  src={carModelLeft}
                  alt="work with the best"
                  className="w-full h-full object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                />
              </div>

              <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-center">
                {LeftModelOutstandingFeature.map((feature) => (
                  <OutstandingFeature
                    key={feature.id}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="aspect-[4/3] w-full relative max-w-[450px]">
                <Image
                  src={carModelRight}
                  alt="work with the best"
                  className="w-full h-full object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                />
              </div>

              <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-center">
                {RightModelOutstandingFeature.map((feature) => (
                  <OutstandingFeature
                    key={feature.id}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <TakeItForSpin />
      </div>
    </section>
  );
}
