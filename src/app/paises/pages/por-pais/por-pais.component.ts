import { Component} from '@angular/core';
import { PaisService } from '../../servicios/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent {

  paises:Country[]=[];
  termino :string = "";
  error: boolean=false;
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;

  constructor(private paisService: PaisService){}

  buscar(termino:string){
    this.mostrarSugerencias=true;
    this.error=false;
    this.termino=termino;

    this.paisService.buscarPais(this.termino)
        .subscribe((resp)=>{
          console.log(resp);
          this.paises=resp;
        },(err)=>{
          this.error=true;
          this.paises=[];
        });
  }

  sugerencias(termino:string){
    this.error=false;
    this.termino=termino
    this.mostrarSugerencias=true;
    this.paisService.buscarPais(termino)
        .subscribe(paises => this.paisesSugeridos = paises.splice(0,3),
        (err)=>this.paisesSugeridos=[]);

  }

  buscarSugerido(termino:string){
    this.buscar(termino)

  }
}
