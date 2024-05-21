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
    <div className="w-full h-full mb-1 md:flex justify-center gap-1 ssm:block">
      <div className="flex-grow-[3] md:min-w-[50%] xl:min-w-[30%] flex flex-col transition-slide ssm:h-[50%] md:h-full">
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
        <div className="ssm:hidden flex-grow-[2] md:flex">
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
      <div className="flex-grow-[7] text-black rounded-md p-4 flex flex-col ssm:gap-[1.5em] pt-6 md:border-l-2 md:gap-[2.5em] xl:gap-[3.5em] border-gray-500 ml-2">
        <h1 className="font-bold text-2xl">{item.name}</h1>
        <div className="flex gap-2">
          <h2 className="font-bold text-3xl">${item.price}</h2>
          <h3 className="font-bold text-xl line-through text-gray-600">
            ${item.price}
          </h3>
        </div>
        <div className="flex ssm:flex-col md:flex-row gap-6">
          <div className="cursor-pointer rounded-full bg-green-600 border p-4 make-center md:w-[50%] md:min-w-[150px]">
            Buy Now
          </div>
          <div className="cursor-pointer rounded-full bg-red-600 border p-4 make-center md:w-[50%] md:min-w-[150px]">
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
