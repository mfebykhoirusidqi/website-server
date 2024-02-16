import mongoose, { Document, Schema, model } from "mongoose";

const jawabanSchema = new Schema({
  soal: String,
  status: Boolean,
});
const c1Schema: Schema = new Schema(
  {
    soal: String,
    kategori: String,
    jawaban: [jawabanSchema],
  },
  {
    timestamps: true,
  }
);

export const C1Model = mongoose.model("c1", c1Schema);
