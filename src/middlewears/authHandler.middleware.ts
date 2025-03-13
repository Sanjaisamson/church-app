import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secrets } from "../config/authConfig";
import { RefreshToken } from "../db/models/RefreshToken";

async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("isAuthenticated function called");
    const authHeader = req.headers.authorization;
    console.log("authHeader : ", authHeader);
    if (!authHeader) {
      return res.status(401).send("Unauthorized");
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, secrets.accessToken as string);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
}

async function verifyRefreshToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("verifyRefreshToken function called");
    const refreshToken = req.cookies.rtoken;
    console.log("refreshToken : ", refreshToken);
    if (!refreshToken) {
      return res.status(401).send("Unauthorized");
    }
    const decoded = jwt.verify(refreshToken, secrets.refreshToken as string);
    const user = await RefreshToken.findOne({
      where: { userId: (decoded as any).id, refreshToken: refreshToken },
    });
    if (!user) {
      return res.status(401).send("Unauthorized");
    }
    (req as any).user = decoded;
    next();
  } catch (error) {}
}

export default {
  isAuthenticated,
  verifyRefreshToken,
};
