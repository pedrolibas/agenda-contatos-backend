export interface IContactRequest {
  name: string;
  email: string;
  telephone: string;
  idUser: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  telephone?: string;
}
