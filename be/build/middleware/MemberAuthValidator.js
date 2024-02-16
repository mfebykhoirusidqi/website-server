"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsValidate = void 0;
const corsValidate = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    next();
};
exports.corsValidate = corsValidate;
