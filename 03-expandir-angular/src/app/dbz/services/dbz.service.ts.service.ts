import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 100,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 950,
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 52300,
    },
  ];

  addCharacter(character: Character): void {
    //utilizando el spred operation js
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
