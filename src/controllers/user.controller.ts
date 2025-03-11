import type { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";
import { cookieExpiry } from "../config/authConfig";

async function createUser(req: Request, res: Response) {
  try {
    const requestPayload = req.body;
    const createUser = await userService.createUser(requestPayload);
    return res.status(201).send({
      success: true,
      data: createUser,
    });
  } catch (error) {
    throw error;
  }
}
async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const loginPayload = req.body;
    const loggedUserId = await userService.authenticateUser(loginPayload);
    const tokens = await userService.generateTokens(loggedUserId);
    await userService.saveTokens(loggedUserId, tokens?.refreshToken);
    res.cookie("rtoken", tokens?.refreshToken, {
      httpOnly: true,
      maxAge: cookieExpiry.maxAge,
    });
    return res.send({ tokens });
  } catch (error) {
    throw error;
  }
}

async function logoutUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.body.userId;
    const logout = await userService.logout(userId);
    res.clearCookie("jwt");
    return res.send(logout);
  } catch (error) {
    throw error;
  }
}

export default {
  createUser,
  authenticateUser,
  logoutUser,
};
