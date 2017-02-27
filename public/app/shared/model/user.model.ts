export interface IUser{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class User implements IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}