import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    MainPageComponent
  ]
})
export class TodoModule { }
