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
const HashFunction_1 = __importDefault(require("../utils/HashFunction"));
const UserModel_1 = require("../models/UserModel");
const RemoveImage_1 = __importDefault(require("../utils/RemoveImage"));
class AuthController {
    constructor() {
        this.registers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { fullname, password, email, gender, role } = req.body;
            try {
                const fullName = yield UserModel_1.UserModel.findOne({ fullname: fullname });
                //  checkUser
                if (fullName) {
                    return res.status(400).json({
                        msg: "user failed/nama udah ada yg make",
                    });
                }
                // const hashed: string = await HashFunction.hash(password);
                const user = yield UserModel_1.UserModel.insertMany({
                    fullname: fullname,
                    password: password,
                    email: email,
                    gender: gender,
                    role: role,
                });
                return res.status(200).json({
                    msg: `register sebagai ${role} berhasil`,
                    data: user,
                });
            }
            catch (error) {
                return res.status(503).json({
                    msg: `error`,
                    data: [],
                });
            }
        });
        this.updateEmail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { email } = req.body;
            try {
                const user = yield UserModel_1.UserModel.updateMany({ _id: req.params.id }, {
                    $set: {
                        email: email,
                    },
                });
                return res.status(200).json({
                    data: user,
                });
            }
            catch (error) {
                return res.status(503).json({
                    msg: `error`,
                    data: [],
                });
            }
        });
        this.editProfil = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            let { email, fullname, password } = req.body;
            const image = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) || "default";
            try {
                const deleteImage = yield UserModel_1.UserModel.findOne({ _id: req.params.id });
                (0, RemoveImage_1.default)(deleteImage === null || deleteImage === void 0 ? void 0 : deleteImage.image);
                const user = yield UserModel_1.UserModel.updateMany({ _id: req.params.id }, {
                    $set: {
                        password: password,
                        fullname: fullname,
                        image: image,
                        email: email,
                    },
                });
                return res.status(200).json({
                    data: user,
                });
            }
            catch (error) {
                return res.status(503).json({
                    msg: `error`,
                    data: [],
                });
            }
        });
        this.editUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { email, fullname, password, gender } = req.body;
            try {
                const check = UserModel_1.UserModel.findOne({ _id: req.params.id });
                if (!check) {
                    return res.status(404).json({
                        msg: "gagal user tidak ditemukan",
                        data: check,
                    });
                }
                const user = yield UserModel_1.UserModel.updateMany({ _id: req.params.id }, {
                    $set: {
                        password: password,
                        fullname: fullname,
                        email: email,
                    },
                });
                return res.status(200).json({
                    data: user,
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
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //cari data user by username
            let { fullname, password } = req.body;
            try {
                const user = yield UserModel_1.UserModel.findOne({
                    fullname: fullname,
                });
                //  checkUser
                if (!user) {
                    return res.status(400).json({ msg: "user failed" });
                }
                //check password
                let compare = password === user.password;
                // generate token
                if (compare) {
                    let token = HashFunction_1.default.generate(user.fullname, user.gender, user.password, user.email, user.role);
                    return res.status(200).json({
                        msg: `login sebagai ${user.role} berhasil`,
                        role: user.role,
                        token: token,
                    });
                }
                else {
                    return res.status(400).json({ msg: "auth failed" });
                }
            }
            catch (error) {
                return res.status(503).json({
                    msg: `error`,
                    data: [],
                });
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { role } = res.locals.user;
            try {
                if (role === "siswa" || role === "guru") {
                    return res.status(403).json({
                        msg: "siswa/guru cannot access getUser",
                    });
                }
                const user = yield UserModel_1.UserModel.find({ role: req.params.role });
                return res.status(200).json({
                    data: user,
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
    showUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullname, role } = res.locals.user;
            try {
                const user = yield UserModel_1.UserModel.findOne({
                    fullname: fullname,
                });
                return res.status(200).json({
                    data: user,
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
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullname, role } = res.locals.user;
            try {
                if (role === "siswa" || role === "guru") {
                    return res.status(403).json({
                        msg: "siswa/guru cannot access getUserById",
                    });
                }
                const user = yield UserModel_1.UserModel.findOne({
                    _id: req.params.id,
                });
                return res.status(200).json({
                    data: user,
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
exports.default = new AuthController();
