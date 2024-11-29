import { Heading } from "@/components/common/heading";
import { FAQ_COLLAPSE } from "@/constants/faq-collapse";
import TopFeatureBadge from "@/components/common/top-feature-badge";
import FAQAccordion from "./faq-accordion";
import ContactUs from "./contact-us";

export default function FAQ() {
  return (
    <section id="why-trust-us" className="container mt-10 md:mt-[125px]">
      <div className="flex flex-col items-center">
        <TopFeatureBadge text="FAQ" />
        <Heading variant="h2" className="mt-4 md:mt-[25px] tracking-[-2.2px]">
          Questions asked often
        </Heading>
      </div>

      <FAQAccordion items={FAQ_COLLAPSE} />

      <ContactUs />
    </section>
  );
}
