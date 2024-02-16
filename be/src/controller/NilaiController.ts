import { Request, Response, NextFunction } from "express";
import { NilaiModel } from "../models/NilaiModel";
import { nanoid } from "nanoid";

class NilaiController {
  async postJawaban(req: Request, res: Response): Promise<any> {
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
      const input: any[] = req.body;
      const session: any = nanoid(12);
      if (input.length < 1) {
        return res.status(200).json({
          msg: "data tidak valid",
        });
      } else {
        await NilaiModel.insertMany({
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async getNilai(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access getUser",
        });
      }
      const result = await NilaiModel.find();
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async showNilai(req: Request, res: Response): Promise<any> {
    const { fullname, role } = res.locals.user;

    try {
      const result = await NilaiModel.find({ student_name: fullname });
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async showNilaiById(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access showNilaiById",
        });
      }
      const result = await NilaiModel.findOne({ _id: req.params.id });
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async deleteNilaiById(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access deleteNilaiById",
      });
    }
    try {
      const result = await NilaiModel.findByIdAndDelete({ _id: req.params.id });
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  editNilai = async (req: Request, res: Response): Promise<Response> => {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access editNilai",
      });
    }

    try {
      let { nilai } = req.body;

      await NilaiModel.updateOne(
        { _id: req.params.parentId, "nilai._id": req.params.id },
        {
          $set: {
            "nilai.$": {
              _id: req.params.id,
              nilai: nilai,
            },
          },
        }
      );

      return res.status(200).json({
        msg: `nilai berhasil di edit`,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  };

  async getNilaiForGrafik(req: Request, res: Response): Promise<any> {
    const { fullname } = res.locals.user;
    try {
      const result = await NilaiModel.find({ student_name: fullname });
      result.reverse();
      return res.status(200).json({
        data: result[0],
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }
}

export default new NilaiController();
