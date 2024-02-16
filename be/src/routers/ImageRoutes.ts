import express, { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import { auth } from "../middleware/AuthMiddleware";
import ImageController from "../controller/ImageController";
import path from "path";

class ImageRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.get("/", auth, ImageController.getImages);
    this.router.post("/", auth, ImageController.postImage);
    this.router.delete("/:id", auth, ImageController.deleteImage);
    this.router.delete("/file/:image", auth, ImageController.deleteImageFile);
    this.router.get("/images"); //gambar
  }
}

export default new ImageRoutes().router;
