
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContacComponent } from './pages/contac/contac.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContacComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContacComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }
