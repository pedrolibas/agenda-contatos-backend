import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const deleteContactService = async (idContact: string, idUser: string) => {
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

  await contactRepository.delete(idContact);

  return;
};

export default deleteContactService;
