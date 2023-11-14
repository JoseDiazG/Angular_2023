import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: Todo[] = [
    {
      id: uuid(),
      name: 'Lavar platos',
    
    },
    {
      id: uuid(),
      name: 'Lavar el carro',
      
    },
    {
      id: uuid(),
      name: 'Banar al perro',
    },
  ];

  addTodo(todo:Todo):void{
    const newTodo:Todo = {id: uuid(), ...todo};
    this.todos.push(newTodo);
  }

  deleteCharacterById(id:string){
    this.todos = this.todos.filter(
      (todo) => todo.id !== id
    );
  }
}
