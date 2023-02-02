import { Router } from "express";
import { loginController } from "../controllers/sessions.controller";

const sessionRoutes = Router();

sessionRoutes.post("", loginController);

export default sessionRoutes;
