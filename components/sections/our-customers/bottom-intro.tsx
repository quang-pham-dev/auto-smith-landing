import Image from "next/image";

import { SecondaryButton } from "@/components/ui/secondary-button";
import { Heading } from "@/components/common/heading";
import WhatsAppIcon from "@/components/icons/whats-app";
import { bgBottomOurCustomer, ourCustomers5 } from "@/assets";

export default function BottomIntro() {
  return (
    <div className="relative container mx-auto mt-10 md:mt-[70px]">
      <div className="mx-auto absolute inset-0">
        <Image
          src={bgBottomOurCustomer}
          alt="Bottom intro background"
          width={1240}
          height={425}
          className="object-cover w-full h-full md:rounded-[40px]"
        />
      </div>

      <div className="relative py-8 md:py-[57px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-start justify-center gap-6 md:gap-[50px]">
            <Heading
              variant="h2"
              className="w-full md:w-[440px] lg:w-[485px] text-start text-white leading-[100%] tracking-[-2.2px]"
            >
              Get started now with a better car buying experience
            </Heading>

            <div className="flex flex-row items-center justify-center gap-3">
              <div className="p-2 flex items-center justify-center rounded-full bg-white">
                <WhatsAppIcon />
              </div>
              <SecondaryButton className="w-auto">WhatsApp us</SecondaryButton>
            </div>
          </div>
          <Image
            src={ourCustomers5}
            width={400}
            height={315}
            alt="Our customers"
            className="object-cover w-full h-full  rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
