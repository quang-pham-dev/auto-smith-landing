import React from "react";
import Image from "next/image";

import { checkCircle } from "@/assets";
import { Badge } from "@/components/ui/badge";

type OutstandingFeatureProps = {
  description: string;
};

export default function OutstandingFeature({
  description,
}: OutstandingFeatureProps) {
  return (
    <Badge className="text-white bg-secondary gap-2 px-3 md:px-[15px] py-2 md:py-2.5">
      <Image
        src={checkCircle}
        alt="outstanding feature"
        width={16}
        height={16}
        className="md:w-[20px] md:h-[20px]"
      />
      <p className="text-black text-xs sm:text-sm md:text-base lg:text-xl font-normal text-wrap">
        {description}
      </p>
    </Badge>
  );
}
