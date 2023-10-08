const Post = require("../../../../models/Post");
import { NextResponse } from "next/server";
import connectDB from "@/utils/connect";
import { authOptions, getAuthSession } from "@/utils/auth";
const mongoose = require("mongoose");
const User = require("../../../../models/User");

export const GET = async (req) => {
  try {
    await connectDB();
    const posts = await Post.find({ postType: "journal" });

    return new NextResponse(JSON.stringify(posts));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }));
  }
};
