import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get("wire-aza-session");
  const path = request.nextUrl.pathname;
  const isAuthenticated = !!sessionCookie;

  const publicRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/",
    "/support",
    "/error",
  ];
  const privateRoutes = ["/businesses", "/profile"];

  const isPublicRoute = publicRoutes.includes(path);
  const isPrivateRoutes = privateRoutes.includes(path);

  // 1. Redirect unauthenticated users from privates routes
  if (!isAuthenticated && isPrivateRoutes) {
    const callbackUrl = encodeURIComponent(path);
    return NextResponse.redirect(
      new URL(`/login?callback=${callbackUrl}`, request.url)
    );
  }

  // 2. Check if user is aunthenticated user is trying to view public routes
  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL("/businesses", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except API routes and Next.js internal files
    "/((?!api|_next/static|_next/image).*)",
  ],
};
