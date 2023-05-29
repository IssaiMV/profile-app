import { Component } from '@angular/core';
import { IUser } from '../../../../shared/models/user.model';
import { UserService } from '../../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  errorMessage: string | null = null;


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  saveUser(user: IUser) {
    try {
      this.userService.save(user);
      this.router.navigate(['/', 'usuarios']);
    } catch (error: any) {
      this.displayError(error.message);
    }
  }

  displayError(message: string) {
    this.errorMessage = message;
    setTimeout(() => this.errorMessage = null, 6000);
  }
}
