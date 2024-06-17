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
  price: string;
  image: string;
  code: string;
};

type UserData = {
  first_name: string;
  last_name: string;
  email: string;
  passcode: string;
};

type ResponseData = {
  status: boolean;
  message: string;
};

export type {
  SetSize,
  ItemInfo,
  TagData,
  InitItem,
  SpecsData,
  List,
  UserData,
  ResponseData,
};
