import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { checkCircle } from "@/assets";
export function TopBadge() {
  return (
    <Badge className="bg-secondary text-secondary-foreground px-1.5 lg:px-4 py-1.5 lg:py-2.5 gap-2">
      <Image
        src={checkCircle}
        width={17}
        height={17}
        alt="checky"
        className="w-4 h-4 lg:w-5 lg:h-5"
      />

      <p className="text-center font-normal text-xs lg:text-base">
        Always affordable & Always Roadworthy
      </p>
    </Badge>
  );
}
