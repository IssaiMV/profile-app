import { Routes, RouterModule } from "@angular/router";
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { MostrarComponent } from "./pages/mostrar/mostrar.component";
import { UsersResolver } from "src/app/core/resolvers/users.resolver";
import { EditarComponent } from "./pages/editar/editar.component";
import { UserResolver } from "src/app/core/resolvers/user.resolver";


const usuarioRoutes: Routes = [
    {
        path: '',
        component: MostrarComponent,
        resolve: [UsersResolver]
    },
    {
        path: 'agregar',
        component: AgregarComponent
    },
    {
        path: 'editar/:id',
        component: EditarComponent,
        resolve: [UserResolver]
    }
]

export const USUARIO_ROUTES = RouterModule.forChild(usuarioRoutes);