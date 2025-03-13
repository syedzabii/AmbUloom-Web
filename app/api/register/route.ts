import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  cookies().set("registered", "true", {
    httpOnly: true, // Client-side JS can't access it (more secure)
    maxAge: 60 * 60 * 24, // 1 day
    path: "/", // Available on all routes
  });

  return NextResponse.json({ message: "User registered successfully!" });
}
