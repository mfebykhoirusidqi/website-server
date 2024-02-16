"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NilaiController_1 = __importDefault(require("../controller/NilaiController"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
class NilaiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        //nilai
        this.router.post("/post-jawaban", AuthMiddleware_1.auth, NilaiController_1.default.postJawaban);
        this.router.get("/nilai-siswa", AuthMiddleware_1.auth, NilaiController_1.default.showNilai);
        this.router.get("/", AuthMiddleware_1.auth, NilaiController_1.default.getNilai);
        this.router.get("/:id", AuthMiddleware_1.auth, NilaiController_1.default.showNilaiById);
        this.router.put("/:parentId/:id", AuthMiddleware_1.auth, NilaiController_1.default.editNilai);
        this.router.delete("/:id", AuthMiddleware_1.auth, NilaiController_1.default.deleteNilaiById);
        this.router.get("/nilai/nilai-grafik", AuthMiddleware_1.auth, NilaiController_1.default.getNilaiForGrafik);
        //end nilai
    }
}
exports.default = new NilaiRoutes().router;
