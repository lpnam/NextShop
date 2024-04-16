"use client";

import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="z-[999] fixed h-[8%] border body-width rounded-b-md flex items-center justify-between bg-headerColor">
      <form action="" className="h-[45%] flex-1 border">
        <input
          className="rounded-md h-full text-black px-2 w-[80%] ml-[10%]"
          type="text"
          name="name-search"
          id="id-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search in Next"
        />
      </form>
      <div className="flex-1 flex justify-evenly border h-full items-center rounded-md">
        <div className="">Support</div>
        <div className="">Your Account</div>
        <div className="">Cart</div>
      </div>
    </div>
  );
}
