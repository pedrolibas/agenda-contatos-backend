import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  updateContactController,
} from "../controllers/contact.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", verifyAuthMiddleware, createContactController);
contactRoutes.patch("/:id", verifyAuthMiddleware, updateContactController);
contactRoutes.delete("/:id", verifyAuthMiddleware, deleteContactController);

export default contactRoutes;
