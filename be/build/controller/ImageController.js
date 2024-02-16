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
const RemoveImage_1 = __importDefault(require("../utils/RemoveImage"));
const ImageModel_1 = require("../models/ImageModel");
class ImageController {
    getImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access getImages",
                    });
                }
                const result = yield ImageModel_1.ImageModel.find();
                return res.status(200).json({
                    data: result,
                });
            }
            catch (error) {
                return res.status(503).json({
                    msg: `error`,
                    data: [],
                });
            }
        });
    }
    postImage(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { fullname, role } = res.locals.user;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access postGambar",
                    });
                }
                let { alt } = req.body;
                const image = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) || "default";
                const gambar = yield ImageModel_1.ImageModel.insertMany({
                    image: image,
                    alt: alt,
                });
                return res.status(200).json({
                    msg: "create materi berhasil",
                    data: gambar,
                });
            }
            catch (error) {
                return res.status(503).json({
                    msg: `error`,
                    data: [],
                });
            }
        });
    }
    deleteImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access deleteImage",
                    });
                }
                const result = yield ImageModel_1.ImageModel.findByIdAndDelete({ _id: req.params.id });
                (0, RemoveImage_1.default)(result === null || result === void 0 ? void 0 : result.image);
                return res.status(200).json({
                    data: result,
                });
            }
            catch (error) {
                return res.status(503).json({
                    msg: `error`,
                    data: [],
                });
            }
        });
    }
    deleteImageFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access deleteImage",
                    });
                }
                (0, RemoveImage_1.default)(req.params.image);
                return res.status(200).json({
                    data: "success",
                });
            }
            catch (error) {
                return res.status(503).json({
                    msg: `error`,
                    data: [],
                });
            }
        });
    }
}
exports.default = new ImageController();
