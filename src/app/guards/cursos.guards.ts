import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class CursosGuard implements CanActivateChild{

    constructor(
		private authService:AuthService,
		private router: Router
		) { }

	canActivateChild(
		router:ActivatedRouteSnapshot,
		state:RouterStateSnapshot
	) : Observable<boolean> | boolean{

        console.log('guarda de rota filha');
		// if(this.authService.usuarioEstaAutenticado()){
			return true;
		// }

		// this.router.navigate(['/login']);
		// return false;
    }
}
