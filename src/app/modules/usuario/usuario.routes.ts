import { Routes, RouterModule } from "@angular/router";
import { AgregarComponent } from "./pages/agregar/agregar.component";


const usuarioRoutes: Routes = [
    {
        path: '',
        component: AgregarComponent
    }
]

export const USUARIO_ROUTES = RouterModule.forChild(usuarioRoutes);