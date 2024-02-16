import mongoose, { Document, Schema, model } from "mongoose";

const imageSchema: Schema = new Schema(
  {
    image: String,
    alt: String,
  },
  {
    timestamps: true,
  }
);

export const ImageModel = mongoose.model("image", imageSchema);
