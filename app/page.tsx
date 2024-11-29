import CarSearchWizard from "@/components/sections/car-search-wizards";
import Header from "@/components/common/header/header";
import WorkWithTheBest from "@/components/sections/work-with-the-best";
import WhatWeOffer from "@/components/sections/what-we-offer";
import HowItWork from "@/components/sections/how-it-work";
import Pricing from "@/components/sections/pricing";
import OurCustomers from "@/components/sections/our-customers";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/common/footer";

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
      <Footer />
    </>
  );
}
