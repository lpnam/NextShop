"use client";
import NextLogo from "@/logo/NextLogo";
import { MouseEvent, useState } from "react";
import { component_list } from "@/store/items";
import { useSnapshot } from "valtio";
import Image from "next/image";

type BasicSearchoption = "brand" | "component";

export default function SideBar() {
  let brand = [
    ["Asus", "A"],
    ["MSI", "M"],
    ["Corsair", "C"],
    ["LG", "G"],
    ["Aorus", "B"],
    ["Logitech", "L"],
    ["Razer", "R"],
    ["DELL", "D"],
  ];
  const { components } = useSnapshot(component_list);
  const [active, setActive] = useState<string>("");
  const [show, setShow] = useState<string>("");
  const [basicSearch, setBasicSearch] =
    useState<BasicSearchoption>("component");

  const onClickHandler = (name: string) => {
    if (name) {
      setActive(name);
    }
  };

  const onClickShowHandler = (name: string) => {
    if (name && show !== name) {
      setShow(name);
    } else if (name && show === name) setShow("blank");
    setActive("");
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
    <div className="h-full w-1/6 rounded-r-xl bg-sidebarColor fixed p-4 flex flex-col shadow-md">
      <div className="w-full flex justify-evenly items-center">
        <NextLogo setWidth={70} setHeight={70} />
        <p className="bold font-bold">NEXT SHOP</p>
      </div>

      <div className=" mt-5 flex flex-wrap gap-2">
        <div
          className={`basic-search ${
            basicSearch === "brand" ? "bg-sky-900 scale-95" : "bg-sky-700"
          }`}
          data-type="brand"
          onClick={(e) => onClickSearchBasicHandler(e)}
        >
          Brand
        </div>
        <div
          className={`basic-search ${
            basicSearch === "component" ? "bg-sky-900 scale-95" : "bg-sky-700"
          }`}
          data-type="component"
          onClick={(e) => onClickSearchBasicHandler(e)}
        >
          Component
        </div>
      </div>
      <div className="mt-5 flex-1 flex flex-col justify-start ">
        {components.map((item, index) => {
          let currentItem = item.name;
          return (
            <div key={index}>
              <div
                className={`item-tag font-bold`}
                key={currentItem}
                onClick={() => onClickShowHandler(currentItem)}
              >
                <div className="flex gap-4 justify-start">
                  <Image
                    src={item.icon}
                    width={30}
                    height={30}
                    alt={currentItem}
                    key={currentItem}
                    priority
                  />
                  {currentItem}
                </div>
                {item.child.length > 0 ? (
                  <Image
                    src="/icon/rightArrow.png"
                    width={20}
                    height={20}
                    alt="arrow"
                    key="arrow"
                    priority
                    className={`transition-fast ${
                      show === currentItem ? "rotate-90" : ""
                    }`}
                  />
                ) : (
                  ""
                )}
              </div>
              <div
                className={`${
                  show === currentItem ? "" : "hidden"
                } transition-show`}
              >
                {item.child.length > 0 &&
                  item.child.map((each, i) => {
                    return (
                      <div
                        className={`item-tag text-sm make-center ${
                          active && active === each
                            ? "bg-onSelectColor scale-110"
                            : ""
                        }`}
                        key={i}
                        onClick={() => onClickHandler(each)}
                      >
                        {each}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
