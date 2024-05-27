"use client";
import { createContext, useContext, useState } from "react";
import * as buyList from "@/utils/handle/handle_buylist";

interface CountContextType {
  countItem: number;
  addItem: (name: string) => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

export function useCountItems() {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export function CountProvider({ children }: React.PropsWithChildren) {
  const [countItem, setCountItem] = useState<number>(
    buyList.getNumberOfIitems()
  );

  function addItem(name: string) {
    setCountItem((prev) => prev + 1);
    return buyList.addItemBuyList(name);
  }

  return (
    <CountContext.Provider value={{ countItem, addItem }}>
      {children}
    </CountContext.Provider>
  );
}
