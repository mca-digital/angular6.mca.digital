import { NgModule } from "@angular/core";
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guards";
// import { AlunosGuard } from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const appRoutes: Routes = [
    { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule', canActivate:[AuthGuard], canActivateChild:[CursosGuard], canLoad:[AuthGuard] },
    { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule', canActivate:[AuthGuard], canLoad:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
    // { path: '', component: HomeComponent, canActivate:[AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: '**', component: PaginaNaoEncontradaComponent}//, canActivate:[AuthGuard] },
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
