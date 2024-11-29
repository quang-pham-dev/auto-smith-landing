import { Heading } from "@/components/common/heading";

type InfoItemProps = React.HTMLAttributes<HTMLDivElement> & {
  type: "primary" | "secondary";
  title: string;
  icon: React.ReactNode;
  description: string;
};

export default function InfoItem({
  type,
  title,
  description,
  icon,
  ...props
}: InfoItemProps) {
  return (
    <div className="flex flex-col gap-[10px]" {...props}>
      <div className="flex flex-row items-center gap-3">
        {icon}
        <Heading
          variant="h3"
          className={`${type === "primary" ? "text-black" : "text-white"} text-start leading-[120%]`}
        >
          {title}
        </Heading>
      </div>
      <p
        className={`text-base md:text-[20px] font-normal leading-[100%] tracking-[-0.2px] ${type === "primary" ? "text-[#00303C]/60" : "text-white/60"}`}
      >
        {description}
      </p>
    </div>
  );
}
