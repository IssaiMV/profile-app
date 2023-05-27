import { Component, Input } from '@angular/core';
import { IUser } from '../../../../shared/models/user.model';

@Component({
  selector: '[app-card-usuario]',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss']
})
export class CardUsuarioComponent {

  @Input() user!: IUser;

  editUser() { }

  deleteUser() { }
}
