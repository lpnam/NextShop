import { createClient } from "@/utils/supabase/server";
import { UserData } from "@/lib/define";

async function pushUserData(user: UserData) {
  try {
    const supabase = createClient();
    await supabase.from("User").insert([user]).select();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { pushUserData };
