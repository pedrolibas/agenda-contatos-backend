import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import createContactService from "../services/contacts/createContact.service";
import updateContactService from "../services/contacts/updateContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listOneContactService from "../services/contacts/listOneContact.service";

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

export const updateContactController = async (req: Request, res: Response) => {
  const idContact = req.params.id;
  const idUser = req.user.id;
  const contactUpdate = req.body;

  const updatedUser = await updateContactService(
    contactUpdate,
    idContact,
    idUser
  );

  return res.json(updatedUser).status(200);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const idContact = req.params.id;
  const idUser = req.user.id;

  await deleteContactService(idContact, idUser);

  return res.send(204);
};

export const listOneContactController = async (req: Request, res: Response) => {
  const idContact = req.params.id;

  const contact = await listOneContactService(idContact);

  return res.json(contact).status(200);
};
