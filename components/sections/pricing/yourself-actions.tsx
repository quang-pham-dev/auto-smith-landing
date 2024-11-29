import Image from "next/image";

import { SecondaryButton } from "@/components/ui/secondary-button";
import InfoItem from "./info-item";
import { nervous, successCollaborate } from "@/assets";
import { Heading } from "@/components/common/heading";
import SadFace from "@/components/icons/sad-face";
import CheckCircleSuccess from "@/components/icons/check-circle-success";

const leftPainPoints = [
  {
    title: "Countless hours spent",
    description: "Hours spent during the car buying process",
    icon: <SadFace />,
  },
  {
    title: "Money spent on junk fees",
    description: "34% of buers paid fees they had never heard of before",
    icon: <SadFace />,
  },
  {
    title: "Not transparent",
    description: "74% of buyers say the buying process is not transparent",
    icon: <SadFace />,
  },
  {
    title: "Confusing",
    description:
      "80%+ of customers are unfamiliar with what the F&I department does, and the products they sell",
    icon: <SadFace />,
  },
  {
    title: "Frustrating negotiations",
    description:
      "45% of car buyers found it difficult to agree to a final price",
    icon: <SadFace />,
  },
  {
    title: "Dealership service",
    description: "46 NPS (Net Promoter Score) at dealership",
    icon: <SadFace />,
  },
];

const rightPainPoints = [
  {
    title: "Hassle-free, time saving approach",
    description: "You tell us what car you want, we do all the heavy lifting",
    icon: <CheckCircleSuccess />,
  },
  {
    title: "No hidden fees",
    description: "The price you see is the price you pay",
    icon: <CheckCircleSuccess />,
  },
  {
    title: "Transparency",
    description: "Communication at every step of the process",
    icon: <CheckCircleSuccess />,
  },
  {
    title: "No more haggling",
    description:
      "Let our team of experienced professionals work to get you a fair price",
    icon: <CheckCircleSuccess />,
  },
  {
    title: "Expert negotiation",
    description:
      "75+ years of car buying experience on your side to educate you",
    icon: <CheckCircleSuccess />,
  },
  {
    title: "Proven results",
    description:
      "Savings may vary based on individual circumstances, vehicle selection, market conditions, and other factors",
    icon: <CheckCircleSuccess />,
  },
  {
    title: "Additional support",
    description:
      "We serve you with help at every touchpoint - from comprehensive education on financing to handling shipping to get the car to your door",
    icon: <CheckCircleSuccess />,
  },
];

type YourselfActionsProps = {
  type?: "primary" | "secondary";
};

export default function YourselfActions({
  type = "primary",
}: YourselfActionsProps) {
  const painPoints = type === "primary" ? leftPainPoints : rightPainPoints;
  const imageSrc = type === "primary" ? nervous.src : successCollaborate.src;

  return (
    <div
      className={`p-[30px] flex flex-col ${
        type === "primary" ? "bg-[#EFF3F2]" : "bg-ternary"
      } md:rounded-[40px]`}
    >
      <div className="rounded-2xl overflow-hidden mb-8">
        <Image
          src={imageSrc}
          alt="Frustrated person during car buying process"
          width={600}
          height={300}
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-col mb-10">
        <div className="flex flex-col items-start">
          <div
            className={`flex items-center justify-center px-[15px] py-[10px] rounded-[50px] ${
              type === "primary" ? "bg-[#E1E8E7]" : "bg-[#152931]"
            }`}
          >
            <p
              className={`text-base md:text-[28px] font-normal ${
                type === "primary" ? "text-black" : "text-[#FF7E1D]"
              }`}
            >
              {type === "primary" ? "Do it yourself" : "We do it for you"}
            </p>
          </div>

          <Heading
            variant="h2"
            className={`mt-5 md:mt-[30px] pb-[30px] ${
              type === "primary" ? "text-black" : "text-white"
            } leading-[100%] tracking-[-2.2px]`}
          >
            {type === "primary" ? "Without us" : "With us"}
          </Heading>
        </div>

        <div
          className={`flex flex-col gap-4 md:gap-[30px] pt-5 md:pt-[30px] border-t ${
            type === "primary" ? "border-[#D6D6D6]" : "border-[#FFFFFF]/30"
          }`}
        >
          {painPoints.map((point) => (
            <InfoItem type={type} key={point.title} {...point} />
          ))}
        </div>
      </div>

      <SecondaryButton
        className={`self-start ${type === "primary" ? "bg-ternary hover:bg-ternary/80" : "bg-orange hover:bg-orange/80"}`}
      >
        Learn more
      </SecondaryButton>
    </div>
  );
}
