import { compare } from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import { Ilogin } from "../interfaces/sessions.interface";
import jwt from "jsonwebtoken";
import "dotenv/config"

const loginService = async ({ email, password }: Ilogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
  });

  return token;
};

export default loginService;
