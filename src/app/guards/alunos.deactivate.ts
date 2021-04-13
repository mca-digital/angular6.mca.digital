import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from '../login/auth.service';
// import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactevate } from '../guards/iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactevate>{

	canDeactivate(
		component:IFormCanDeactevate,
		router:ActivatedRouteSnapshot,
		state:RouterStateSnapshot
	) : Observable<boolean> | Promise<boolean>|boolean {

		console.log('Rota de desativação!');				
		
		// return component.podeMudarRota();
		return component.podeDesativar();
    }
}
