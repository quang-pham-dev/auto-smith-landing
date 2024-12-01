import dynamic from "next/dynamic";

import Header from "@/components/common/header/header";
import CarSearchWizard from "@/components/sections/car-search-wizards";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";

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
    <>
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
    </>
  );
}
