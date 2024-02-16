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
const NilaiModel_1 = require("../models/NilaiModel");
const nanoid_1 = require("nanoid");
class NilaiController {
    constructor() {
        this.editNilai = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            if (role === "siswa") {
                return res.status(403).json({
                    msg: "siswa cannot access editNilai",
                });
            }
            try {
                let { nilai } = req.body;
                yield NilaiModel_1.NilaiModel.updateOne({ _id: req.params.parentId, "nilai._id": req.params.id }, {
                    $set: {
                        "nilai.$": {
                            _id: req.params.id,
                            nilai: nilai,
                        },
                    },
                });
                return res.status(200).json({
                    msg: `nilai berhasil di edit`,
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
    postJawaban(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullname, role } = res.locals.user;
            if (role === "guru") {
                return res.status(403).json({
                    msg: "guru cannot access postJawaban",
                });
            }
            //!!!!!!
            // const check: any = await NilaiModel.find({ nama: fullname });
            // let session: any = null;
            // if (check.length > 0) {
            //   session = check.pop();
            //   session = session.sesion_id + 1;
            // } else {
            //   session = 1;
            // }
            //!!!!!!
            try {
                const input = req.body;
                const session = (0, nanoid_1.nanoid)(12);
                if (input.length < 1) {
                    return res.status(200).json({
                        msg: "data tidak valid",
                    });
                }
                else {
                    yield NilaiModel_1.NilaiModel.insertMany({
                        student_name: fullname,
                        session_id: session,
                        nilai: input,
                    });
                    return res.status(200).json({
                        nilai: input,
                        student_name: fullname,
                        session_id: session,
                        msg: "sucess",
                    });
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
    getNilai(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access getUser",
                    });
                }
                const result = yield NilaiModel_1.NilaiModel.find();
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
    showNilai(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullname, role } = res.locals.user;
            try {
                const result = yield NilaiModel_1.NilaiModel.find({ student_name: fullname });
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
    showNilaiById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            try {
                if (role === "siswa") {
                    return res.status(403).json({
                        msg: "siswa cannot access showNilaiById",
                    });
                }
                const result = yield NilaiModel_1.NilaiModel.findOne({ _id: req.params.id });
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
    deleteNilaiById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { role } = res.locals.user;
            if (role === "siswa") {
                return res.status(403).json({
                    msg: "siswa cannot access deleteNilaiById",
                });
            }
            try {
                const result = yield NilaiModel_1.NilaiModel.findByIdAndDelete({ _id: req.params.id });
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
    getNilaiForGrafik(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullname } = res.locals.user;
            try {
                const result = yield NilaiModel_1.NilaiModel.find({ student_name: fullname });
                result.reverse();
                return res.status(200).json({
                    data: result[0],
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
exports.default = new NilaiController();
