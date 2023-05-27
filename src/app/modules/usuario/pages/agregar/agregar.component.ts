import { Component } from '@angular/core';
import { IUser } from '../../../../shared/models/user.model';
import { UserService } from '../../../../core/services/user.service';

@Component({
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  errorMessage: string | null = null;


  constructor(
    private userService: UserService
  ) { }

  saveUser(user: IUser) {
    try {
      this.userService.save(user);
    } catch (error: any) {
      this.displayError(error.message);
    }
  }

  displayError(message: string) {
    this.errorMessage = message;
    setTimeout(() => this.errorMessage = null, 6000);
  }
}
