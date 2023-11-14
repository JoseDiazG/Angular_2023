import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output()
  public onNewTodo:EventEmitter<Todo> = new EventEmitter();

  //declaramos un objeto tipo TODO
  public todo:Todo ={
    name: '',
  };

  //funcion emit
  emitTodo():void{

    //validacion que no vaya vacia la tarea
    if(this.todo.name.length === 0) return;

    this.onNewTodo.emit(this.todo);
  
    //reset el texto del input
    this.todo = {name: ''}
  }

}
