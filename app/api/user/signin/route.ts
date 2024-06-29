import { NextResponse } from "next/server";
import { ResponseData, UserData } from "@/lib/define";
import { userLogIn, getUserInfo } from "@/user/user_utils";
import { login, getSession } from "@/lib/action";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const body = await request.json();
  const { id_user, pw_user } = body;

  const resp: ResponseData = await userLogIn(id_user, pw_user);

  if (resp.status) {
    const data: UserData = await getUserInfo(id_user);
    await login(data);
    // alert("Signup successfully!");
    // redirect("/user/signin");
    const session = await getSession();
    console.log(JSON.stringify(session));
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
