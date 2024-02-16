"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
const ImageController_1 = __importDefault(require("../controller/ImageController"));
class ImageRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", AuthMiddleware_1.auth, ImageController_1.default.getImages);
        this.router.post("/", AuthMiddleware_1.auth, ImageController_1.default.postImage);
        this.router.delete("/:id", AuthMiddleware_1.auth, ImageController_1.default.deleteImage);
        this.router.delete("/file/:image", AuthMiddleware_1.auth, ImageController_1.default.deleteImageFile);
        this.router.get("/images"); //gambar
    }
}
exports.default = new ImageRoutes().router;
