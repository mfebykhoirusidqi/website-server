import mongoose, { Document, Schema, model } from "mongoose";

const totalSchema = new Schema({
  kategori: String,
  nilai: Number,
});

const nilaiSchema: Schema = new Schema(
  {
    student_name: String,
    session_id: String,
    nilai: [totalSchema],
  },
  {
    timestamps: true,
  }
);

export const NilaiModel = mongoose.model("nilai", nilaiSchema);

const test = {
  student_name: "kitan",
  session_id: 1,
  nilai: [
    {
      kategori: "c1",
      nilai: 100,
    },
    {
      kategori: "c2",
      nilai: 66.6,
    },
    {
      kategori: "c3",
      nilai: 59,
    },
  ],
};

const mongo = [
  {
    student_name: "kitan",
    session_id: 1,
    nilai: [
      {
        kategori: "c1",
        nilai: 100,
      },
      {
        kategori: "c2",
        nilai: 66.6,
      },
      {
        kategori: "c3",
        nilai: 59,
      },
    ],
  },
  {
    student_name: "kitan",
    session_id: 2,
    nilai: [
      {
        kategori: "c1",
        nilai: 100,
      },
      {
        kategori: "c2",
        nilai: 66.6,
      },
      {
        kategori: "c3",
        nilai: 59,
      },
    ],
  },
  {
    student_name: "kitan",
    session_id: 3,
    nilai: [
      {
        kategori: "c1",
        nilai: 100,
      },
      {
        kategori: "c2",
        nilai: 66.6,
      },
      {
        kategori: "c3",
        nilai: 59,
      },
      {
        kategori: "c3",
        nilai: 59,
      },
      {
        kategori: "c3",
        nilai: 59,
      },
      {
        kategori: "c3",
        nilai: 59,
      },
    ],
  },
];
