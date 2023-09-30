import { NextResponse } from "next/server";
import connectDB from "@/utils/connect";

export const GET = async (req) => {
  await connectDB();
  return new NextResponse("Hell");
};
