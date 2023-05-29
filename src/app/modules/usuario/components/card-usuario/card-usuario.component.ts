import { Component, Input } from '@angular/core';
import { IUser } from '../../../../shared/models/user.model';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: '[app-card-usuario]',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss']
})
export class CardUsuarioComponent {

  @Input() user!: IUser;

  constructor(
    private userService: UserService
  ) {

  }

  deleteUser() {
    try {
      if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
        this.userService.delete(this.user.id);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        console.error(error);
      }
    }
  }

  calculateAge(birthdate: string): string {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age === 1 ? `${age} año` : `${age} años`;
  }

}
