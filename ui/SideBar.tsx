"use client";
import NextLogo from "@/ui/NextLogo";
import { MouseEvent, useState } from "react";

type BasicSearchoption = "brand" | "component";

export default function SideBar() {
  let brand = [
    ["Asus", "A"],
    ["MSI", "M"],
    ["Colorful", "C"],
    ["Gigabyte", "G"],
    ["EVGA", "E"],
    ["Logitech", "L"],
    ["Razer", "R"],
    ["DELL", "D"],
  ];
  const [active, setActive] = useState<String>("");
  const [basicSearch, setBasicSearch] =
    useState<BasicSearchoption>("component");

  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      if (e.target.dataset.name) setActive(e.target.dataset.name);
    }
  };

  const onClickSearchBasicHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      if (
        e.target.dataset.type === "brand" ||
        e.target.dataset.type === "component"
      )
        setBasicSearch(e.target.dataset.type);
    }
  };

  return (
    <div className="h-screen w-1/6 rounded-r-xl bg-sidebarColor fixed p-4 flex flex-col shadow-md">
      <div className="w-full flex justify-evenly items-center">
        <NextLogo setWidth={70} setHeight={70} />
        <p className="bold font-bold">NEXT SHOP</p>
      </div>

      <div className=" mt-5 flex gap-2">
        <div
          className={`basic-search ${
            basicSearch === "brand" ? "bg-sky-900 scale-95" : "bg-sky-700"
          }`}
          data-type="brand"
          onClick={(e) => onClickSearchBasicHandler(e)}
        >
          Search with brand
        </div>
        <div
          className={`basic-search ${
            basicSearch === "component" ? "bg-sky-900 scale-95" : "bg-sky-700"
          }`}
          data-type="component"
          onClick={(e) => onClickSearchBasicHandler(e)}
        >
          Search with component
        </div>
      </div>

      <div className="mt-5 flex-1 flex flex-col">
        {brand.map((item) => {
          let currentItem = basicSearch === "component" ? item[1] : item[0];
          return (
            <div
              className={`text-center p-4 cursor-pointer hover:scale-110 rounded-md transition-scale ${
                active && active === currentItem
                  ? "bg-onSelectColor scale-110"
                  : ""
              }`}
              key={currentItem}
              onClick={(e) => onClickHandler(e)}
              data-name={currentItem}
            >
              {currentItem}
            </div>
          );
        })}
      </div>
    </div>
  );
}
