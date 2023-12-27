import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    PriceComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
