import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/user.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", verifyAuthMiddleware, listUserController);
userRoutes.patch("", verifyAuthMiddleware, updateUserController);
userRoutes.delete("", verifyAuthMiddleware, deleteUserController);

export default userRoutes;
