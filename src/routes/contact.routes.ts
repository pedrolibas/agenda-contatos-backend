import { Router } from "express";
import { createContactController } from "../controllers/contact.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", verifyAuthMiddleware, createContactController);

export default contactRoutes;
