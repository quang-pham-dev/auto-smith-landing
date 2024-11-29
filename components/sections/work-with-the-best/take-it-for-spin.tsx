import Image from "next/image";

import { SecondaryButton } from "@/components/ui/secondary-button";
import { Heading } from "@/components/common/heading";
import { bgTakeItForSpin } from "@/assets";

export default function TakeItForSpin() {
  return (
    <div className="container relative mx-auto mt-10 md:mt-[70px]">
      <div className="absolute inset-0">
        <Image
          src={bgTakeItForSpin}
          alt="Take it for a spin background"
          width={1240}
          height={142}
          className="object-cover w-full h-full md:rounded-[40px]"
        />
      </div>

      <div className="relative py-8 md:py-12">
        <div className="flex flex-row justify-between items-center">
          <Heading
            variant="h2"
            className="text-white text-left leading-[100%] tracking-[-2.2px]"
          >
            Take it for a spin
          </Heading>

          <SecondaryButton className="w-auto">Grab the keys</SecondaryButton>
        </div>
      </div>
    </div>
  );
}
