import { Router } from "express";
import {
  createUserController,
  listUserController,
  updateUserController,
} from "../controllers/user.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", verifyAuthMiddleware, listUserController);
userRoutes.patch("", verifyAuthMiddleware, updateUserController);

export default userRoutes;
