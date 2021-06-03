import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {



  paises:Country[]=[];
  termino :string = "";
  error: boolean=false;

  constructor(private paisService: PaisService){}

  buscar(termino:string){

    this.error=false;
    this.termino=termino;

    this.paisService.buscarCapital(this.termino)
        .subscribe((resp)=>{
          console.log(resp);
          this.paises=resp;
        },(err)=>{
          this.error=true;
          this.paises=[];
        });
  }

}
