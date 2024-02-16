import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import MateriController from "../controller/MateriController";
import { auth } from "../middleware/AuthMiddleware";
class BlogRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.get("/", MateriController.getMateri);
    this.router.get("/:id", auth, MateriController.showMateri);
    this.router.post("/", auth, MateriController.create);
    this.router.put("/:id", auth, MateriController.update);
    this.router.delete("/:id", auth, MateriController.delete);
  }
}

export default new BlogRoutes().router;
