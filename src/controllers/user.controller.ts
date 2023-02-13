import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";
import listUserService from "../services/users/listOneUser.service";
import updateUserService from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, telephone, password } = req.body;

  const userCreated = await createUserService({
    name,
    email,
    telephone,
    password,
  });

  return res.status(201).json(instanceToPlain(userCreated));
};

export const listUserController = async (req: Request, res: Response) => {
  const id = req.user.id;

  const user = await listUserService(id);

  return res.status(200).json(instanceToPlain(user));
};

export const updateUserController = async (req: Request, res: Response) => {
  const userUpdate = req.body;
  const idUser = req.user.id;

  const updatedUser = await updateUserService(userUpdate, idUser);

  return res.json(instanceToPlain(updatedUser));
};
