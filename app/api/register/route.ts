import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "User registered successfully!" });
  
  response.cookies.set("registered", "true", {
    httpOnly: true, // Client-side JS can't access it (more secure)
    maxAge: 60 * 60 * 24, // 1 day
    path: "/", // Available on all routes
  });

  return response;
}
