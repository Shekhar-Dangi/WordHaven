const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.models.Book || mongoose.model("Book", BookSchema);

module.exports = Book;
