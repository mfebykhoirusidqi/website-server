import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class HashFunction {
  public static hash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };
  public static passwordComppare = async (
    password: string,
    hashPassword: string
  ): Promise<boolean> => {
    let result = await bcrypt.compare(password, hashPassword);
    return result;
  };

  public static generate = (
    fullname: string,
    gender: string,
    email: string,
    password: string,
    role: string
  ): string => {
    const secretKey: string = process.env.JWT_SECRET_KEY || "amia";
    const token: string = jwt.sign(
      { fullname, gender, email, password, role },
      secretKey
    );
    return token;
  };
}

export default HashFunction;
