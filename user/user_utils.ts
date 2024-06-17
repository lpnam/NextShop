import { createClient } from "@/utils/supabase/server";
import { UserData, ResponseData } from "@/lib/define";
import bcrypt from "bcrypt";

async function pushUserData(user: UserData) {
  try {
    const supabase = createClient();
    const check: ResponseData = await checkUserID(user.email);
    if (check.status) {
      const { data, error } = await supabase
        .from("User")
        .insert([user])
        .select();
      if (error)
        return <ResponseData>{ status: false, message: "Something went wrong" };
      else
        return <ResponseData>{ status: true, message: "Sign Up Sucessfully" };
    } else {
      return check;
    }
  } catch (error) {
    console.log(error);
    return <ResponseData>{ status: false, message: "Something went wrong" };
  }
}

async function userSignIn(email: string, pw: string) {
  try {
    const supabase = createClient();
    const check: ResponseData = await checkUserID(email);
    if (!check.status) {
      const { data, error } = await supabase
        .from("User")
        .select("*")
        .eq("email", email);
      if (error)
        return <ResponseData>{ status: false, message: "Something went wrong" };
      else {
        console.log(data);
        const isPasswordValid = await bcrypt.compare(pw, data[0].passcode);
        if (!isPasswordValid)
          <ResponseData>{
            status: false,
            message: "Your account and password not match",
          };
        return <ResponseData>{
          status: true,
          message:
            "Welcome back " + data[0].first_name + " " + data[0].last_name,
        };
      }
    } else {
      return <ResponseData>{
        status: false,
        message: "Your account and password not match",
      };
    }
  } catch (error) {
    console.log(error);
    return <ResponseData>{ status: false, message: "Something went wrong" };
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

export { pushUserData, checkUserID, userSignIn };
