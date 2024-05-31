"use client";
import { useCountItems } from "@/contexts/CountItems";
import { List } from "@/lib/define";
import BuyListItemCard from "@/ui/BuyListItemCard";

export default function CartPage() {
  const itemslist = useCountItems();
  let data: List[] = itemslist.getListItem();
  return (
    <div className="w-full rounded-md overflow-y-auto bg-slate-300 h-auto px-1 min-h-[40vh] flex-grow-[4] flex">
      <div className="h-auto w-full flex-grow-[7] max-w-[70%] border border-black h-100vh p-4 flex">
        {/* {data.map((each: List) => {
          return (
            <BuyListItemCard
              key={each.code}
              item={{
                name: each.name,
                price: each.price,
                image: each.image,
                code: each.code,
                quantity: each.quantity,
              }}
            />
          );
        })} */}
      </div>
      <div className="flex-grow-[3] max-w-[30%] border border-black h-100vh p-4"></div>
    </div>
  );
}
