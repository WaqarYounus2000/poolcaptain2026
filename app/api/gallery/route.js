import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3 } from "../../../lib/s3";

export async function GET() {
  try {
    const data = await s3.send(
      new ListObjectsV2Command({
        Bucket: process.env.AWS_BUCKET_NAME,
        Prefix: "projectsfolder/",
      })
    );

    const images = (data.Contents || []).map((item) => ({
      key: item.Key,
      image: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`,
    }));

    return Response.json({
      data: images,
      count: images.length,
    });
  } catch (err) {
    console.error("S3 ERROR:", err);
    return Response.json(
      { error: err.message, data: [] },
      { status: 500 }
    );
  }
}