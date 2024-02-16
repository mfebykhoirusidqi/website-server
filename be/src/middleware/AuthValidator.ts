import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import cekNama from "../utils/IncludeSlash";

const validate = [
  check("fullname")
    .isLength({ min: 4 })
    .custom(async (value) => {
      const cekSlash: boolean = cekNama(value);
      if (cekSlash) {
        throw new Error("dont use /");
      }
      return true;
    }),
  check("password").isLength({ min: 4 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422);
      return res.send({
        errors: errors.array(),
      });
    } else {
      return next();
    }
  },
];

export default validate;
