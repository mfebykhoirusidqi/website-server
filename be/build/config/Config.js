"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
require("dotenv").config();
exports.Config = {
    mongourl: process.env.DATABASE || "undefined",
};
