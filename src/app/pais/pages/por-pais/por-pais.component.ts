import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  /* toto: Country[] = []; ESTE ES UN EJEMPLO DE  VARIABLE TOTO*/ 
  paises: Country[] = [];

  constructor( private paisService: PaisService ){}

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino
    console.log(this.termino)

    this.paisService.buscarPais(this.termino).subscribe({
      next:(paises)=>{
        console.log(paises);  
        /* this.toto = paises; ESTE ES UN EJEMPLO DE  VARIABLE TOTO*/  
        this.paises = paises;   
        
      },
      error:(err)=>{
        this.hayError=true;
        this.paises = [];
      }       
    });
  }
  sugerencias( termino: string){
this.hayError = false;
//TODO: CREAR SUGERENCIAS
  }
}