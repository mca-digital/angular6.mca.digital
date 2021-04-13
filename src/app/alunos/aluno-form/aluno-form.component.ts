import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactevate } from '../../guards/iform-candeactivate';

@Component({
    selector: 'app-aluno-form',
    templateUrl: './aluno-form.component.html',
    styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactevate{
    
    id:string;
    inscricao:Subscription;
    aluno:any;
    private formMudou:boolean = false;

    constructor(
        private route:ActivatedRoute,
        private alunosService:AlunosService
    ) { }

    ngOnInit() {
        this.inscricao = this.route.params.subscribe(
            (params: any) => {
                this.id = params['id'];
                this.aluno = this.alunosService.getAluno(this.id);
                
                if(this.aluno == null){
                    this.aluno = {};
                }
            }
        );
    }

    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }

    onInput(){
        this.formMudou = true;
    }

    podeMudarRota(){
        if(this.formMudou){
            confirm('Tem certeza que deseja sair desta página?');
        }
        return true;
    }

    podeDesativar(){
        return this.podeMudarRota();
    }
}
