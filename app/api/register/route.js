import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // ✅ validation (IMPORTANT)
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 }
      );
    }

    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: user._id,
      },
      { status: 201 }
    );

  } catch (error) {
    console.log("REGISTER ERROR:", error);

    return NextResponse.json(
      {
        message: "Server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}