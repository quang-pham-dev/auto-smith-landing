import { Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQ_COLLAPSE } from "@/constants/faq-collapse";

export default function FAQAccordion({
  items,
}: {
  items: typeof FAQ_COLLAPSE;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="my-5 md:my-[40px] space-y-5"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="[&[data-state=open]]:border-b-0"
        >
          <AccordionTrigger className="text-xl md:text-2xl leading-[120%] tracking-[-0.48px] font-medium hover:no-underline [&[data-state=open]>div>.plus]:hidden [&[data-state=open]>div>.x]:block [&>svg]:hidden">
            {item.title}
            <div className="relative w-6 h-6">
              <Plus className="plus absolute w-6 h-6" strokeWidth={1} />
              <X className="x absolute w-6 h-6 hidden" strokeWidth={1} />
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t text-lg md:text-xl text-[#757575] px-6 pt-4 pb-[30px]">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
