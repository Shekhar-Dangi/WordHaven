const Post = require("../../../models/Post");
import { NextResponse } from "next/server";
import connectDB from "@/utils/connect";
import { authOptions, getAuthSession } from "@/utils/auth";
const mongoose = require("mongoose");
const User = require("../../../models/User");

export const GET = async (req) => {
  try {
    await connectDB();
    const posts = await Post.find({
      publicationStatus: "public",
      postType: "blog",
    });
    return new NextResponse(JSON.stringify(posts));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }));
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    await connectDB();
    const { bookId, title, content, author, publicationStatus, postType } =
      await req.json();
    const user = await User.findOne({ email: author.email });
    const post = new Post({
      title,
      content,
      bookId,
      author: {
        email: author.email,
        profileImage: author.image,
        username: author.name,
      },
      publicationStatus,
      postType,
    });
    const savedPost = await post.save();

    return new NextResponse(
      JSON.stringify({ message: "Saved!", id: savedPost._id }, { status: 200 })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error!", error: error }, { status: 200 })
    );
  }
};
export const PUT = async (req, { params }) => {
  const {
    bookId,
    id,
    secret,
    title,
    content,
    author,
    publicationStatus,
    postType,
  } = await req.json();
  if (!(secret == process.env.UC)) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
  try {
    await connectDB();

    const post = await Post.findById(id);
    if (!post || post.author.email !== author.email) {
      return new NextResponse(
        JSON.stringify({ message: "Unauthorized!" }, { status: 403 })
      );
    }

    post.title = title;
    post.content = content;
    post.publicationStatus = publicationStatus;
    post.postType = postType;
    post.bookId = bookId;
    const updatedPost = await post.save();

    return new NextResponse(
      JSON.stringify(
        { message: "Updated!", id: updatedPost._id, bookId },
        { status: 200 }
      )
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error!", error: error }, { status: 500 })
    );
  }
};
