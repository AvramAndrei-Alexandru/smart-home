import { Role } from "../utils/enums";

export class UserModel {
    username: string;
    password: string;
    role: Role;
}

export class RegisterUserModel {
    username: string;
    password: string;
    confirmPassword: string;
    role: Role;
}