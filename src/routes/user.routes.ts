import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const userRoutes = Router();

userRoutes.post("", verifyAuthMiddleware,createUserController);

export default userRoutes;
