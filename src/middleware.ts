import { type NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();

  const protectedRoutes = ["/recipes", "/shopping_list"];

  if (!session && protectedRoutes.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL("/", request.url));
  }

  if (session && request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/recipes", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
