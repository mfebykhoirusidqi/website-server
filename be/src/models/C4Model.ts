import mongoose, { Document, Schema, model } from "mongoose";

const jawabanSchema = new Schema({
  soal: String,
  status: Boolean,
});
const c4Schema: Schema = new Schema(
  {
    soal: String,
    kategori: String,
    jawaban: [jawabanSchema],
  },
  {
    timestamps: true,
  }
);

export const C4Model = mongoose.model("c4", c4Schema);
