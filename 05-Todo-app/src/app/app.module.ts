import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importacion del modulo
import { TodoModule } from './todo/todo.module';

//importacion del componente
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
