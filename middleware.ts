import { NextRequest } from "next/server";
import { updateSession } from "./lib/action";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
