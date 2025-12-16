"use server";

import { cookies } from "next/headers";

export async function checkAuth() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("wire-aza-session");
  return !!sessionCookie;
}
