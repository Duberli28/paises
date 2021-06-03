import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones:string[]=['africa','americas','asia','europe','oceania']
  regionActiva:string="";
  paises:Country[]=[];


  constructor(private paisService:PaisService) { }
  activarRegion(region:string){
    if (region===this.regionActiva) {
      return;
    }

    this.regionActiva=region;
    this.paises=[];

    this.paisService.buscarRegion(region)
        .subscribe(resp =>this.paises=resp);
  }

  getClassCss(region:string):string{
    return (region===this.regionActiva) ? 'btn btn-primary mx-2' : 'btn btn-outline-primary mx-2'
  }

}
