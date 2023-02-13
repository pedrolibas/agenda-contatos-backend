import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listOneContactController,
  updateContactController,
} from "../controllers/contact.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", verifyAuthMiddleware, createContactController);
contactRoutes.patch("/:id", verifyAuthMiddleware, updateContactController);
contactRoutes.delete("/:id", verifyAuthMiddleware, deleteContactController);
contactRoutes.get("/:id", verifyAuthMiddleware, listOneContactController);

export default contactRoutes;
