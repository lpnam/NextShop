import { createClient } from "@/utils/supabase/server";

async function GetDataList(...filter: string[]) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("item_tag_link")
      .select(`item:item_id ( * )`)
      .filter("tag_name", "cs", `{${[...filter].map((each) => each)}}`);
    let data_list: any = [];
    if (data) {
      data.map((item) => {
        data_list.push(item.item);
      });
    } else return [];
    return data_list;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function GetDetailData(filter: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("item")
      .select()
      .eq("code_name", `${filter.toUpperCase()}`);
    if (data) return data[0];
    else return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
export { GetDataList, GetDetailData };
