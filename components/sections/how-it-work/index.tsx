"use client";

import TopFeatureBadge from "@/components/common/top-feature-badge";
import FilterIcon from "@/components/icons/filter";
import BellIcon from "@/components/icons/bell";
import UmbrellaIcon from "@/components/icons/umbrella";
import FindIcon from "@/components/icons/find";
import NegotiateIcon from "@/components/icons/negotiate";
import NotesIcon from "@/components/icons/notes";
import CheckCircleIcon from "@/components/icons/check-circle";
import NoInspectIcon from "@/components/icons/no-inspect";
import HowItWorkCard from "./how-it-word-card";
import HowItWorkTag from "./how-it-work-tag";
import PricingIcon from "@/components/icons/pricing";
import { Heading } from "@/components/common/heading";

const howItWorks = [
  {
    id: 1,
    icon: <FilterIcon />,
    title: "We help you filter - Data driven tools",
  },
  {
    id: 2,
    icon: <BellIcon />,
    title: "We keep you posted on our findings and inspections",
  },
  {
    id: 3,
    icon: <UmbrellaIcon />,
    title: "We negotiate, register, finance and deliver it to you",
  },
];

const howItWorksTags = [
  {
    id: 1,
    icon: <FindIcon />,
    text: "We find it",
  },
  {
    id: 2,
    icon: <NegotiateIcon />,
    text: "We negotiate it",
  },
  {
    id: 3,
    icon: <NoInspectIcon />,
    text: "No hidden fees",
  },
  {
    id: 4,
    icon: <PricingIcon />,
    text: "Transparent pricing",
  },
  {
    id: 5,
    icon: <CheckCircleIcon />,
    text: "Get a fair deal",
  },
  {
    id: 6,
    icon: <NotesIcon />,
    text: "Finalize the deal",
  },
];

export default function HowItWork() {
  return (
    <section
      id="how-it-works"
      className="container flex flex-col items-center justify-center mt-10 md:mt-24"
    >
      <TopFeatureBadge text="How it works" />
      <Heading
        variant="h2"
        className="mt-2 md:mt-6 leading-[100%] tracking-[-2.2px]"
      >
        Our simple process
      </Heading>

      <div className="mt-5 md:mt-[70px] md:mb-[50px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
          {howItWorks.map((work) => (
            <HowItWorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>

      <div className="md:w-[800px] mt-5 flex flex-row flex-wrap items-center md:justify-center justify-start gap-5">
        {howItWorksTags.map((tag) => (
          <HowItWorkTag key={tag.id} {...tag} />
        ))}
      </div>
    </section>
  );
}
