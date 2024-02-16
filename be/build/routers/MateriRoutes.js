"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MateriController_1 = __importDefault(require("../controller/MateriController"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
class BlogRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", MateriController_1.default.getMateri);
        this.router.get("/:id", AuthMiddleware_1.auth, MateriController_1.default.showMateri);
        this.router.post("/", AuthMiddleware_1.auth, MateriController_1.default.create);
        this.router.put("/:id", AuthMiddleware_1.auth, MateriController_1.default.update);
        this.router.delete("/:id", AuthMiddleware_1.auth, MateriController_1.default.delete);
    }
}
exports.default = new BlogRoutes().router;
