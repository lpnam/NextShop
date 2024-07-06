"use client";
import { useState } from "react";
import SearchIcon from "@/icon/SearchIcon";
import NextLogo from "@/logo/NextLogo";
import ContactIcon from "@/icon/ContactIcon";
import SupportIcon from "@/icon/SupportIicon";
import { useRouter } from "next/navigation";

export default function Header() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(`/search?opt=${search}`);
  };

  return (
    <div className="z-[888] h-[5em] w-full rounded-b-md flex items-center justify-between bg-headerColor transition-shadow p-1">
      <div
        className="flex-1 flex h-full items-center justify-center flex-grow-[2] xl:flex-grow-[3] gap-2 py-1 mx-1 hover:cursor-pointer"
        onClick={() => router.push("/")}
      >
        <NextLogo setWidth={55} setHeight={55} />
        <span className="hidden xl:block font-bold text-2xl">NEXT SHOP</span>
      </div>
      <form
        action=""
        role="search"
        className="group ssm:h-[50%] sm:h-[65%] flex-1 flex-grow-[8] xl:flex-grow-[5] flex justify-start "
      >
        <div className="group-focus-within:search-focus ssm:w-[25%] sm:w-[90%]  flex rounded-md">
          <input
            className="focus:search-focus rounded-l-md h-full text-black px-2  bg-[#ffffff] placeholder-[#3C3C3C] flex-1 flex-grow-[9]"
            type="text"
            name="name-search"
            id="id-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in Next"
          />
          <button
            type="submit"
            className=" flex-1 flex-grow-[1] rounded-r-md p-[0.2em] focus:scale-105 bg-[#5c677d] make-center"
            onClick={(e) => handleClick(e)}
          >
            <SearchIcon setWidth={30} setHeight={30} />
          </button>
        </div>
      </form>

      <div className="hidden flex-1 xl:flex h-full items-center rounded-md flex-grow-[2] p-1 mx-2">
        <div className={`header-button`}>
          <ContactIcon setWidth={20} setHeight={20} />
          Contact
        </div>
        <div className={`header-button`}>
          <SupportIcon setWidth={20} setHeight={20} />
          Support
        </div>
      </div>
    </div>
  );
}
