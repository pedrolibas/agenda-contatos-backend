import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contact.inteface";

const createContactService = async ({
  name,
  email,
  telephone,
  idUser,
}: IContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: idUser });

  if (!user) {
    throw new AppError("User not exists", 400);
  }

  const contact = contactRepository.create({
    name: name,
    email: email,
    telephone: telephone,
    user: user,
  });

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
