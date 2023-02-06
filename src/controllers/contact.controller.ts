import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import createContactService from "../services/contact.service";

export const createContactController = async (req: Request, res: Response) => {
  const { name, email, telephone } = req.body;
  const idUser = req.user.id;

  const contactCreated = await createContactService({
    name,
    email,
    telephone,
    idUser,
  });

  return res.status(201).json(instanceToPlain(contactCreated));
};
