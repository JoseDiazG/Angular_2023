import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private todoService:TodoService){}

  get todos():Todo[]{
    return [...this.todoService.todos];
  }

  onDeleteTodo(id:string):void{
    this.todoService.deleteCharacterById(id);
  }

  onNewTodo(todo:Todo):void {
    this.todoService.addTodo(todo);
  }

}
