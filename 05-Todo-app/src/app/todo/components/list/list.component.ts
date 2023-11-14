import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public todoList:Todo[] = [
    {
      name: 'Hacer deberes',
    },
  ];

  //emision de eliminar
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();
  

  onDeleteTodo(id?: string): void{
    if(!id) return;
    this.onDelete.emit(id);
  }

}
