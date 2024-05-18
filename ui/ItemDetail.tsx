"use client";
import { ItemInfo } from "@/lib/define";
import Image from "next/image";
import { useState } from "react";

interface DetailPageProps {
  item: ItemInfo;
}

export default function ItemDetail({ item }: DetailPageProps) {
  const [iindex, setIIndex] = useState<number>(0);
  const handleClickImage = (item_index: number) => {
    setIIndex(item_index);
  };

  return (
    <div className="w-full h-full mb-1 flex justify-center gap-1">
      <div className="flex-grow-[3] min-w-[30%] flex flex-col ">
        <div className="flex-grow-[8] relative object-contain mb-1">
          <Image
            src={item.image[iindex]}
            fill={true}
            alt={item.name}
            priority
            className="cursor-pointer rounded-md"
            sizes="(min-width: 768px) 100vw"
          />
        </div>
        <div className="flex-grow-[2] flex">
          {item.image.map((each: string, index: number) => {
            return (
              <div
                className={`flex-grow-[2] relative rounded-md object-contain max-w-[25%] ${
                  iindex === index ? "border-blue-900 border-[2px]" : ""
                } ${index !== item.image.length - 1 ? "mr-1" : ""}`}
                key={index}
              >
                <Image
                  src={each}
                  fill={true}
                  alt={item.name}
                  priority
                  className={`cursor-pointer rounded-md`}
                  onClick={() => handleClickImage(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-grow-[7] text-black rounded-md p-4 flex flex-col gap-10 pt-6 border-l-2 border-gray-500 ml-2">
        <h1 className="font-bold text-2xl">{item.name}</h1>
        <div className="flex gap-2">
          <h2 className="font-bold text-3xl">${item.price}</h2>
          <h3 className="font-bold text-xl line-through text-gray-600">
            ${item.price}
          </h3>
        </div>
        <div className="flex gap-6">
          <div className="cursor-pointer rounded-md bg-green-600 border p-4 make-center">
            Buy Now
          </div>
          <div className="cursor-pointer rounded-md bg-red-600 border p-4 make-center">
            Add to Cart
          </div>
        </div>
        <div>
          <h3>
            Product Code Name:
            <span className="font-bold"> {item.code_name}</span>
          </h3>
        </div>
        <h2>Rating</h2>
      </div>
    </div>
  );
}
