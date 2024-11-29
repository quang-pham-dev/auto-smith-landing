import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("text-start font-medium", {
  variants: {
    variant: {
      h1: "text-4xl md:text-8xl leading-[100%]",
      h2: "text-2xl md:text-[55px] leading-[100%]",
      h3: "text-xl md:text-[28px] leading-[100%]",
      h4: "text-lg md:text-2xl leading-[100%]",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, ...props }, ref) => {
    const HeadingComponent = (() => {
      switch (variant) {
        case "h1":
          return "h1";
        case "h2":
          return "h2";
        case "h3":
          return "h3";
        default:
          return "h1";
      }
    })();

    return (
      <HeadingComponent
        ref={ref}
        className={cn(headingVariants({ variant, className }))}
        {...props}
      />
    );
  },
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
