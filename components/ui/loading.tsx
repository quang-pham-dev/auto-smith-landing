import { cn } from "@/lib/utils";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function Loading({ size = "md", className, ...props }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div
      role="status"
      className={cn(
        "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
          sizeClasses[size],
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
