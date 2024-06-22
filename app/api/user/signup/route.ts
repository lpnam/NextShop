import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { UserData, ResponseData } from "@/lib/define";
import { pushUserData } from "@/user/user_utils";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const body = await request.json();
  const { f_name, l_name, id_user, pw_user, c_pw_user } = body;

  if (pw_user !== c_pw_user) {
    return NextResponse.json({
      message: "Passwords do not match",
      status: 400,
    });
  }
  const saltRounds = 10;
  const pw = await bcrypt.hash(pw_user, saltRounds);

  // // Verify Password
  // const isPasswordValid = await bcrypt.compare(c_pw_user, pw);
  // console.log(isPasswordValid);

  const datax: UserData = {
    first_name: f_name,
    last_name: l_name,
    email: id_user,
    passcode: pw,
    image: "",
  };

  const resp: ResponseData = await pushUserData(datax);

  if (resp.status) {
    // alert("Signup successfully!");
    // redirect("/user/signin");
    return NextResponse.json({
      message: resp.message,
      status: 201,
    });
  }
  return NextResponse.json({
    message: resp.message,
    status: 500,
  });
}
