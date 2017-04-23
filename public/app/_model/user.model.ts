export interface IUser{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userId: string;
}

export class User implements IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userId: string;
}