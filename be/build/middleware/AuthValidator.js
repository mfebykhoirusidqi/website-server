"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const IncludeSlash_1 = __importDefault(require("../utils/IncludeSlash"));
const validate = [
    (0, express_validator_1.check)("fullname")
        .isLength({ min: 4 })
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const cekSlash = (0, IncludeSlash_1.default)(value);
        if (cekSlash) {
            throw new Error("dont use /");
        }
        return true;
    })),
    (0, express_validator_1.check)("password").isLength({ min: 4 }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(422);
            return res.send({
                errors: errors.array(),
            });
        }
        else {
            return next();
        }
    },
];
exports.default = validate;
