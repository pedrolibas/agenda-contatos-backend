import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const listOneContactService = async (idContact: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    relations: {
      user: true,
    },
    where: {
      id: idContact,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return contact;
};

export default listOneContactService;
