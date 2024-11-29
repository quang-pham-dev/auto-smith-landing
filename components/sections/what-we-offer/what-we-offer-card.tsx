import { Heading } from "@/components/common/heading";

type WhatWeOfferCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function WhatWeOfferCard({
  icon,
  title,
  description,
}: WhatWeOfferCardProps) {
  return (
    <div className="flex flex-col items-start justify-center max-w-[400px]">
      {icon}
      {title && (
        <Heading
          variant="h3"
          className="mt-6 mb-5 text-start leading-[100%] tracking-[-0.56px]"
        >
          {title}
        </Heading>
      )}
      {description && (
        <p className="text-base md:text-[20px] text-gray-500 text-start leading-[100%] tracking-[-0.2px] line-clamp-2 overflow-hidden">
          {description}
        </p>
      )}
    </div>
  );
}
