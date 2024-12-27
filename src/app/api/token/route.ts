import { supabaseClientApp } from "app/libVar/supabase";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "./authutil";

const JWT_SECRET = process.env.SUPABASE_JWT_SECRET as string;

export async function POST(request: NextRequest) {
      try {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            // Parse query parameters
            const body = await request.json();

            // Destructure and validate the email and password
            const { email, password } = body;

            if (!email || !password) {
                  return NextResponse.json(
                        { error: "Missing email or password" },
                        { status: 400 }
                  );
            }

            // Authenticate user and get JWT token
            const token = await loginUser(email, password);

            if (!token) {
                  return NextResponse.json(
                        { error: "Authentication failed" },
                        { status: 401 }
                  );
            }
            const response = NextResponse.json(
                  { message: "Login successful", token },
                  { status: 200 }
            );
            response.cookies.set("supabase-auth-token", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                  path: "/",
                  maxAge: 60 * 60 * 24 * 7, // 1 week
            });

            console.log("\nreturn the token successful\n");
            // Return the token in the response
            return NextResponse.json({ token }, { status: 200 });
      } catch (error) {
            console.error("API error:", error);
            return NextResponse.json(
                  { error: "Internal Server Error" },
                  { status: 500 }
            );
      }
}
