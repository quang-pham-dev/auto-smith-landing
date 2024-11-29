import Image from "next/image";

import { CTAFeatures } from "@/constants/cta-feature";

export default function CTAFeature() {
  return (
    <div className="flex max-w-[850px] flex-row flex-wrap items-center justify-center gap-3 px-5 my-5">
      {CTAFeatures.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-row items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-white backdrop-blur-sm transition hover:bg-white/30"
        >
          <Image
            src={feature.icon}
            alt={feature.title}
            width={16}
            height={16}
            className="md:w-[25px] md:h-[25px]"
          />
          <p className="text-base md:text-2xl font-normal">{feature.title}</p>
        </div>
      ))}
    </div>
  );
}
