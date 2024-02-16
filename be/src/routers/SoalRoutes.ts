import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import SoalController from "../controller/SoalController";
import { auth } from "../middleware/AuthMiddleware";

class SoalRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    //soal
    this.router.get("/list-soal/:category", auth, SoalController.index);
    this.router.post("/post-soal/:category", auth, SoalController.createSoal);
    this.router.put(
      "/update-soal/:category/:id",
      auth,
      SoalController.updateSoal
    );
    this.router.delete(
      "/delete-soal/:category/:id",
      auth,
      SoalController.deleteSoal
    );
    //end oal
  }
}

export default new SoalRoutes().router;
