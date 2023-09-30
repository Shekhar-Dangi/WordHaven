import mongoose from "mongoose";

// Define the schema for your blog posts
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [String], // An array to store tags or categories
  featuredImage: String, // URL or reference to a featured image
  comments: [
    {
      name: String,
      email: String,
      content: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  likes: Number, // Number of likes or upvotes
  publicationStatus: {
    type: String,
    enum: ["draft", "published", "scheduled"],
    default: "draft",
  },
  views: Number, // Number of views or pageviews
  relatedPosts: [mongoose.Schema.Types.ObjectId], // Array of related blog post IDs
  seo: {
    metaTitle: String,
    metaDescription: String,
    canonicalUrl: String,
  },
  lastUpdated: Date, // Date and time of the last update
  attachments: [
    {
      name: String,
      url: String,
    },
  ],
  socialShares: {
    facebook: Number,
    twitter: Number,
    instagram: Number,
    // Add more social media platforms as needed
  },
  authorNotes: String, // Author's or editor's notes
  averageRating: Number, // Average reader rating
});

// Create a model using the schema
const Post = mongoose.model("BlogPost", blogPostSchema);

module.exports = Post;
