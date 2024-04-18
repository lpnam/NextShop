"use client";

import { useState } from "react";
import SearchIcon from "@/ui/SearchIcon";
import UserIcon from "@/ui/UserIcon";
import ContactIcon from "@/ui/ContactIcon";
import SupportIcon from "@/ui/SupportIicon";

export default function Header() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="z-[999] absolute h-[8%] body-width rounded-b-md flex items-center justify-between bg-headerColor transition-shadow">
      <form
        action=""
        role="search"
        className="group h-[65%] flex-1 flex-grow-[6] flex justify-center "
      >
        <div className="group-focus-within:search-focus w-[90%] xl:ml-[10%] flex rounded-md">
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
            className=" flex-1 flex-grow-[1] rounded-r-md  focus:scale-105 bg-[#5c677d] make-center"
          >
            <SearchIcon setWidth={30} setHeight={30} />
          </button>
        </div>
      </form>

      <div className="hidden flex-1 xl:flex h-full items-center rounded-md flex-grow-[4] p-1 mx-2">
        <div className={`header-button`}>
          <ContactIcon setWidth={20} setHeight={20} />
          Contact
        </div>
        <div className={`header-button`}>
          <SupportIcon setWidth={20} setHeight={20} />
          Support
        </div>
        <div className={`header-button`}>
          <UserIcon setWidth={20} setHeight={20} />
          Your Account
        </div>
      </div>
    </div>
  );
}
