import { Badge } from "@/components/ui/badge";

type TopFeatureBadgeProps = {
  text: string;
};

export default function TopFeatureBadge({ text }: TopFeatureBadgeProps) {
  return (
    <Badge className="flex justify-center w-fit bg-secondary text-black px-4 py-2 rounded-full items-center gap-2">
      <div className="w-2 h-2 bg-orange rounded-full" />
      <p className="md:text-base text-sm font-normal">{text}</p>
    </Badge>
  );
}
