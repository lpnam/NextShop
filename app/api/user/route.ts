import { NextResponse } from "next/server";
import { getSession, logout } from "@/lib/action";

export async function GET() {
  const resp = await getSession();
  return NextResponse.json({
    status: 200,
    data: resp?.data,
  });
}

export async function POST() {
  await logout();
  return NextResponse.json({
    status: 200,
  });
}
