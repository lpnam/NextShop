"use client";
import { ItemInfo } from "@/lib/define";
import Image from "next/image";
import MarkIcon from "@/icon/MarkIcon";
import Link from "next/link";

export default function ItemCard(props: ItemInfo) {
  return (
    <div className="item-card" key={props.key}>
      <div className="flex-grow-[6] bg-white rounded-t-md h-[160px] make-center">
        <Image
          src={props.image[0]}
          height={160}
          width={500}
          alt={props.name}
          priority
          className="h-full rounded-t-md object-scale-down text-center cursor-pointer"
        />
      </div>
      <div className="flex-grow-[4] rounded-b-md bg-slate-100 px-2 text-black flex flex-col justify-evenly">
        <h3>
          <Link href="#">{props.name}</Link>
        </h3>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-gray-600 line-through">${props.price}</span>
            <span className="font-bold">${props.price}</span>
          </div>
          <div className="p-4 cursor-pointer">
            <MarkIcon setSize={{ setHeight: 20, setWidth: 20 }} selected />
          </div>
        </div>
        <div>Rating</div>
      </div>
    </div>
  );
}
