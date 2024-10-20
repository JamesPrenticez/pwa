import { User } from "@models/user";

export interface LoginDetails {
  email: User["email"];
  password: string;
}

export interface RegisterDetails {
  email: User["email"];
  password: string;
}
