import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../../shared/models/user.model';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {
  user!: IUser;
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data[0];
    });
  }

  saveUser(user: IUser) {
    try {
      const userModify = {
        ...user,
        id: this.user.id
      }
      this.userService.edit(userModify);
      this.router.navigate(['/', 'usuarios'])

    } catch (error: any) {
      this.displayError(error.message);
    }
  }

  displayError(message: string) {
    this.errorMessage = message;
    setTimeout(() => this.errorMessage = null, 6000);
  }
}
