import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from "./alunos.service";
import { AlunosDeactivateGuard } from "../guards/alunos.deactivate";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";
import { PaginaNaoEncontradaComponent } from "../pagina-nao-encontrada/pagina-nao-encontrada.component";

@NgModule({
    imports:[
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports:[],
    declarations:[
        AlunosComponent, 
        AlunoFormComponent, 
        AlunoDetalheComponent
    ],
    providers:[
        AlunosService,
        AlunosDeactivateGuard,
        AlunoDetalheResolver
    ]
})
export class AlunosModule {}
