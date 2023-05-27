import { IContact } from "./contact.model";

export interface IUser {
    id: number;
    name: string;
    birthdate: string;
    contactList: IContact[];
}