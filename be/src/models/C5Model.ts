import mongoose, { Document, Schema, model } from "mongoose";

const jawabanSchema = new Schema({
  soal: String,
  status: Boolean,
});
const c5Schema: Schema = new Schema(
  {
    soal: String,
    kategori: String,
    jawaban: [jawabanSchema],
  },
  {
    timestamps: true,
  }
);

export const C5Model = mongoose.model("c5", c5Schema);
