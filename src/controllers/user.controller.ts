import { Request, Response } from "express";
import createUserService from "../services/user.service";
import { instanceToPlain } from "class-transformer";
import listUserService from "../services/list.service";

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
  const id = req.user.id

  const user = await listUserService(id)

  return res.status(200).json(user)
}