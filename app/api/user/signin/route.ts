import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { ResponseData, UserData } from "@/lib/define";
import { userSignIn, getUserInfo } from "@/user/user_utils";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const body = await request.json();
  const { id_user, pw_user } = body;
  //   const saltRounds = 10;
  //   const pw = await bcrypt.hash(pw_user, saltRounds);

  // // Verify Password
  // const isPasswordValid = await bcrypt.compare(c_pw_user, pw);
  // console.log(isPasswordValid);

  const resp: ResponseData = await userSignIn(id_user, pw_user);

  if (resp.status) {
    const data: UserData = await getUserInfo(id_user);
    // alert("Signup successfully!");
    // redirect("/user/signin");
    return NextResponse.json({
      message: resp.message,
      status: 200,
      data: data,
    });
  }
  return NextResponse.json({
    message: resp.message,
    status: 404,
  });
}
