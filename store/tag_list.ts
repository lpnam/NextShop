import { proxy } from "valtio";
import { createClient } from "@/utils/supabase/server";

type TagData = {
  tag_id: number;
  tag_name: string;
};

async function GetTagList(): Promise<TagData[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from("tag_list").select();
    if (error) {
      throw new Error(error.message);
    }
    return data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function initTagList() {
  const taglist: Array<TagData> = await GetTagList();
  return proxy<{
    tag_list: Array<TagData>;
  }>({
    tag_list: taglist,
  });
}

export const taglist = initTagList();
