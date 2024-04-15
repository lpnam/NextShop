"use client";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { banner_data } from "@/store/banner";
import { useEffect } from "react";

export default function Banner() {
  const { banners, actived_index } = useSnapshot(banner_data);
  const handlClickBanner = (index: number) => {
    banner_data.actived_index = index;
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (banner_data.actived_index < banners.length - 1) {
        banner_data.actived_index += 1;
      } else if (banner_data.actived_index === banners.length - 1) {
        banner_data.actived_index = 0;
      }
    }, 10000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    // <div className="h-dvh w-[65.666667%] absolute mx-[0.5%] left-[16.666667%]  rounded-t-xl shadow-2xl bg-slate-50 bg-opacity-15 p-1">
    <div className="relative w-full overflow-hidden">
      {banners.map((banner) => {
        if (banner.index === actived_index) {
          return (
            <Image
              src={banner.url}
              width={1920}
              height={520}
              alt={banner.name}
              key={banner.id}
              priority
              className="w-auto h-[520px] rounded-xl cursor-pointer"
            />
          );
        }
      })}
      <div className=" absolute w-full z-30 bottom-0 mb-4 flex justify-center">
        <ul className="flex justify-evenly w-[10%]">
          {banners.map((banner) => {
            return (
              <li
                key={banner.index}
                className={`w-3 h-3 rounded-full bg-white cursor-pointer hover:scale-150 transition-scale shadow-xl ${
                  banner.index === actived_index ? "bg-blue-600 scale-150" : ""
                }`}
                onClick={() => handlClickBanner(banner.index)}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
    // </div>
  );
}
