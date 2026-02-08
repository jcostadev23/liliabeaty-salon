import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { verifyAuthToken } from "@/lib/auth";

const PUBLIC_PATHS = [
  "/login",
  "/register",
  "/reset",
  "/api/auth/login",
  "/api/auth/logout",
  "/api/auth/register",
  "/api/auth/reset-request",
  "/api/auth/reset",
];

function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.some((path) => pathname.startsWith(path));
}

function isAdminPath(pathname: string) {
  return pathname.startsWith("/users") || pathname.startsWith("/api/users");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname)) {
    if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
      const token = request.cookies.get("auth_token")?.value;
      if (token && (await verifyAuthToken(token))) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/_next") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  const token = request.cookies.get("auth_token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const payload = await verifyAuthToken(token);
  if (!payload) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.set({
      name: "auth_token",
      value: "",
      path: "/",
      maxAge: 0,
    });
    return response;
  }

  if (isAdminPath(pathname) && payload.role !== "ADMIN") {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ message: "Nao autorizado." }, { status: 403 });
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
