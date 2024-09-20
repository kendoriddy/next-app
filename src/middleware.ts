// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("authToken"); // Use a cookie or token
  const url = req.nextUrl.clone();

  if (!isAuthenticated && url.pathname.startsWith("/products")) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*"], // Apply middleware to products route
};
