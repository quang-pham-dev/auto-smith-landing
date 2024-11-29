import { ReactNode } from "react";

type HowItWorkTagProps = {
  icon: ReactNode;
  text: string;
};

export default function HowItWorkTag({ icon, text }: HowItWorkTagProps) {
  return (
    <div className="flex justify-center items-center gap-[10px] px-5 py-2 rounded-[50px] bg-secondary">
      {icon}
      <p className="text-sm font-normal">{text}</p>
    </div>
  );
}
