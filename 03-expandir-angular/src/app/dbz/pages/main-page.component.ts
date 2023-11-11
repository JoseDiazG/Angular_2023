import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  public characters: Character[] = [{
    name: 'Krillin',
    power: 100
  },{
    name: 'Goku',
    power: 950
  },{
    name: 'Vegueta',
    power: 52300
  }];

  onNewCharacter(character: Character ):void{
    console.log('Mainpage');
    console.log(character)
  }
  
}