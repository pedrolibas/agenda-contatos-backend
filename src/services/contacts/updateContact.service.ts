import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";
import {
  IContactRequest,
  IContactUpdate,
} from "../../interfaces/contact.inteface";

const updateContactService = async (
  { name, email, telephone }: IContactUpdate,
  idContact: string,
  idUser: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.find({
    relations: {
      user: true,
    },
    where: {
      id: idContact,
    },
  });

  if (!findContact[0]) {
    throw new AppError("Contact not found", 404);
  }

  if (idUser != findContact[0].user.id) {
    throw new AppError("You are not the owner of this contact.", 403);
  }

  await contactRepository.update(idContact, {
    name: name ? name : findContact[0].name,
    email: email ? email : findContact[0].email,
    telephone: telephone ? telephone : findContact[0].telephone,
  });

  const contact = await contactRepository.findOneBy({
    id: idContact,
  });

  return contact!;
};

export default updateContactService;
