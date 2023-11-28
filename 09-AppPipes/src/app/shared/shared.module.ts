import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importado desde la carpeta prime-ng
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

//importado desde la carpeta shared
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
