import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import NilaiController from "../controller/NilaiController";
import { auth } from "../middleware/AuthMiddleware";

class NilaiRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    //nilai
    this.router.post("/post-jawaban", auth, NilaiController.postJawaban);
    this.router.get("/nilai-siswa", auth, NilaiController.showNilai);
    this.router.get("/", auth, NilaiController.getNilai);
    this.router.get("/:id", auth, NilaiController.showNilaiById);
    this.router.put("/:parentId/:id", auth, NilaiController.editNilai);
    this.router.delete("/:id", auth, NilaiController.deleteNilaiById);
    this.router.get(
      "/nilai/nilai-grafik",
      auth,
      NilaiController.getNilaiForGrafik
    );
    //end nilai
  }
}

export default new NilaiRoutes().router;
