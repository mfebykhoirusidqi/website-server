import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import AuthController from "../controller/AuthController";
import validate from "../middleware/AuthValidator";
import { auth } from "../middleware/AuthMiddleware";

class AuthRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/user/:role", auth, AuthController.getUser);
    this.router.get("/user-role", auth, AuthController.showUser);
    this.router.get(
      "/user-id/:id",

      auth,
      AuthController.getUserById
    );
    this.router.post(
      "/register",

      validate,
      AuthController.registers
    );
    this.router.post("/login", AuthController.login);
    this.router.put(
      "/update-email/:id",

      auth,
      AuthController.updateEmail
    );
    this.router.put(
      "/edit-profil/:id",

      validate,
      auth,
      AuthController.editProfil
    );
    this.router.put(
      "/edit-user/:id",

      validate,
      auth,
      AuthController.editUser
    );
  }
}

export default new AuthRoutes().router;
