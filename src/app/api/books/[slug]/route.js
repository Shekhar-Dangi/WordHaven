import { NextResponse } from "next/server";
const mongoose = require("mongoose");
import connectDB from "@/utils/connect";
import Post from "../../../../models/Post";
import { authOptions, getAuthSession } from "@/utils/auth";
export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const bookId = params.slug;
    const post = await Post.find({ bookId });
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return new NextResponse(error);
  }
};

export const POST = async (req, { params }) => {
  try {
    await connectDB();
    const bookId = params.slug;
    const session = await getAuthSession();
    if (!session) {
      return new NextResponse(
        JSON.stringify(
          { done: false, message: "Not Authenticated!" },
          { status: 401 }
        )
      );
    }
    const { id, content } = await req.json();
    const comment = {
      name: session?.user?.name,
      email: session?.user?.email,
      profileImage: session?.user?.image,
      content,
    };
    const post = await Post.findOneAndUpdate(
      { bookId },
      { $push: { comments: comment } },
      { new: true }
    );

    return NextResponse.json({ done: true, post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ done: false }, { status: 403 });
  }
};
