import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  
  //siempre se llama el servicio en el constructor
  constructor(private gifsService: GifsService) {}


  //permite utilizar enter para buscar
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  //es la otra parte para bsucar tambien
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    //llamando el servicio
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
