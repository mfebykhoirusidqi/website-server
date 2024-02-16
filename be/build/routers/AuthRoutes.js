"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controller/AuthController"));
const AuthValidator_1 = __importDefault(require("../middleware/AuthValidator"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/user/:role", AuthMiddleware_1.auth, AuthController_1.default.getUser);
        this.router.get("/user-role", AuthMiddleware_1.auth, AuthController_1.default.showUser);
        this.router.get("/user-id/:id", AuthMiddleware_1.auth, AuthController_1.default.getUserById);
        this.router.post("/register", AuthValidator_1.default, AuthController_1.default.registers);
        this.router.post("/login", AuthController_1.default.login);
        this.router.put("/update-email/:id", AuthMiddleware_1.auth, AuthController_1.default.updateEmail);
        this.router.put("/edit-profil/:id", AuthValidator_1.default, AuthMiddleware_1.auth, AuthController_1.default.editProfil);
        this.router.put("/edit-user/:id", AuthValidator_1.default, AuthMiddleware_1.auth, AuthController_1.default.editUser);
    }
}
exports.default = new AuthRoutes().router;
