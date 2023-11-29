import { NgModule } from '@angular/core';

//Componentes de PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [],
  exports: [
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
