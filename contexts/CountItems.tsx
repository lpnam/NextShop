"use client";
import { createContext, useContext, useState, useEffect } from "react";
import * as buyList from "@/utils/handle/handle_buylist";
import { List } from "@/lib/define";

interface CountContextType {
  countItem: number;
  // totalPrice: number;
  addItem: (itemlist: List) => void;
  getListItem: () => List[];
  removeItem: (isAll: boolean, name: string, price: string) => void;
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
  // const [totalPrice, setTotalPrice] = useState<number>(0);

  function addItem(itemlist: List) {
    setCountItem((prev) => prev + 1);
    // setTotalPrice((prev) => prev + Number(itemlist.price));
    return buyList.addItemBuyList(itemlist);
  }

  function getListItem() {
    return buyList.getBuyList();
  }
  function removeItem(isAll: boolean, name: string, price: string) {
    if (isAll) {
      let quantity: number = buyList.getItemQuantity(name);
      setCountItem((prev) => prev - quantity);
      // setTotalPrice((prev) => prev - Number(price) * quantity);
      return buyList.removeItemBuyList(name);
    } else {
      setCountItem((prev) => prev - 1);
      // setTotalPrice((prev) => prev - Number(price));
      return buyList.decreaseItemQuantity(name);
    }
  }

  useEffect(() => {
    setCountItem(buyList.getNumberOfIitems());
    // setTotalPrice(buyList.getTotalPriceFromList());
  }, []);

  return (
    <CountContext.Provider
      value={{ countItem, addItem, getListItem, removeItem }}
    >
      {children}
    </CountContext.Provider>
  );
}
