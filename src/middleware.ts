import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("authToken");
  const url = req.nextUrl.clone();

  if (!isAuthenticated && url.pathname.startsWith("/products")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*"],
};
