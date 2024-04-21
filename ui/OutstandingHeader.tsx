"use client";
import { outstanding_list } from "@/store/outstanding_header";
import { useSnapshot } from "valtio";

export default function OutstandingHeader() {
  const { list } = useSnapshot(outstanding_list);
  return (
    <div className=" mt-[10px] w-full h-full flex-1 grid grid-cols-2 gap-2 shadow-none bg-transparent">
      {list.map((item) => {
        return (
          <div
            key={item.index}
            className="bg-outstandingColor opacity-90 make-center h-[full] rounded-2xl cursor-pointer hover:scale-95 transition-scale shadow-md text-white font-bold"
          >
            {item.description}
          </div>
        );
      })}
    </div>
  );
}
