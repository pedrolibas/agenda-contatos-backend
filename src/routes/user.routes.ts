import { Router } from "express";
import {
  createUserController,
  listUserController,
} from "../controllers/user.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", verifyAuthMiddleware, listUserController);

export default userRoutes;
