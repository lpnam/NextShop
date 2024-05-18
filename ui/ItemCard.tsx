"use client";
import { ItemInfo } from "@/lib/define";
import Image from "next/image";
import MarkIcon from "@/icon/MarkIcon";
import { useRouter } from "next/navigation";

interface DetailPageProps {
  item: ItemInfo;
}

export default function ItemCard({ item }: DetailPageProps) {
  const router = useRouter();
  const handleClickItem = (item_code: string) => {
    router.push(`/product/${item_code.toLowerCase()}`);
  };
  return (
    <div className={`item-card`} key={item.key}>
      <div className="flex-grow-[6] bg-white rounded-t-md h-[160px] make-center">
        <Image
          src={item.image[0]}
          height={160}
          width={500}
          alt={item.name}
          priority
          className="h-full rounded-t-md object-scale-down text-center cursor-pointer"
          onClick={() => handleClickItem(item.code_name)}
        />
      </div>
      <div className="flex-grow-[4] rounded-b-md bg-slate-100 px-2 text-black flex flex-col justify-evenly">
        <h3>
          <div
            className="cursor-pointer"
            onClick={() => handleClickItem(item.code_name)}
          >
            {item.name}
          </div>
        </h3>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-gray-600 line-through">${item.price}</span>
            <span className="font-bold">${item.price}</span>
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
