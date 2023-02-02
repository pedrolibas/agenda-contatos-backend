import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const listUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.find({
    relations : {
        contacts: true
    },
    where: {
        id
    }
  })

  return user;
};

export default listUserService;
