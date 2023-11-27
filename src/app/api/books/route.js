import Book from "@/models/Book";
import { NextResponse } from "next/server";
import connectDB from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
const mongoose = require("mongoose");

export const GET = async (req) => {
  try {
    await connectDB();
    const books = await Book.find({});

    return new NextResponse(JSON.stringify(books));
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

    const { title, author, publishedYear, pages, genre } = await req.json();
    const book = new Book({
      title,

      author,
      publishedYear,
      pages,
      genre,
    });
    const savedBook = await book.save();
    console.log(savedBook);
    return new NextResponse(
      JSON.stringify({ message: "Saved!", id: savedBook._id }, { status: 200 })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Error!", error: error }, { status: 200 })
    );
  }
};
