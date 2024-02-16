import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    let token = String(req.headers["authorization"]).split(" ")[1];

    res.locals.user = jwt.verify(token, String(process.env.JWT_SECRET_KEY));

    return next();
  } catch (err) {
    console.error(err);

    return res
      .status(403)
      .json({
        message: "failed to verify the token",
      })
      .end();
  }
};
