import Image from "next/image";

import { bgPricing } from "@/assets";
import { Heading } from "@/components/common/heading";

export default function FlatFeeCard() {
  return (
    <div className="w-full h-full md:w-[500px] lg:w-[715px] relative min-h-[304px] md:min-h-[374px] md:rounded-[32px] overflow-hidden">
      <Image
        src={bgPricing}
        alt="pricing"
        fill
        className="object-cover md:rounded-[32px] w-auto"
        sizes="(max-width: 768px) 100vw, 715px"
      />

      <div className="absolute inset-0 p-6 md:p-[30px] flex flex-col justify-between">
        <span className="rounded-full w-fit bg-white/10 px-5 py-2 text-white backdrop-blur-sm transition hover:bg-white/30 text-xl">
          Flat fee
        </span>
        <Heading
          variant="h2"
          className="my-2 md:mt-5 md:mb-6 text-white text-4xl md:text-[96px] text-start leading-[100%] tracking-[-1.92px]"
        >
          R3000
        </Heading>

        <Heading
          variant="h3"
          className="font-normal text-white tracking-[-0.56px] line-clamp-2 overflow-hidden"
        >
          Paid only when we find a car that matches your criteria
        </Heading>
        <p className="mt-4 md:w-[400px] text-white/60 text-lg md:text-xl leading-[100%] tracking-[-0.2px] line-clamp-2 overflow-hidden">
          If you elect for shipping, there may be an additional fee based on
          distance or pick-up
        </p>
      </div>
    </div>
  );
}
