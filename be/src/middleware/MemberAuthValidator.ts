import { Request, Response, NextFunction } from "express";

export const corsValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
};
