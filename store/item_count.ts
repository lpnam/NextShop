import { proxy } from "valtio";

export const item_count = proxy<{
  count_i: number;
}>({
  count_i: 0,
});
