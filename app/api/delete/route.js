import { NextResponse } from "next/server";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/aws";

export async function POST(req) {
  try {
    const { key } = await req.json();

    if (!key) {
      return NextResponse.json(
        { message: "No key provided" },
        { status: 400 }
      );
    }

    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
      })
    );

    return NextResponse.json({
      message: "Deleted successfully",
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Delete failed", error: error.message },
      { status: 500 }
    );
  }
}