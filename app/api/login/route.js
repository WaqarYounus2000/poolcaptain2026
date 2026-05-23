import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required", success: false },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password", success: false },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password", success: false },
        { status: 400 }
      );
    }

    // ⏱️ TOKEN (5 MINUTES ONLY)
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "5m" } // ✅ 5 minutes
    );

    const response = NextResponse.json(
      {
        message: `Welcome ${user.email}`,
        success: true,
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    );

    // 🍪 COOKIE (5 MINUTES)
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 5, // ✅ 5 minutes (in seconds)
    });

    return response;

  } catch (error) {
    console.log("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        message: "Server error",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}