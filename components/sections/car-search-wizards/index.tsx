import Image from "next/image";

import { start, bgTopBanner } from "@/assets";
import { TopBadge } from "./top-badge";
import CTAFeature from "./cta-feature";
import SearchInput from "./search-input";
import { Heading } from "@/components/common/heading";

export default function CarSearchWizard() {
  return (
    <section className="container relative mx-auto mt-[80px] md:mt-[70px]">
      <div className="absolute container inset-0">
        <Image
          src={bgTopBanner}
          alt="top banner"
          width={1240}
          height={600}
          priority
          className="object-cover w-full h-full md:rounded-[40px]"
        />
      </div>

      <div className="relative text-white flex flex-col items-center justify-center py-5 px-[20px] md:py-[35px] md:px-[105px]">
        <div className="mb-3 md:mb-5">
          <TopBadge />
        </div>

        <Heading variant="h1" className="text-center">
          Car search wizards
        </Heading>

        <div className="my-3 md:my-5 lg:my-10">
          <p className="text-center text-base md:text-[24px] leading-[100%] font-bold">
            The all-in-one platform that let&apos;s you effectively:
          </p>

          <CTAFeature />

          <p className="text-center text-lg md:text-[24px] leading-[120%] font-normal">
            and celebrate from your couch.
          </p>
        </div>

        <SearchInput />

        <p className="mt-2 md:mt-3 text-sm md:text-base font-medium flex justify-center items-center gap-1">
          Join 15000+ 4.8{" "}
          <Image src={start} alt="star" width={16} height={16} />
        </p>
      </div>
    </section>
  );
}
