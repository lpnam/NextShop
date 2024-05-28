"use client";
import { createContext, useContext, useState, useEffect } from "react";
import * as buyList from "@/utils/handle/handle_buylist";

interface CountContextType {
  countItem: number;
  addItem: (name: string) => void;
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

  function addItem(name: string) {
    setCountItem((prev) => prev + 1);
    return buyList.addItemBuyList(name);
  }

  useEffect(() => {
    setCountItem(buyList.getNumberOfIitems());
  }, []);

  return (
    <CountContext.Provider value={{ countItem, addItem }}>
      {children}
    </CountContext.Provider>
  );
}
