"use client";

import TopFeatureBadge from "@/components/common/top-feature-badge";
import { SecondaryButton } from "@/components/ui/secondary-button";
import FlatFeeCard from "./flat-fee-card";
import YourselfActions from "./yourself-actions";
import { Heading } from "@/components/common/heading";

export default function Pricing() {
  return (
    <section id="pricing" className="container mt-10 md:mt-[125px]">
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="w-full md:w-[361px]">
          <div className="flex justify-start">
            <TopFeatureBadge text="Pricing" />
          </div>
          <Heading
            variant="h2"
            className="mt-2 md:mt-[25px] mb-5 md:mb-[50px] text-start leading-[100%] tracking-[-2.2px]"
          >
            How much does it cost?
          </Heading>

          <SecondaryButton>Get started</SecondaryButton>
        </div>

        <FlatFeeCard />
      </div>

      <div className="md:mt-[100px] grid grid-cols-1 md:grid-cols-2 md:gap-5">
        <YourselfActions />
        <YourselfActions type="secondary" />
      </div>
    </section>
  );
}
