import { NextResponse } from "next/server";

export function middleware(req: any) {
  const registered = req.cookies.get("registered");
  if (!registered) {
    return NextResponse.redirect(new URL("/register", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/test",
};
