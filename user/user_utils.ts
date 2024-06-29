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

async function userLogIn(email: string, pw: string) {
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
        // console.log(data);
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

async function getUserInfo(email: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("email", email);
    if (error) throw error;

    return {
      first_name: data[0].first_name ?? "",
      last_name: data[0].last_name ?? "",
      email: data[0].email ?? "",
      passcode: "",
      image: data[0].user_ima ?? "",
    };
  } catch (error) {
    console.log(error);
    return <UserData>{
      first_name: "",
      last_name: "",
      email: "",
      passcode: "",
      image: "",
    };
  }
}

async function updateUserSession(user: UserData, session_id: string) {
  try {
    console.log("GO HERE");
    const supabase = createClient();
    const { data, error } = await supabase
      .from("User")
      .update({ session_id: session_id })
      .eq("email", user.email)
      .select();

    if (error)
      return <ResponseData>{ status: false, message: "Something went wrong" };
    else {
      console.log("data:" + data);
      return <ResponseData>{ status: true, message: "Done" };
    }
  } catch (error) {
    console.log(error);
    return <ResponseData>{ status: false, message: "Something went wrong" };
  }
}

async function getUserBySession(session_id: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("session_id", session_id);
    if (error)
      return <ResponseData>{ status: false, message: "Something went wrong" };
    else
      return <ResponseData>{
        status: true,
        message: "Done",
        data: <UserData>{
          first_name: data[0].first_name,
          last_name: data[0].last_name,
          email: data[0].email,
          image: data[0].user_ima,
          passcode: "",
        },
      };
  } catch (error) {
    console.log(error);
    return <ResponseData>{ status: false, message: "Something went wrong" };
  }
}

export {
  pushUserData,
  checkUserID,
  userLogIn,
  getUserInfo,
  updateUserSession,
  getUserBySession,
};
