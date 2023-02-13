export interface IUserRequest {
  name: string;
  email: string;
  telephone: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  telephone?: string;
  password?: string;
}
