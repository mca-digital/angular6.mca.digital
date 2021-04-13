import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

    constructor() { }
    
    getCursos(){
        return [
            {id:1, nome:'ANGULAR 6'},
            {id:2, nome:'JAVASCRIPT'},
            {id:3, nome:'HTML5'},
            {id:4, nome:'NODE'},
            {id:5, nome:'PHP'}
        ];
    }

    getCurso(id:any){
        let cursos = this.getCursos();
        for (let i=0; i<cursos.length; i++) {
            let curso = cursos[i];
            if(curso.id == id){
                return curso;
            }
        }
        return null;
    }
}
