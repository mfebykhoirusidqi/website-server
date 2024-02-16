import mongoose, { Document, Schema, model } from "mongoose";

const jawabanSchema = new Schema({
  soal: String,
  status: Boolean,
});
const c3Schema: Schema = new Schema(
  {
    soal: String,
    kategori: String,
    jawaban: [jawabanSchema],
  },
  {
    timestamps: true,
  }
);

export const C3Model = mongoose.model("c3", c3Schema);
