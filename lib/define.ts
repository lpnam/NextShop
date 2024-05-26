type SetSize = {
  setWidth: number;
  setHeight: number;
};

type ItemInfo = {
  name: string;
  price: string;
  image: Array<string>;
  date: string;
  code_name: string;
  key: number;
};

interface InitItem {
  date_in: string;
  item_id: number;
  code_name: string;
  item_name: string;
  item_image: string[];
  item_price: string;
}
type SpecsData = {
  header: string;
  specs: string;
};

type TagData = {
  tag_id: number;
  tag_name: string;
};

type List = {
  name: string;
  quantity: string;
};

export type { SetSize, ItemInfo, TagData, InitItem, SpecsData, List };
