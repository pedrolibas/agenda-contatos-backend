import { Router } from "express";
import {
  createContactController,
  updateContactController,
} from "../controllers/contact.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", verifyAuthMiddleware, createContactController);
contactRoutes.patch("/:id", verifyAuthMiddleware, updateContactController);

export default contactRoutes;
