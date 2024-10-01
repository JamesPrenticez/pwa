import { IUser } from "@models/user";

export interface LoginDetails {
  email: IUser["email"];
  password: string;
}

export interface RegisterDetails {
  email: IUser["email"];
  password: string;
}
