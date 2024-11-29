"use client";

import Image from "next/image";

import {
  ourCustomers1,
  ourCustomers2P1,
  ourCustomers2P2,
  ourCustomers3,
  ourCustomers4P1,
  ourCustomers4P2,
} from "@/assets";
import { Heading } from "@/components/common/heading";
import BottomIntro from "./bottom-intro";

export default function OurCustomers() {
  return (
    <section id="our-customers" className="container mt-5 md:mt-[125px]">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8F8F8] px-3 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF601F]"></div>
            <span className="text-sm font-medium">Our customers</span>
          </div>
          <Heading variant="h2" className="text-center tracking-[-2.2px]">
            Find out why customers love us
          </Heading>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[min(315px, 100%)] relative rounded-[40px] overflow-hidden h-[532px]">
            <Image
              src={ourCustomers1}
              alt="Car inspection"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="text-white">
                <div className="text-[90px] font-bold leading-[1] mb-2">
                  98%
                </div>
                <div className="text-2xl font-light">Inspection Approval</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[min(295px, 100%)] flex flex-col gap-5 h-[532px] ">
            <div className="relative rounded-[40px] overflow-hidden h-full">
              <Image
                src={ourCustomers2P1}
                alt="Happy customer in car"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-white">
                  <div className="text-2xl font-medium leading-tight mb-2">
                    &quot;Found my dream car in no time!&quot;
                  </div>
                  <div className="text-base font-light">Sarah T</div>
                </div>
              </div>
            </div>

            <div className="relative rounded-[40px] overflow-hidden h-full">
              <Image
                src={ourCustomers2P2}
                alt="Dealership negotiation"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-white">
                  <div className="text-lg font-light mb-1">
                    Average savings on purchase
                  </div>
                  <div className="text-[64px] font-bold leading-[1]">
                    R18 000
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[min(354px, 100%)] relative rounded-[40px] overflow-hidden h-[532px]">
            <Image
              src={ourCustomers3}
              alt="Customer savings"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="text-white">
                <div className="text-xl font-medium leading-tight mb-2">
                  &quot;Saved me thousands with their negotiation skills!&quot;
                </div>
                <div className="text-base font-light">Emily R</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[min(216px, 100%)] flex flex-col gap-5 h-[532px]">
            <div className="relative rounded-[40px] overflow-hidden h-[297px]">
              <Image
                src={ourCustomers4P1}
                alt="Car key"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>

            <div className="relative rounded-[40px] overflow-hidden bg-[#1C3F4F] p-6 h-[215px]">
              <div className="flex flex-col">
                <div className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full overflow-hidden relative mb-4">
                  <Image
                    src={ourCustomers4P2}
                    alt="Daniel K"
                    fill
                    className="object-cover w-auto"
                    sizes="(max-width: 768px) 100vw, 60px"
                  />
                </div>
                <div className="text-white mt-auto">
                  <p className="text-2xl font-medium mb-2 leading-[100%]">
                    &quot;Incredible service, I couldn&apos;t be happier!&quot;
                  </p>
                  <div className="text-[#B4B4B4] text-base">Daniel K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomIntro />
    </section>
  );
}
