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

async function GetDataListByName(filter: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("item")
      .select("*")
      .ilike("item_name", `%${filter}%`);
    if (data) {
      return data;
    } else return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function GetSubDataList(id: number) {
  try {
    const supabase = createClient();
    const list_tag = await GetTagList(id);
    if (!list_tag) return [];
    const { data, error } = await supabase
      .from("item_tag_link")
      .select(`item:item_id ( * )`)
      .contains("tag_name", list_tag);

    let data_list: any[] = [];
    if (data) {
      data.map((item) => {
        if (item.item) data_list.push(item.item);
      });
      return data_list;
    } else return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function GetSpecsDetail(id: number) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("item_specs")
      .select(`specs_list`)
      .eq("item_id", `${id}`);
    if (data) {
      return data[0].specs_list;
    } else return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function GetTagList(id: number) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("item_tag_link")
      .select("tag_name")
      .eq("item_id", `${id}`);
    if (data) {
      return data[0].tag_name;
    } else return [];
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
export {
  GetDataList,
  GetDetailData,
  GetTagList,
  GetSubDataList,
  GetSpecsDetail,
  GetDataListByName,
};
