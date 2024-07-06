import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { UserData } from "@/lib/define";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { updateUserSession, getUserBySession } from "@/user/user_utils";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1000 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(data: UserData) {
  const session = uuidv4();
  // console.log(session);

  const resp = await updateUserSession(data, session);
  // Save the session in a cookie
  cookies().set("session", session);
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "");
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await getUserBySession(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
