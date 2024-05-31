"use client";
import { useCountItems } from "@/contexts/CountItems";
import { List } from "@/lib/define";
import Image from "next/image";

interface DetailPageProps {
  item: List;
  key: string;
}

export default function BuyListItemCard({ item }: DetailPageProps) {
  //   const handleAddItem = (name: string, price: string) => {
  //     addItem(name, price);
  //   };

  return (
    <div
      className={`item-sub-card mb-1 transition-scale hover:scale-[1.01] h-auto`}
    >
      <div className="flex-grow-[4] max-w-[40%] bg-white rounded-l-md relative object-contain make-center">
        <Image
          src={item.image}
          // fill={true}
          alt={item.name}
          layout="responsive"
          width={16} // Aspect ratio
          height={9} // Aspect ratio
          priority
          className="rounded-l-md cursor-pointer"
        />
      </div>
      <div className="flex-grow-[6] max-w-[60%] rounded-r-md bg-slate-100 px-2 text-black flex flex-col justify-evenly p-1">
        <h3>
          <div className="cursor-pointer">{item.name}</div>
        </h3>
        <div className="flex justify-between">
          <span className="font-bold">${item.price}</span>
        </div>
        <div>Rating</div>
      </div>
    </div>
  );
}
