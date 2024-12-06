import dynamic from "next/dynamic";
import { Suspense } from "react";

import Header from "@/components/common/header/header";
import CarSearchWizard from "@/components/sections/car-search-wizards";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";
import { Loading } from "@/components/ui/loading";

const WorkWithTheBest = dynamic(
  () => import("@/components/sections/work-with-the-best"),
);
const WhatWeOffer = dynamic(
  () => import("@/components/sections/what-we-offer"),
);
const HowItWork = dynamic(() => import("@/components/sections/how-it-work"));
const Pricing = dynamic(() => import("@/components/sections/pricing"));
const OurCustomers = dynamic(
  () => import("@/components/sections/our-customers"),
);
const FAQ = dynamic(() => import("@/components/sections/faq"));
const Footer = dynamic(() => import("@/components/common/footer"));

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <CarSearchWizard />
      <WorkWithTheBest />
      <WhatWeOffer />
      <HowItWork />
      <Pricing />
      <OurCustomers />
      <FAQ />
      <ScrollToTopButton />
      <Footer />
    </Suspense>
  );
}
