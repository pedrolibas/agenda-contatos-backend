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

  const findContact = await contactRepository.findOne({
    relations: {
      user: true,
    },
    where: {
      id: idContact,
    },
  });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  if (idUser != findContact.user.id) {
    throw new AppError("You are not the owner of this contact.", 403);
  }

  await contactRepository.update(idContact, {
    name: name ? name : findContact.name,
    email: email ? email : findContact.email,
    telephone: telephone ? telephone : findContact.telephone,
  });

  const contact = await contactRepository.findOneBy({
    id: idContact,
  });

  return contact!;
};

export default updateContactService;
