"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  brandAutoTrader,
  brandAbsa,
  brandGetWorth,
  brandMarquis,
  brandMFC,
  brandStandardBank,
  brandWeBuyCars,
  brandWesBank,
  brandCarsCoZa,
  brandWeeleeCoZa,
} from "@/assets";

const brands = [
  {
    id: 1,
    icon: brandWeBuyCars,
  },
  {
    id: 2,
    icon: brandCarsCoZa,
  },
  {
    id: 3,
    icon: brandAutoTrader,
  },
  {
    id: 4,
    icon: brandWeeleeCoZa,
  },
  {
    id: 5,
    icon: brandGetWorth,
  },
  {
    id: 6,
    icon: brandMarquis,
  },
  {
    id: 7,
    icon: brandStandardBank,
  },
  {
    id: 8,
    icon: brandMFC,
  },
  {
    id: 9,
    icon: brandAbsa,
  },
  {
    id: 10,
    icon: brandWesBank,
  },
];

export function BrandScroll() {
  return (
    <div className="py-2 md:py-12 bg-white mt-10">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          style={{
            display: "flex",
            gap: "3.5rem",
            flexShrink: 0,
            paddingRight: "1.5rem",
          }}
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {brands.map((brand) => (
            <div key={brand.id} className="flex-shrink-0 w-40 h-20 relative">
              <Image
                src={brand.icon}
                alt={`Brand ${brand.id}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </div>
          ))}

          {/* Duplicate set for continuous scroll */}
          {brands.map((brand) => (
            <div
              key={`duplicate-${brand.id}`}
              className="flex-shrink-0 w-40 h-20 relative"
            >
              <Image
                src={brand.icon}
                alt={`Brand ${brand.id}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
