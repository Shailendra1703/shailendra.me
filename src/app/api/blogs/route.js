import { NextResponse } from "next/server";
import allPosts from "../../blogs/post";

export async function GET() {
  try {
    const posts = await allPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
