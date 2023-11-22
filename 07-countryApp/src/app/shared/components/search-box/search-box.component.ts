import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  
  //esta parte es para recibir un input
  @Input()
  public placeholder:string = '';

  //recibir el input
  @Output()
  public onValue = new EventEmitter<string>();
  
  //emitir el valor
  emitValue(value: string):void{
    this.onValue.emit(value)
  }

}
