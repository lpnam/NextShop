"use client";
import { List } from "@/lib/define";

const BUYLIST_KEY = "BList";

function getBuyList() {
  const data = window.localStorage.getItem(BUYLIST_KEY);
  const buylist = data ? JSON.parse(data) : [];
  return buylist;
}

function getNumberOfIitems() {
  const buylist: List[] = getBuyList();
  let total = 0;
  if (buylist.length === 0) return total;
  else {
    buylist.forEach((el: List) => (total = total + Number(el.quantity)));
  }
  return total;
}

function setBuyList(data: List[]) {
  window.localStorage.setItem(BUYLIST_KEY, JSON.stringify(data));
}

function addItemBuyList(name_item: string) {
  let buylist: List[] = getBuyList();
  if (Array.isArray(buylist)) {
    const index = buylist.findIndex((item: List) => item.name === name_item);
    if (index > 0) {
      let num_quantity = Number(buylist[index].quantity) + 1;
      buylist[index].quantity = num_quantity + "";
    } else {
      buylist = [...buylist, { name: name_item, quantity: "1" }];
    }
    setBuyList(buylist);
  }
}

function removeItemBuyList(name_item: string) {
  let buylist: List[] = getBuyList();
  const index = buylist.findIndex((item: List) => item.name === name_item);
  if (index > 0) {
    let num_quantity = Number(buylist[index].quantity) - 1;
    if (num_quantity > 0) buylist[index].quantity = num_quantity + "";
    else buylist.splice(index, 1);
  }
  setBuyList(buylist);
}

export {
  addItemBuyList,
  removeItemBuyList,
  getBuyList,
  setBuyList,
  getNumberOfIitems,
};
