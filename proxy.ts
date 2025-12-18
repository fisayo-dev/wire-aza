import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get("wire-aza-session");
  const path = request.nextUrl.pathname;
  const isAuthenticated = !!sessionCookie;

  // Helper function to check if path starts with any protected route
  const isProtectedRoute = (pathname: string): boolean => {
    const protectedPrefixes = [
      "/businesses",
      "/profile",
      "/create",
      "/my-businesses",
    ];
    return protectedPrefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    );
  };

  const isPrivateRoute = isProtectedRoute(path);

  // 1. Redirect unauthenticated users from protected routes
  if (!isAuthenticated && isPrivateRoute) {
    const callbackUrl = encodeURIComponent(path);
    return NextResponse.redirect(
      new URL(`/login?callback=${callbackUrl}`, request.url)
    );
  }

  // 2. Redirect authenticated users trying to access auth pages to dashboard
  if (
    isAuthenticated &&
    (path === "/login" || path === "/signup" || path === "/forgot-password")
  ) {
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
