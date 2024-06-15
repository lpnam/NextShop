import { createClient } from "@/utils/supabase/server";
import { UserData } from "@/lib/define";

interface ResponseData {
  status: boolean;
  message: string;
}

async function pushUserData(user: UserData) {
  try {
    const supabase = createClient();
    const check: ResponseData = await checkUserID(user.email);
    if (check.status) {
      const { data, error } = await supabase
        .from("User")
        .insert([user])
        .select();
      if (error) return error;
      else return "200";
    } else {
      return check.message;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function checkUserID(email: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("email", email);
    if (data && data.length === 0)
      return <ResponseData>{ status: true, message: "" };
    else if (data && data.length > 0)
      return <ResponseData>{ status: false, message: "Already signup" };
    throw <ResponseData>{ status: false, message: "Something went wrong" };
  } catch (error) {
    console.log(error);
    return <ResponseData>{ status: false, message: error };
  }
}

export { pushUserData, checkUserID };
