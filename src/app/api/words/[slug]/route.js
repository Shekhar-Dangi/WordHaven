import { NextResponse } from "next/server";
const mongoose = require("mongoose");
import connectDB from "@/utils/connect";
import Post from "../../../../models/Post";
export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const postId = params.slug;
    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return new NextResponse(error);
  }
};
