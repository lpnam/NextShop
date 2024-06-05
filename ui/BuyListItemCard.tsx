"use client";
import { useCountItems } from "@/contexts/CountItems";
import { useState, useEffect } from "react";
import { List } from "@/lib/define";
import Image from "next/image";

interface DetailPageProps {
  item: List;
}

export default function BuyListItemCard({ item }: DetailPageProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const itemlist = useCountItems();

  useEffect(() => {
    setQuantity(Number(item.quantity));
  }, []);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let new_quantity: string = e.target.value.replace(/[^0-9]/g, "");
    if (new_quantity === "") new_quantity = "1";
    itemlist.updateItemQuantity(item.name, new_quantity, item.price);
    setQuantity(Number(new_quantity));
  };

  return (
    <div
      className={`rounded-md w-full flex flex-row shadow-md max-h-[180px] mb-2 relative`}
    >
      <div className="flex-grow-[1.5] max-w-[15%] rounded-l-md relative make-center p-1">
        <Image
          src={item.image}
          // fill={true}
          alt={item.name}
          layout="responsive"
          width={16} // Aspect ratio
          height={9} // Aspect ratio
          priority
          className="rounded-l-md cursor-pointer object-scale-down"
        />
      </div>
      <div className="flex-grow-[8.5] max-w-[85%] rounded-r-md px-2 text-black flex flex-col justify-evenly p-1">
        <h3>
          <div className="cursor-pointer">{item.name}</div>
        </h3>
        <div className="flex justify-between">
          <span className="font-bold">${item.price}</span>
          <div className="shadow-md flex">
            <div
              className="w-[25px] cursor-pointer text-center rounded-l-md bg-green-300"
              onClick={() => {
                setQuantity((prev) => prev + 1);
                itemlist.addItem(item);
              }}
            >
              +
            </div>
            <input
              className="w-[60px] text-center"
              type="text"
              name="quantity"
              id="item-quantity"
              value={quantity}
              onChange={(e) => handleOnchange(e)}
            />
            <div
              className="w-[25px] cursor-pointer text-center rounded-r-md bg-red-300"
              onClick={() => {
                if (quantity === 0) setQuantity(0);
                else setQuantity((prev) => prev - 1);
                itemlist.removeItem(false, item.name, item.price);
              }}
            >
              -
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[50px] w-[50px] bg-white bg-opacity-50 rounded-tr-md rounded-bl-md text-black cursor-pointer make-center text-xl hover:scale-95 transition-scale"
        onClick={() => {
          itemlist.removeItem(true, item.name, item.price);
        }}
      >
        X
      </div>
    </div>
  );
}
