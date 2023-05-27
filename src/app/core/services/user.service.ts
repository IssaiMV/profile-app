import { Injectable } from '@angular/core';
import { IContact } from '../../shared/models/contact.model';
import { IUser } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [];

  constructor() {
    const userList = localStorage.getItem('userList');
    if (userList) {
      this.users = JSON.parse(userList);
    }
  }

  save(user: IUser): void {
    if (this.isDuplicate(user)) {
      throw new Error('El usuario ya existe.');
    }

    user.id = Date.now(); // Create a unique id
    this.users.push(user);
    localStorage.setItem('userList', JSON.stringify(this.users));
  }

  edit(user: IUser): void {
    const index = this.users.findIndex(u => u.id === user.id);

    if (index === -1) {
      throw new Error('El usuario no existe.');
    }

    if (this.isDuplicate(user)) {
      throw new Error('La edición resultaría en un usuario duplicado.');
    }

    this.users[index] = user;
    localStorage.setItem('userList', JSON.stringify(this.users));
  }

  get(id: number): IUser | null {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new Error('El usuario no existe.');
    }

    return user;
  }

  getAll(): Promise<IUser[]> {
    return new Promise<IUser[]>((resolve) => {
      resolve(this.users);
    });
  }

  delete(id: number): void {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      throw new Error('El usuario no existe.');
    }

    this.users.splice(userIndex, 1);
    localStorage.setItem('userList', JSON.stringify(this.users));
  }

  private isDuplicate(user: IUser): boolean {
    return this.users.some(u => u.name === user.name && u.birthdate === user.birthdate && this.hasDuplicateContact(u.contactList, user.contactList));
  }

  private hasDuplicateContact(contactList1: IContact[], contactList2: IContact[]): boolean {
    for (let contact1 of contactList1) {
      for (let contact2 of contactList2) {
        if (contact1.email === contact2.email && contact1.numberPhone === contact2.numberPhone) {
          return true;
        }
      }
    }
    return false;
  }
}
