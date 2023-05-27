import { Routes, RouterModule } from "@angular/router";
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { MostrarComponent } from "./pages/mostrar/mostrar.component";
import { UsersResolver } from "src/app/core/resolvers/users.resolver";


const usuarioRoutes: Routes = [
    {
        path: '',
        component: MostrarComponent,
        resolve: [UsersResolver]
    },
    {
        path: 'agregar',
        component: AgregarComponent
    }
]

export const USUARIO_ROUTES = RouterModule.forChild(usuarioRoutes);