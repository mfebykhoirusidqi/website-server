import { Request, Response, NextFunction } from "express";
import { MateriModel } from "../models/MateriModel";

class MateriController {
  async create(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    const { title, body } = req.body;

    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access",
        });
      }

      const postingan = await MateriModel.insertMany({
        title: title,
        body: body,
      });

      return res.status(200).json({
        msg: "create materi berhasil",
        data: postingan,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async update(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    const { title, body } = req.body;

    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access",
        });
      }

      const check = await MateriModel.findOne({
        _id: req.params.id,
      });

      if (!check) {
        return res.status(404).json({
          msg: "cannot find id",
          title: "",
          body: "",
        });
      }

      const postingan = await MateriModel.updateMany(
        { _id: req.params.id },
        {
          $set: {
            title: title,
            body: body,
          },
        }
      );

      return res.status(200).json({
        msg: "update materi berhasil",
        data: postingan,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async showMateri(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access",
        });
      }

      const postingan = await MateriModel.findOne({
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access",
        });
      }

      const check = await MateriModel.findOne({
        _id: req.params.id,
      });

      if (!check) {
        return res.status(404).json({
          msg: "cannot find id",
        });
      }

      const postingan = await MateriModel.findByIdAndDelete({
        _id: req.params.id,
      });

      return res.status(200).json({
        msg: "delete materi berhasil",
        data: postingan,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async getMateri(req: Request, res: Response): Promise<any> {
    const materi = await MateriModel.find();
    try {
      return res.status(200).json({
        data: materi,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }
}

export default new MateriController();
