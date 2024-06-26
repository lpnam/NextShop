"use client";
import { useCountItems } from "@/contexts/CountItems";
import { List } from "@/lib/define";
import BuyListItemCard from "@/ui/BuyListItemCard";

export default function CartPage() {
  const listItem = useCountItems();
  let data: List[] = listItem.getListItem();
  const len = data.length;

  return (
    <div className="w-full rounded-md overflow-y-auto bg-slate-300 px-1 flex flex-col">
      <div className="h-auto p-4 flex flex-col">
        {data.map((each: List, index: number) => {
          return (
            <BuyListItemCard
              key={index}
              item={{
                name: each.name,
                price: each.price,
                image: each.image,
                code: each.code,
                quantity: each.quantity,
              }}
            />
          );
        })}
      </div>
      <div className="text-black h-auto flex flex-col items-center gap-4 p-4">
        <h1 className="font-bold text-2xl mb-3">CheckOut</h1>
        <h2 className="text-xl ">
          Items:
          <span className="font-bold"> {listItem.countItem}</span>
        </h2>
        <h2 className="text-xl ">
          Total:
          <span className="font-bold"> ${listItem.totalPrice}</span>
        </h2>
        <div className="text-white border rounded-lg p-4 cursor-pointer hover:scale-110 bg-headerColor">
          Buy Now
        </div>
      </div>
    </div>
  );
}
