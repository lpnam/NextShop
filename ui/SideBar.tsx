"use client";
import NextLogo from "@/ui/NextLogo";
import { MouseEvent, useState } from "react";

export default function SideBar() {
  let data = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [active, setActive] = useState<String>("");

  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      if (e.target.dataset.name) setActive(e.target.dataset.name);
    }
  };

  return (
    <div className="h-screen w-1/6 rounded-r-xl bg-white bg-opacity-20 fixed p-4 flex flex-col shadow-md">
      <div className="w-full flex justify-evenly items-center">
        <NextLogo logoWidth={70} logoHeight={70} />
        <p className="bold font-bold">NEXT SHOP</p>
      </div>

      <div className="mt-10 flex-1 flex flex-col">
        {data.map((item) => {
          return (
            <div
              className={`text-center p-4 cursor-pointer hover:scale-110 rounded-md transition-scale ${
                active && active === item ? "bg-gray-700 scale-110" : ""
              }`}
              key={item}
              onClick={(e) => onClickHandler(e)}
              data-name={item}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
