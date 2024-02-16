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
const C1Model_1 = require("../models/C1Model");
const C2Model_1 = require("../models/C2Model");
const C3Model_1 = require("../models/C3Model");
const C4Model_1 = require("../models/C4Model");
const C5Model_1 = require("../models/C5Model");
const C6Model_1 = require("../models/C6Model");
class SoalController {
    createSoal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = req.body;
            const Data = [];
            for (let entry of input) {
                let jawabans = [];
                for (let jawaban of entry.jawaban) {
                    jawabans.push({
                        soal: jawaban.soal,
                        status: jawaban.status,
                    });
                }
                let soals = {
                    kategori: req.params.category,
                    soal: entry.soal,
                    jawaban: jawabans,
                };
                Data.push(soals);
            }
            try {
                switch (req.params.category) {
                    case "c1":
                        {
                            const result = yield C1Model_1.C1Model.insertMany(Data);
                            res.status(200).json({
                                msg: `create soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c2":
                        {
                            const result = yield C2Model_1.C2Model.insertMany(Data);
                            res.status(200).json({
                                msg: `create soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c3":
                        {
                            const result = yield C3Model_1.C3Model.insertMany(Data);
                            res.status(200).json({
                                msg: `create soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c4":
                        {
                            const result = yield C4Model_1.C4Model.insertMany(Data);
                            res.status(200).json({
                                msg: `create soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c5":
                        {
                            const result = yield C5Model_1.C5Model.insertMany(Data);
                            res.status(200).json({
                                msg: `create soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c6":
                        {
                            const result = yield C6Model_1.C6Model.insertMany(Data);
                            res.status(200).json({
                                msg: `create soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    default:
                        res.status(404).json({
                            msg: "wrong kategori",
                        });
                        break;
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
    updateSoal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { soal } = req.body;
            try {
                switch (req.params.category) {
                    case "c1":
                        {
                            const check = yield C1Model_1.C1Model.findOne({
                                _id: req.params.id,
                            });
                            if (!check) {
                                return res.status(404).json({
                                    msg: `soal not found`,
                                });
                            }
                            const result = yield C1Model_1.C1Model.updateMany({ _id: req.params.id }, {
                                $set: {
                                    soal: soal,
                                },
                            });
                            res.status(200).json({
                                msg: `update soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c2":
                        {
                            const check = yield C2Model_1.C2Model.findOne({
                                _id: req.params.id,
                            });
                            if (!check) {
                                return res.status(404).json({
                                    msg: `soal not found`,
                                });
                            }
                            const result = yield C2Model_1.C2Model.updateMany({ _id: req.params.id }, {
                                $set: {
                                    soal: soal,
                                },
                            });
                            res.status(200).json({
                                msg: `update soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c3":
                        {
                            const check = yield C3Model_1.C3Model.findOne({
                                _id: req.params.id,
                            });
                            if (!check) {
                                return res.status(404).json({
                                    msg: `soal not found`,
                                });
                            }
                            const result = yield C3Model_1.C3Model.updateMany({ _id: req.params.id }, {
                                $set: {
                                    soal: soal,
                                },
                            });
                            res.status(200).json({
                                msg: `update soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c4":
                        {
                            const check = yield C4Model_1.C4Model.findOne({
                                _id: req.params.id,
                            });
                            if (!check) {
                                return res.status(404).json({
                                    msg: `soal not found`,
                                });
                            }
                            const result = yield C4Model_1.C4Model.updateMany({ _id: req.params.id }, {
                                $set: {
                                    soal: soal,
                                },
                            });
                            res.status(200).json({
                                msg: `update soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c5":
                        {
                            const check = yield C5Model_1.C5Model.findOne({
                                _id: req.params.id,
                            });
                            if (!check) {
                                return res.status(404).json({
                                    msg: `soal not found`,
                                });
                            }
                            const result = yield C5Model_1.C5Model.updateMany({ _id: req.params.id }, {
                                $set: {
                                    soal: soal,
                                },
                            });
                            res.status(200).json({
                                msg: `update soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    case "c6":
                        {
                            const check = yield C6Model_1.C6Model.findOne({
                                _id: req.params.id,
                            });
                            if (!check) {
                                return res.status(404).json({
                                    msg: `soal not found`,
                                });
                            }
                            const result = yield C6Model_1.C6Model.updateMany({ _id: req.params.id }, {
                                $set: {
                                    soal: soal,
                                },
                            });
                            res.status(200).json({
                                msg: `update soal ${req.params.category} berhasil`,
                                data: result,
                            });
                        }
                        break;
                    default:
                        res.status(404).json({
                            msg: "wrong kategori",
                        });
                        break;
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
    deleteSoal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const result = await C1Model.findByIdAndDelete({
            //   _id: req.params.id,
            // });
            // res.status(200).json({
            //   msg: `delete soal ${req.params.category} berhasil`,
            //   data: result,
            // });
            switch (req.params.category) {
                case "c1":
                    {
                        const check = yield C1Model_1.C1Model.findOne({
                            _id: req.params.id,
                        });
                        if (!check) {
                            return res.status(404).json({
                                msg: `soal not found`,
                            });
                        }
                        const result = yield C1Model_1.C1Model.findByIdAndDelete({
                            _id: req.params.id,
                        });
                        res.status(200).json({
                            msg: `delete soal ${req.params.category} berhasil`,
                            data: result,
                        });
                    }
                    break;
                case "c2":
                    {
                        const check = yield C2Model_1.C2Model.findOne({
                            _id: req.params.id,
                        });
                        if (!check) {
                            return res.status(404).json({
                                msg: `soal not found`,
                            });
                        }
                        const result = yield C2Model_1.C2Model.findByIdAndDelete({
                            _id: req.params.id,
                        });
                        res.status(200).json({
                            msg: `delete soal ${req.params.category} berhasil`,
                            data: result,
                        });
                    }
                    break;
                case "c3":
                    {
                        const check = yield C3Model_1.C3Model.findOne({
                            _id: req.params.id,
                        });
                        if (!check) {
                            return res.status(404).json({
                                msg: `soal not found`,
                            });
                        }
                        const result = yield C3Model_1.C3Model.findByIdAndDelete({
                            _id: req.params.id,
                        });
                        res.status(200).json({
                            msg: `delete soal ${req.params.category} berhasil`,
                            data: result,
                        });
                    }
                    break;
                case "c4":
                    {
                        const check = yield C4Model_1.C4Model.findOne({
                            _id: req.params.id,
                        });
                        if (!check) {
                            return res.status(404).json({
                                msg: `soal not found`,
                            });
                        }
                        const result = yield C4Model_1.C4Model.findByIdAndDelete({
                            _id: req.params.id,
                        });
                        res.status(200).json({
                            msg: `delete soal ${req.params.category} berhasil`,
                            data: result,
                        });
                    }
                    break;
                case "c5":
                    {
                        const check = yield C5Model_1.C5Model.findOne({
                            _id: req.params.id,
                        });
                        if (!check) {
                            return res.status(404).json({
                                msg: `soal not found`,
                            });
                        }
                        const result = yield C5Model_1.C5Model.findByIdAndDelete({
                            _id: req.params.id,
                        });
                        res.status(200).json({
                            msg: `delete soal ${req.params.category} berhasil`,
                            data: result,
                        });
                    }
                    break;
                case "c6":
                    {
                        const check = yield C6Model_1.C6Model.findOne({
                            _id: req.params.id,
                        });
                        if (!check) {
                            return res.status(404).json({
                                msg: `soal not found`,
                            });
                        }
                        const result = yield C6Model_1.C6Model.findByIdAndDelete({
                            _id: req.params.id,
                        });
                        res.status(200).json({
                            msg: `delete soal ${req.params.category} berhasil`,
                            data: result,
                        });
                    }
                    break;
                default:
                    res.status(404).json({
                        msg: "wrong kategori",
                    });
                    break;
            }
        });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { username, id } = res.locals.user;
            try {
                switch (req.params.category) {
                    case "c1":
                        {
                            const soal = yield C1Model_1.C1Model.find();
                            res.status(200).json({
                                data: soal,
                            });
                        }
                        break;
                    case "c2":
                        {
                            const soal = yield C2Model_1.C2Model.find();
                            res.status(200).json({
                                data: soal,
                            });
                        }
                        break;
                    case "c3":
                        {
                            const soal = yield C3Model_1.C3Model.find();
                            res.status(200).json({
                                data: soal,
                            });
                        }
                        break;
                    case "c4":
                        {
                            const soal = yield C4Model_1.C4Model.find();
                            res.status(200).json({
                                data: soal,
                            });
                        }
                        break;
                    case "c5":
                        {
                            const soal = yield C5Model_1.C5Model.find();
                            res.status(200).json({
                                data: soal,
                            });
                        }
                        break;
                    case "c6":
                        {
                            const soal = yield C6Model_1.C6Model.find();
                            res.status(200).json({
                                data: soal,
                            });
                        }
                        break;
                    default:
                        res.status(404).json({
                            msg: "wrong kategori",
                        });
                        break;
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
}
exports.default = new SoalController();
