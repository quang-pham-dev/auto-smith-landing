"use client";

import TopFeatureBadge from "@/components/common/top-feature-badge";
import EffectiveIcon from "@/components/icons/effective";
import GuardIcon from "@/components/icons/guard";
import HourSaveIcon from "@/components/icons/hour-save";
import PersonalIcon from "@/components/icons/personal";
import ReportIcon from "@/components/icons/report";
import SimplePriceIcon from "@/components/icons/simple-price";
import { Heading } from "@/components/common/heading";
import WhatWeOfferCard from "./what-we-offer-card";

const whatWeOffers = [
  {
    id: 1,
    icon: <PersonalIcon />,
    title: "Hyper-personalized search",
    description: "Real world filters",
  },
  {
    id: 2,
    icon: <SimplePriceIcon />,
    title: "Flat fee, no strings attached",
    description: "One simple price—no hidden surprises",
  },
  {
    id: 3,
    icon: <HourSaveIcon />,
    title: "Save time and money",
    description: "67+ Hours saved",
  },
  {
    id: 4,
    icon: <GuardIcon />,
    title: "Only pay when we find a car that meets your preference",
    description: "",
  },
  {
    id: 5,
    icon: <EffectiveIcon />,
    title: "Our expert negotiators go to work for you",
    description: "Average R18k savings",
  },
  {
    id: 6,
    icon: <ReportIcon />,
    title: "Super comprehensive inspection report",
    description: "See example here",
  },
];

export default function WhatWeOffer() {
  return (
    <section
      id="what-we-offer"
      className="container flex flex-col items-start justify-center mt-10 md:mt-24"
    >
      <TopFeatureBadge text="What we offer" />
      <Heading variant="h2" className="mt-5 md:mt-10 ">
        All the bells and whistles
      </Heading>
      <div className="mt-5 md:mt-[100px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start gap-5 md:gap-[70px]">
        {whatWeOffers.map((offer) => (
          <WhatWeOfferCard key={offer.id} {...offer} />
        ))}
      </div>
    </section>
  );
}
