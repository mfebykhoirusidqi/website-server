import mongoose, { Document, Schema, model } from "mongoose";

const materiSchema: Schema = new Schema(
  {
    title: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

export const MateriModel = mongoose.model("materi", materiSchema);
