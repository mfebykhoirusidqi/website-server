import { Request, Response, NextFunction } from "express";
import RemoveImage from "../utils/RemoveImage";
import { ImageModel } from "../models/ImageModel";

class ImageController {
  async getImages(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access getImages",
        });
      }
      const result = await ImageModel.find();
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

  async postImage(req: Request, res: Response): Promise<any> {
    const { fullname, role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access postGambar",
        });
      }

      let { alt } = req.body;
      const image: string = req.file?.filename || "default";

      const gambar = await ImageModel.insertMany({
        image: image,
        alt: alt,
      });

      return res.status(200).json({
        msg: "create materi berhasil",
        data: gambar,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async deleteImage(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access deleteImage",
        });
      }
      const result = await ImageModel.findByIdAndDelete({ _id: req.params.id });
      RemoveImage(result?.image);
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

  async deleteImageFile(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access deleteImage",
        });
      }
      RemoveImage(req.params.image);
      return res.status(200).json({
        data: "success",
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }
}

export default new ImageController();
