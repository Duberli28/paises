import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  @Input() placeholder:string=""
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebonce: EventEmitter<string> = new EventEmitter();

  debouncer:Subject<string>= new Subject();//Se emite cuando dejas de escribir

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor=>{

      this.onDebonce.emit(valor)

    })
  }

  termino:string="";
  buscar(){
    this.onEnter.emit(this.termino);
}

teclaPresionada(){
  this.debouncer.next(this.termino)
}

}
