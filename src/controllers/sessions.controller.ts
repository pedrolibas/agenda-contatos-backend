import { Request, Response } from "express";
import loginService from "../services/sessions.service";

export const loginController = async (req: Request, res: Response) => {
    const data = req.body;
    const token = await loginService(data)

    return res.status(200).json({token})
}