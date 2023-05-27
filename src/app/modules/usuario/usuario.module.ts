import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { USUARIO_ROUTES } from './usuario.routes';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { CardUsuarioComponent } from './components/card-usuario/card-usuario.component';


@NgModule({
  declarations: [
    AgregarComponent,
    FormularioUsuarioComponent,
    MostrarComponent,
    CardUsuarioComponent
  ],
  imports: [
    CommonModule,
    USUARIO_ROUTES,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
