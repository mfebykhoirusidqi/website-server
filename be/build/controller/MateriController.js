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
Object.defineProperty(exports, "__esModule", { value: true });
const MateriModel_1 = require("../models/MateriModel");
class MateriController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            const { title, body } = req.body;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access",
                    });
                }
                const postingan = yield MateriModel_1.MateriModel.insertMany({
                    title: title,
                    body: body,
                });
                return res.status(200).json({
                    msg: "create materi berhasil",
                    data: postingan,
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
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            const { title, body } = req.body;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access",
                    });
                }
                const check = yield MateriModel_1.MateriModel.findOne({
                    _id: req.params.id,
                });
                if (!check) {
                    return res.status(404).json({
                        msg: "cannot find id",
                        title: "",
                        body: "",
                    });
                }
                const postingan = yield MateriModel_1.MateriModel.updateMany({ _id: req.params.id }, {
                    $set: {
                        title: title,
                        body: body,
                    },
                });
                return res.status(200).json({
                    msg: "update materi berhasil",
                    data: postingan,
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
    showMateri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access",
                    });
                }
                const postingan = yield MateriModel_1.MateriModel.findOne({
                    _id: req.params.id,
                });
                if (!postingan) {
                    return res.status(404).json({
                        msg: "cannot find id",
                        title: "",
                        body: "",
                    });
                }
                return res.status(200).json({
                    data: postingan,
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
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access",
                    });
                }
                const check = yield MateriModel_1.MateriModel.findOne({
                    _id: req.params.id,
                });
                if (!check) {
                    return res.status(404).json({
                        msg: "cannot find id",
                    });
                }
                const postingan = yield MateriModel_1.MateriModel.findByIdAndDelete({
                    _id: req.params.id,
                });
                return res.status(200).json({
                    msg: "delete materi berhasil",
                    data: postingan,
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
    getMateri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const materi = yield MateriModel_1.MateriModel.find();
            try {
                return res.status(200).json({
                    data: materi,
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
exports.default = new MateriController();
