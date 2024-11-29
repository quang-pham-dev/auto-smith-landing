import Image from "next/image";

import { searchInput } from "@/assets";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export default function SearchInput() {
  return (
    <div className="relative w-full max-w-[490px] px-4 sm:px-0">
      <div className="relative flex items-center">
        <Image
          src={searchInput}
          alt="Search"
          width={20}
          height={20}
          className="absolute left-4 z-10"
        />
        <Input
          type="text"
          placeholder="Search for a vehicle (eg. Audi A4)"
          className="w-full rounded-full bg-white pl-12 pr-[110px] py-3 text-black"
        />
        <Button className="absolute right-2 rounded-full bg-[#FF6B1A] h-8 px-2.5 py-1 text-white hover:bg-[#FF6B1A]/80">
          Search
        </Button>
      </div>
    </div>
  );
}
