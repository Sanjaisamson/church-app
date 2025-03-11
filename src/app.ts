import express, { type NextFunction, type Request, type Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./db/db";

import userRouter from "./routers/user.router";
import CreateCustomError from "./errors/customErrorClass";
import { up } from "./db/migrator";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configure and use middlewares
app.use(cors({ origin: '*', credentials: true })); // Configure CORS as needed
app.use(cookieParser());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Database connection
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

void (async () => {
  try {
    await db.sequelize.sync();
    console.log("Database synced");
  } catch (error) {
    console.log(error);
    console.error(`Error while connecting and syncing to DB: ${error as string}`);
  }
  try {
		await up();
		console.info('Migrated DB.');
	} catch (error) {
		console.error(error);
		console.error(`Failed to migrate`);
	}
})();

// Define routes
app.use("/user", userRouter);

// 404 error handler for undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new CreateCustomError("Cannot find this URL", 404);
  next(err);
});

// Error handling middleware
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const errorMsg = error.message ?? "Something went wrong";
  res.status(error.statusCode || 500).send({
    status: {
      success: false,
      message: errorMsg,
      errorCategory: error.name,
    },
  });
});

// Start the server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
