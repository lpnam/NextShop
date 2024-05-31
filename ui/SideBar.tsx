"use client";
import { useState } from "react";
import { component_list } from "@/store/items";
import { useSnapshot } from "valtio";
import Image from "next/image";
import MarkIcon from "@/icon/MarkIcon";
import SettingIcon from "@/icon/SettingIcon";
import CartIcon from "@/icon/CartIcon";
import { useRouter } from "next/navigation";
import { useCountItems } from "@/contexts/CountItems";

export default function SideBar() {
  const { components } = useSnapshot(component_list);
  const [active, setActive] = useState<string>("");
  const { countItem } = useCountItems();
  const [show, setShow] = useState<string>("");
  const router = useRouter();
  const onClickHandler = (pagename: string, name: string) => {
    if (name) {
      setActive(name);
    }
    router.push(`/${pagename.toLowerCase()}/${name.toLowerCase()}`);
  };

  const onClickShowHandler = (name: string, child: number) => {
    if (window.innerWidth < 768 || child === 0)
      router.push(`/${name.toLowerCase()}`);
    else {
      if (name && show !== name) {
        setShow(name);
      } else if (name && show === name) setShow("blank");
      setActive("");
    }
  };

  // const onClickSearchBasicHandler = (e: MouseEvent<HTMLDivElement>) => {
  //   if (e.target instanceof HTMLDivElement) {
  //     if (
  //       e.target.dataset.type === "brand" ||
  //       e.target.dataset.type === "component"
  //     )
  //       setBasicSearch(e.target.dataset.type);
  //   }
  // };

  return (
    <div className="h-full w-1/6 rounded-r-xl bg-sidebarColor fixed p-4 flex flex-col shadow-md">
      <div className="w-full flex justify-center xl:justify-start items-center gap-4">
        <div className=" w-[55px] h-[55px] rounded-full shadow-xl cursor-pointer">
          <Image
            width={55}
            height={55}
            alt="user-avatar"
            src="/icon/user.png"
            className="min-w-[44px]"
          />
        </div>
        <div className="hidden xl:block font-bold text-nowrap text-2xl">
          <p className="cursor-pointer hover:underline">Login</p>
          <p className="cursor-pointer text-sm font-normal hover:underline">
            Sign Up
          </p>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-2 justify-evenly items-center">
        <div className="user-buttons">
          <SettingIcon setHeight={25} setWidth={25} />
        </div>
        <div className="user-buttons">
          <MarkIcon setSize={{ setHeight: 25, setWidth: 25 }} />
        </div>
        <div
          className="user-buttons relative"
          onClick={() => router.push("/cart")}
        >
          <CartIcon setHeight={25} setWidth={25} />
          <div className="absolute top-0 right-0 text-[0.7rem] rounded-full w-[17px] h-[17px] text-center bg-red-500">
            {countItem}
          </div>
        </div>
      </div>
      <div className="mt-4 flex-1 flex flex-col justify-start">
        {components.map((item, index) => {
          let currentItem = item.name;
          return (
            <div key={index}>
              <div
                className={`item-tag font-bold`}
                key={currentItem}
                onClick={() =>
                  onClickShowHandler(currentItem, item.child.length)
                }
              >
                <div className="flex gap-4 justify-start">
                  <Image
                    src={item.icon}
                    width={30}
                    height={30}
                    alt={currentItem}
                    key={currentItem}
                    priority
                    className="min-w-[25px]"
                  />
                  <span className="hidden md:flex">{currentItem}</span>
                </div>
                {item.child.length > 0 ? (
                  <Image
                    src="/icon/rightArrow.png"
                    width={20}
                    height={20}
                    alt="arrow"
                    key="arrow"
                    priority
                    className={`hidden xl:block transition-fast ${
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
                        onClick={() => onClickHandler(item.name, each)}
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
