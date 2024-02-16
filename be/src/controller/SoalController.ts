import { Request, Response, NextFunction } from "express";
import { NilaiModel } from "../models/NilaiModel";
import { TotalJawabanBenar } from "../utils/TotalJawabanBenar";
import { C1Model } from "../models/C1Model";
import { C2Model } from "../models/C2Model";
import { C3Model } from "../models/C3Model";
import { C4Model } from "../models/C4Model";
import { C5Model } from "../models/C5Model";
import { C6Model } from "../models/C6Model";

interface Jawaban {
  soal: string;
  status: boolean;
}

type Kategori = {
  kategori: string;
  soal: string;
  jawaban: Jawaban[];
};

type Soal = Kategori[];

class SoalController {
  async createSoal(req: Request, res: Response): Promise<any> {
    const input: Soal = req.body;
    const Data: Kategori[] = [];
    for (let entry of input) {
      let jawabans: Jawaban[] = [];
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
            const result = await C1Model.insertMany(Data);
            res.status(200).json({
              msg: `create soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c2":
          {
            const result = await C2Model.insertMany(Data);
            res.status(200).json({
              msg: `create soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c3":
          {
            const result = await C3Model.insertMany(Data);
            res.status(200).json({
              msg: `create soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c4":
          {
            const result = await C4Model.insertMany(Data);
            res.status(200).json({
              msg: `create soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c5":
          {
            const result = await C5Model.insertMany(Data);
            res.status(200).json({
              msg: `create soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c6":
          {
            const result = await C6Model.insertMany(Data);
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async updateSoal(req: Request, res: Response): Promise<any> {
    const { soal } = req.body;
    try {
      switch (req.params.category) {
        case "c1":
          {
            const check = await C1Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
            const result = await C1Model.updateMany(
              { _id: req.params.id },
              {
                $set: {
                  soal: soal,
                },
              }
            );
            res.status(200).json({
              msg: `update soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c2":
          {
            const check = await C2Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
            const result = await C2Model.updateMany(
              { _id: req.params.id },
              {
                $set: {
                  soal: soal,
                },
              }
            );
            res.status(200).json({
              msg: `update soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c3":
          {
            const check = await C3Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
            const result = await C3Model.updateMany(
              { _id: req.params.id },
              {
                $set: {
                  soal: soal,
                },
              }
            );
            res.status(200).json({
              msg: `update soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c4":
          {
            const check = await C4Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
            const result = await C4Model.updateMany(
              { _id: req.params.id },
              {
                $set: {
                  soal: soal,
                },
              }
            );
            res.status(200).json({
              msg: `update soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c5":
          {
            const check = await C5Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
            const result = await C5Model.updateMany(
              { _id: req.params.id },
              {
                $set: {
                  soal: soal,
                },
              }
            );
            res.status(200).json({
              msg: `update soal ${req.params.category} berhasil`,
              data: result,
            });
          }
          break;
        case "c6":
          {
            const check = await C6Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
            const result = await C6Model.updateMany(
              { _id: req.params.id },
              {
                $set: {
                  soal: soal,
                },
              }
            );
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async deleteSoal(req: Request, res: Response): Promise<any> {
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
          const check = await C1Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C1Model.findByIdAndDelete({
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
          const check = await C2Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C2Model.findByIdAndDelete({
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
          const check = await C3Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C3Model.findByIdAndDelete({
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
          const check = await C4Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C4Model.findByIdAndDelete({
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
          const check = await C5Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C5Model.findByIdAndDelete({
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
          const check = await C6Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C6Model.findByIdAndDelete({
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
  }

  async index(req: Request, res: Response): Promise<any> {
    // const { username, id } = res.locals.user;
    try {
      switch (req.params.category) {
        case "c1":
          {
            const soal = await C1Model.find();
            res.status(200).json({
              data: soal,
            });
          }
          break;
        case "c2":
          {
            const soal = await C2Model.find();
            res.status(200).json({
              data: soal,
            });
          }
          break;
        case "c3":
          {
            const soal = await C3Model.find();
            res.status(200).json({
              data: soal,
            });
          }
          break;
        case "c4":
          {
            const soal = await C4Model.find();
            res.status(200).json({
              data: soal,
            });
          }
          break;
        case "c5":
          {
            const soal = await C5Model.find();
            res.status(200).json({
              data: soal,
            });
          }
          break;
        case "c6":
          {
            const soal = await C6Model.find();
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }
}

export default new SoalController();
