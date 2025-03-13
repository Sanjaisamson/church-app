import express from 'express';
import userController from '../controllers/user.controller';
import authHandlerMiddleware from '../middlewears/authHandler.middleware';

const userRouter = express.Router();

userRouter.post('/login', userController.authenticateUser);
userRouter.post('/create', authHandlerMiddleware.isAuthenticated, userController.createUser);
userRouter.post('/refresh', authHandlerMiddleware.verifyRefreshToken);
userRouter.post('/logout', authHandlerMiddleware.isAuthenticated, userController.logoutUser);




export default userRouter