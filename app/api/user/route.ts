import { NextResponse } from "next/server";
import { getSession } from "@/lib/action";

export async function GET() {
  const session = await getSession();
  console.log(JSON.stringify(session));
  return NextResponse.json({
    status: 200,
  });
}
