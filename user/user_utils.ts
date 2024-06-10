import { createClient } from "@/utils/supabase/server";
import { UserData } from "@/lib/define";

async function pushUserData(user: UserData) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from("User").insert([user]).select();
    console.log(data);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { pushUserData };
