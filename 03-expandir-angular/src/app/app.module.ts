import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importacion de modulos
import { DbzModule } from './dbz/dbz.module';

//importacion de componentes
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
