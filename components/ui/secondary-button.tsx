import { forwardRef } from "react";

import { ArrowRight } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SecondaryButtonProps extends Omit<ButtonProps, "variant"> {
  showArrow?: boolean; // Optional prop to control arrow visibility
}

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, children, showArrow = true, ...props }, ref) => {
    return (
      <Button
        variant="destructive"
        className={cn(
          "group relative flex items-center justify-between gap-2 rounded-full bg-orange pl-5 pr-3 py-2.5 text-lg font-medium text-white transition-all",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        {showArrow && (
          <div className="bg-white rounded-full p-1.5 transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5 text-black" />
          </div>
        )}
      </Button>
    );
  },
);

SecondaryButton.displayName = "SecondaryButton";

export { SecondaryButton };
