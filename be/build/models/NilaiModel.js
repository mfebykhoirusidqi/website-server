"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NilaiModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const totalSchema = new mongoose_1.Schema({
    kategori: String,
    nilai: Number,
});
const nilaiSchema = new mongoose_1.Schema({
    student_name: String,
    session_id: String,
    nilai: [totalSchema],
}, {
    timestamps: true,
});
exports.NilaiModel = mongoose_1.default.model("nilai", nilaiSchema);
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
