import { Component } from '@angular/core';

import * as _ from 'lodash';
import { AuthService } from './login/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular 6';
    list = _.map([1,2,3],(n)=>`# ${n}`);
    
    mostrarMenu:boolean = false;

    constructor(private authService:AuthService){}

    ngOnInit(){
        this.authService.mostrarMenuEmitter.subscribe(
            mostrar => this.mostrarMenu = mostrar
        );
    }
}
