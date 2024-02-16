import mongoose, { Document, Schema, model } from "mongoose";

const jawabanSchema = new Schema({
  soal: String,
  status: Boolean,
});
const c2Schema: Schema = new Schema(
  {
    soal: String,
    kategori: String,
    jawaban: [jawabanSchema],
  },
  {
    timestamps: true,
  }
);

export const C2Model = mongoose.model("c2", c2Schema);
