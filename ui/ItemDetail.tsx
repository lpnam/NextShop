"use client";
import { ItemInfo } from "@/lib/define";
import Image from "next/image";
import { useState } from "react";

export default function ItemDetail(props: ItemInfo) {
  const [iindex, setIIndex] = useState<number>(0);
  const handleClickImage = (item_index: number) => {
    setIIndex(item_index);
  };

  return (
    <div className="body-container h-auto px-1">
      <div className="h-[500px] p-4 rounded-md border bg-slate-300 mb-1 flex justify-center gap-1">
        <div className="flex-grow-[3] min-w-[30%] border flex flex-col ">
          <div className="flex-grow-[8] border relative object-contain">
            <Image
              src={props.image[iindex]}
              fill={true}
              alt={props.name}
              priority
              className="cursor-pointer rounded-md"
              sizes="(min-width: 768px) 100vw"
            />
          </div>
          <div className="flex-grow-[2] flex">
            {props.image.map((each: string, index: number) => {
              return (
                <div
                  className={`border flex-grow relative rounded-md object-contain ${
                    iindex === index ? "border-blue-900 border-[2px]" : ""
                  }`}
                  key={index}
                >
                  <Image
                    src={each}
                    fill={true}
                    alt={props.name}
                    priority
                    className={`cursor-pointer rounded-md `}
                    onClick={() => handleClickImage(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-grow-[7] text-black border rounded-md p-4 flex flex-col gap-6">
          <h1 className="font-bold text-2xl">{props.name}</h1>
          <div className="flex gap-8">
            <h2 className="font-bold text-3xl">${props.price}</h2>
            <h3 className="font-bold text-2xl line-through text-gray-600">
              ${props.price}
            </h3>
          </div>
          <div className="flex gap-4">
            <div className="cursor-pointer rounded-md bg-gray-600 border p-4 make-center">
              Buy Now
            </div>
            <div className="cursor-pointer rounded-md bg-gray-600 border p-4 make-center">
              Add to Cart
            </div>
          </div>
          <div>
            <h3>
              Product Code Name:
              <span className="font-bold"> {props.code_name}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="h-[500px] rounded-md border mb-1 flex gap-1">
        <div className="rounded-md flex-grow-[7] bg-black"></div>
        <div className="rounded-md bg-slate-300 flex-grow-[3]"></div>
      </div>
    </div>
  );
}
