import mongoose, { Document, Schema, model } from "mongoose";

const userSchema: Schema = new Schema(
  {
    fullname: String,
    password: String,
    email: String,
    gender: String,
    role: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("user", userSchema);
