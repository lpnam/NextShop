import { List } from "@/lib/define";

const BUYLIST_KEY = "BList";

function getBuyList() {
  if (typeof window !== "undefined") {
    const data = window.localStorage?.getItem(BUYLIST_KEY);
    const buylist: List[] = data ? JSON.parse(data) : [];
    return buylist;
  } else return [];
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
  if (typeof window !== "undefined") {
    return window.localStorage?.setItem(BUYLIST_KEY, JSON.stringify(data));
  }
}

function addItemBuyList(itemlist: List) {
  let buylist: List[] = getBuyList();
  if (Array.isArray(buylist)) {
    const index = buylist.findIndex(
      (item: List) => item.name === itemlist.name
    );
    if (index >= 0) {
      let num_quantity = Number(buylist[index].quantity) + 1;
      buylist[index].quantity = num_quantity + "";
    } else {
      buylist = [
        ...buylist,
        {
          name: itemlist.name,
          quantity: itemlist.quantity,
          price: itemlist.price,
          image: itemlist.image,
          code: itemlist.code,
        },
      ];
    }
    setBuyList(buylist);
  }
}

function decreaseItemQuantity(name_item: string) {
  let buylist: List[] = getBuyList();
  const index = buylist.findIndex((item: List) => item.name === name_item);
  if (index >= 0) {
    let num_quantity = Number(buylist[index].quantity) - 1;
    if (num_quantity > 0) buylist[index].quantity = num_quantity + "";
    else buylist.splice(index, 1);
  }
  setBuyList(buylist);
}

function removeItemBuyList(name_item: string) {
  let buylist: List[] = getBuyList();
  const index = buylist.findIndex((item: List) => item.name === name_item);
  if (index >= 0) {
    buylist.splice(index, 1);
  }
  setBuyList(buylist);
}

function getTotalPriceFromList() {
  let buylist: List[] = getBuyList();
  let price: number = 0;
  if (buylist.length === 0) return price;
  else {
    buylist.forEach((el: List) => {
      const n_price: string = el.price.trim().replace(/[^0-9.-]/g, "");
      const p: number = Number(n_price) ? Number(n_price) : parseFloat(n_price);
      return (price += Number(el.quantity) * p);
    });
  }
  return price;
}

function getItemQuantity(name_item: string) {
  let buylist: List[] = getBuyList();
  const index = buylist.findIndex((item: List) => item.name === name_item);
  if (index >= 0) {
    return Number(buylist[index].quantity);
  }
  return 0;
}

function updateItemQuantity(name_item: string, new_quantity: string) {
  let buylist: List[] = getBuyList();
  const index = buylist.findIndex((item: List) => item.name === name_item);

  if (index >= 0) {
    console.log(new_quantity);
    buylist[index].quantity = new_quantity;
  }

  setBuyList(buylist);
  return 0;
}

export {
  addItemBuyList,
  removeItemBuyList,
  getBuyList,
  setBuyList,
  getNumberOfIitems,
  getTotalPriceFromList,
  decreaseItemQuantity,
  getItemQuantity,
  updateItemQuantity,
};
