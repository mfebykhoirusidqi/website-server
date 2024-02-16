"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const RemoveImage = (file) => {
    // console.log(file);
    const filepath = path_1.default.join(__dirname, "../../", "/images/", file);
    // console.log(__dirname);
    // console.log(filepath);
    fs_1.default.unlink(filepath, (err) => {
        console.log(err);
    });
};
exports.default = RemoveImage;
