"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SoalController_1 = __importDefault(require("../controller/SoalController"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
class SoalRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        //soal
        this.router.get("/list-soal/:category", AuthMiddleware_1.auth, SoalController_1.default.index);
        this.router.post("/post-soal/:category", AuthMiddleware_1.auth, SoalController_1.default.createSoal);
        this.router.put("/update-soal/:category/:id", AuthMiddleware_1.auth, SoalController_1.default.updateSoal);
        this.router.delete("/delete-soal/:category/:id", AuthMiddleware_1.auth, SoalController_1.default.deleteSoal);
        //end oal
    }
}
exports.default = new SoalRoutes().router;
