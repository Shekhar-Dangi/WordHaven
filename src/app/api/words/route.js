const Post = require("../../../models/Post");
import { NextResponse } from "next/server";
import connectDB from "@/utils/connect";
const mongoose = require("mongoose");

export const GET = async (req) => {
  try {
    await connectDB();
    const posts = await Post.find({});
    return new NextResponse(JSON.stringify(posts));
  } catch (error) {
    return error;
  } finally {
    mongoose.connection.close();
  }
};
