"use client";
import { createContext, useContext, useState, useEffect } from "react";
import * as buyList from "@/utils/handle/handle_buylist";
import { List } from "@/lib/define";

interface CountContextType {
  countItem: number;
  totalPrice: number;
  addItem: (itemlist: List) => void;
  getListItem: () => List[];
  removeItem: (isAll: boolean, name: string, price: string) => void;
  getItemQuantity: (name: string) => void;
  updateItemQuantity: (
    name: string,
    new_quantity: string,
    price: string
  ) => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

export function useCountItems() {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error("Must be used within a CountProvider");
  }
  return context;
}

export function CountProvider({ children }: React.PropsWithChildren) {
  const [countItem, setCountItem] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  function addItem(itemlist: List) {
    if (!itemlist) return;

    const price: string = itemlist.price.trim().replace(/[^0-9.-]/g, "");

    const p: number = Number(price) ? Number(price) : parseFloat(price);
    setCountItem((prev) => prev + 1);
    setTotalPrice((prev) => prev + p);
    return buyList.addItemBuyList(itemlist);
  }

  function getListItem() {
    return buyList.getBuyList();
  }

  function getItemQuantity(name: string) {
    return buyList.getItemQuantity(name);
  }

  function getPrice(price: string) {
    const price_x: string = price.trim().replace(/[^0-9.-]/g, "");
    const p: number = Number(price_x) ? Number(price_x) : parseFloat(price_x);
    return p;
  }

  function updateItemQuantity(
    name: string,
    new_quantity: string,
    price: string
  ) {
    const old_quantity: number = getItemQuantity(name);
    console.log(old_quantity);
    console.log(new_quantity);
    const p: number = getPrice(price);

    setCountItem((prev) => {
      const x = prev + Number(new_quantity) - old_quantity;
      if (x >= 0) return x;
      else return 0;
    });
    setTotalPrice((prev) => {
      const x = prev + (Number(new_quantity) - old_quantity) * p;
      if (x >= 0) return x;
      else return 0;
    });
    return buyList.updateItemQuantity(name, new_quantity);
  }

  function removeItem(isAll: boolean, name: string, price: string) {
    const p: number = getPrice(price);
    let quantity: number = getItemQuantity(name);

    if (isAll) {
      setTotalPrice((prev) => prev - p * quantity);
      setCountItem((prev) => {
        if (prev - quantity >= 0) return prev - quantity;
        else return 0;
      });
      return buyList.removeItemBuyList(name);
    } else {
      setTotalPrice((prev) => prev - p);
      setCountItem((prev) => {
        if (prev - 1 >= 0) return prev - 1;
        else return 0;
      });
      return buyList.decreaseItemQuantity(name);
    }
  }

  useEffect(() => {
    console.log("Trigger CounterItem");
    setCountItem(buyList.getNumberOfIitems());
    setTotalPrice(buyList.getTotalPriceFromList());
  }, []);

  return (
    <CountContext.Provider
      value={{
        countItem,
        totalPrice,
        addItem,
        getListItem,
        removeItem,
        updateItemQuantity,
        getItemQuantity,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}
