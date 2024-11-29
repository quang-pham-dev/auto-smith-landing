import Link from "next/link";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { Heading } from "@/components/common/heading";

export default function ContactUs() {
  return (
    <>
      <div className="text-center">
        <p className="text-base md:text-xl font-normal">
          Have more questions?{" "}
          <Link href="#" className="underline underline-offset-4">
            Contact Us
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center text-center mt-5 md:mt-[100px]">
        <Heading variant="h2" className="mt-4 md:mt-[25px] md:leading-[100%]">
          Get started for free
        </Heading>
        <Heading
          variant="h3"
          className="mt-4 md:mt-[25px] font-normal tracking-[-0.56px]"
        >
          Take it for a spin today. No card required
        </Heading>

        <SecondaryButton className="mt-[30px] md:mt-[50px]">
          Test drive?
        </SecondaryButton>
      </div>
    </>
  );
}
