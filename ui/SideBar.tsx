"use client";
import { MouseEvent, useState } from "react";
import { component_list } from "@/store/items";
import { useSnapshot } from "valtio";
import Image from "next/image";

type BasicSearchoption = "brand" | "component";

export default function SideBar() {
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
      <div className="w-full flex justify-center md:justify-start items-center gap-4">
        <div className=" w-[55px] h-[55px] rounded-full shadow-xl cursor-pointer">
          <Image
            width={55}
            height={55}
            alt="user-avatar"
            src="/icon/user.png"
            className="min-w-[44px]"
          />
        </div>
        <div className="hidden md:block font-bold text-nowrap text-2xl">
          <p className="cursor-pointer hover:underline">Login</p>
          <p className="cursor-pointer text-sm font-normal hover:underline">
            Sign Up
          </p>
        </div>
      </div>

      <div className=" mt-2 flex flex-wrap gap-2 hover:shadow-hoverBox transition-fast">
        HIHI
      </div>
      <div className="mt-2 flex-1 flex flex-col justify-start ">
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
