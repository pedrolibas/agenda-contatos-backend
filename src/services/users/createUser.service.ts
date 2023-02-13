import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserRequest } from "../../interfaces/user.interface";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  email,
  telephone,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError("Email already exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.telephone = telephone;
  user.password = bcrypt.hashSync(password, 10);

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default createUserService;
