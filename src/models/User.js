import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: String,
  profilePicture: String,
  bio: String,
  phone: String,
  address: String,
  socialLinks: [
    {
      platform: String,
      url: String,
    },
  ],
  themePreference: String,
  notificationSettings: {
    email: Boolean,
    push: Boolean,
  },
  role: String,
  isAdmin: Boolean,
  hashedPassword: String,
  verificationToken: String,
  resetPasswordToken: String,
  lastLogin: Date,
  signupDate: Date,
  followers: Number,
  following: Number,
  likedPosts: [mongoose.Schema.Types.ObjectId],
  savedPosts: [mongoose.Schema.Types.ObjectId],
  isActive: Boolean,
  isBlocked: Boolean,
  language: String,
  timezone: String,
  emailNotifications: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
