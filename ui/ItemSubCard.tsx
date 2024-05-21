"use client";
import { ItemInfo } from "@/lib/define";
import Image from "next/image";
import MarkIcon from "@/icon/MarkIcon";
import { useRouter } from "next/navigation";

interface DetailPageProps {
  item: ItemInfo;
}

export default function ItemSubCard({ item }: DetailPageProps) {
  const router = useRouter();
  const handleClickItem = (item_code: string) => {
    router.push(`/product/${item_code.toLowerCase()}`);
  };
  return (
    <div
      className={`item-sub-card mb-1 transition-scale hover:scale-[1.01] h-auto`}
      key={item.key}
    >
      <div className="flex-grow-[4] max-w-[40%] bg-white rounded-l-md relative object-contain make-center">
        <Image
          src={item.image[0]}
          // fill={true}
          alt={item.name}
          layout="responsive"
          width={16} // Aspect ratio
          height={9} // Aspect ratio
          priority
          className="rounded-l-md cursor-pointer"
          onClick={() => handleClickItem(item.code_name)}
        />
      </div>
      <div className="flex-grow-[6] max-w-[60%] rounded-r-md bg-slate-100 px-2 text-black flex flex-col justify-evenly p-1">
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
