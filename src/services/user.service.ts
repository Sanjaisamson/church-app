import { where } from "sequelize";
import db from "../db/db";
import { User } from "../db/models/User";
import CreateCustomError from "../errors/customErrorClass";
import { validateSchema } from "../validator";
import {
  CreateUserReqBody,
  CreateUserSchema,
  LoginUserReqBody,
  LoginUserSchema,
} from "../validator/validations/userValidations";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secrets, tokenExpiry } from "../config/authConfig";
import { promise } from "zod";
import { RefreshToken } from "../db/models/RefreshToken";

async function createUser(payload: any) {
  let transaction;
  try {
    const { success, data, error } = validateSchema(CreateUserSchema, payload);

    if (!success) {
      console.error(
        `Failed to validate create user request: ${error?.message as string}`
      );
      throw new Error(error?.message);
    }
    const validatedData = data as CreateUserReqBody;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(validatedData.password, salt);

    const userObj = {
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      password: hashedPassword,
      phoneNumber: validatedData.phoneNumber,
      userRole: validatedData.role,
    };

    transaction = await db.sequelize.transaction();
    const isUserExist = await User.findOne({
      where: { email: userObj.email },
    });

    if (isUserExist) {
      throw new Error("user with same email id exist");
    }

    const createUser = await User.create(userObj, { transaction });
    await transaction.commit();
    return createUser;
  } catch (error: any) {
    console.log("Error while creating user");
    throw error;
  }
}

async function authenticateUser(payload: any) {
  try {
    const { success, data, error } = validateSchema(LoginUserSchema, payload);
    if (!success) {
      console.error(
        `Failed to validate login user request: ${error?.message as string}`
      );
      throw new Error(error?.message);
    }
    const validatedData = data as LoginUserReqBody;
    const userLoginPayload = {
      email: validatedData.email,
      password: validatedData.password,
    };
    const user = await User.findOne({
      where: {
        email: userLoginPayload.email,
      },
    });
    if (!user) {
      throw new Error("user not found for this email");
    }
    const isVerified = await bcrypt.compare(
      userLoginPayload.password,
      user.password
    );
    if (!isVerified) {
      throw new Error("password authentication failed ");
    }
    return user.id;
  } catch (error) {
    console.log("Error while authenticate user", error);
    throw error;
  }
}

async function generateTokens(
  userId: any
): Promise<{ accessToken: string; refreshToken: string } | undefined> {
  try {
    console.log("generateTokens function called");
    if (!secrets.accessToken || !secrets.refreshToken) {
      throw new Error("JWT secrets are not defined");
    }
    const accessToken = jwt.sign({ userId }, secrets.accessToken, {
      expiresIn: tokenExpiry.accessTokenExp,
    });
    const refreshToken = jwt.sign({ userId }, secrets.refreshToken, {
      expiresIn: tokenExpiry.refreshTokenExp,
    });
    return { accessToken, refreshToken };
  } catch (error) {
    console.log("Error while creating tokens", error);
    throw error;
  }
}

async function saveTokens(userId: any, NewRefreshToken: any) {
  try {
    console.log("saveTokens function called with newRefreshToken : ", NewRefreshToken);
    const refreshToken = await RefreshToken.findOne({
      where: {
        userId,
      },
    });
    console.log("refreshToken at saveTokens function : ", refreshToken);
    if (refreshToken) {
      const updateToken = await RefreshToken.update(
        { refreshToken: NewRefreshToken },
        {
          where: { userId },
        }
      );
      console.log("updateToken at saveTokens function : ", updateToken);
      return updateToken;
    } else {
      console.log("else block at saveTokens function");
      const newToken = await RefreshToken.create({
        userId,
        refreshToken: NewRefreshToken,
      });
      console.log("newToken at saveTokens function : ", newToken);
      return newToken;
    }
  } catch (error) {
    console.log("Error while save refresh token", error);
    throw error;
  }
}

async function logout(userId: any){
    const refreshToken = await RefreshToken.destroy({
        where: {
            userId
        }
    })
    if (!refreshToken) {
        throw new Error('Error while logout')
    }
    return (refreshToken)
}

export default {
  createUser,
  authenticateUser,
  generateTokens,
  saveTokens,
  logout,
};
