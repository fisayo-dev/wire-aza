import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get("wire-aza-session");
  const isAuthenticated = !!sessionCookie;

  const { pathname } = request.nextUrl;

  // If authenticated, redirect away from auth pages and root
  if (isAuthenticated) {
    if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // If not authenticated, allow access to auth pages and root
  // You can add more logic here if needed, e.g., redirect to login if accessing protected routes

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signup", "/dashboard"],
};
