import { NextResponse } from "next/server";
import connectDB from "@/utils/connect";
const mongoose = require("mongoose");

const User = require("../../../models/User");

export const GET = async (req) => {
  try {
    await connectDB();
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }

  return new NextResponse("Hell");
};
