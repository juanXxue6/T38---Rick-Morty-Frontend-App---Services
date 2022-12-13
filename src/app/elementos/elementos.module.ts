import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';


import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,

  ],
  imports: [
    HttpClientModule,
    CommonModule

  ],
  exports:[
    HomeComponent,
    AboutComponent]
})
export class ElementosModule { }
