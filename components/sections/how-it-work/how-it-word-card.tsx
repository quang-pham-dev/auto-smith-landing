import { Heading } from "@/components/common/heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type HowItWorkCardProps = {
  icon: React.ReactNode;
  title: string;
};

export default function HowItWorkCard({ icon, title }: HowItWorkCardProps) {
  return (
    <Card
      className="w-full h-[140px] md:min-h-[180px] bg-[#FFF6F2] p-4 lg:p-5 
      flex flex-col items-start justify-between border-none rounded-[32px]"
    >
      <CardHeader className="p-0">
        <div className="rounded-full flex items-center justify-center w-12 h-12 bg-white shadow-sm">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Heading
          variant="h3"
          className="text-start leading-[120%] tracking-[-0.56px] line-clamp-3 overflow-hidden"
        >
          {title}
        </Heading>
      </CardContent>
    </Card>
  );
}
