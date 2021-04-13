import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild{

    constructor(
		private authService:AuthService,
		private router: Router
		) { }

	canActivateChild(
		router:ActivatedRouteSnapshot,
		state:RouterStateSnapshot
	) : Observable<boolean> | boolean{

        console.log(router);
        console.log(state);

        console.log('AlunosGuard: Guarda de rota filha.');

		if(state.url.includes('editar')){
            // alert('Usuário sem acesso!');
            // return false;
            // return Observable.of(false);
        }
        
        return true;
    }
}
