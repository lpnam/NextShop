"use client";
import { outstanding_list } from "@/store/outstanding_header";
import { useSnapshot } from "valtio";

export default function OutstandingHeader() {
  const { list } = useSnapshot(outstanding_list);
  return (
    <div className=" mt-4 w-full flex-1 grid grid-cols-2 gap-2">
      {list.map((item) => {
        return (
          <div
            key={item.index}
            className="bg-white opacity-35 flex items-center justify-center h-[full] rounded-2xl cursor-pointer hover:scale-95 transition-scale shadow-md text-black font-bold"
          >
            {item.description}
          </div>
        );
      })}
    </div>
  );
}
