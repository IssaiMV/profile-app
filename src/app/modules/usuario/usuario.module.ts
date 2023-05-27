import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { USUARIO_ROUTES } from './usuario.routes';



@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    USUARIO_ROUTES,
  ]
})
export class UsuarioModule { }
