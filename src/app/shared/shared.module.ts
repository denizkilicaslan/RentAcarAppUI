import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Not404Component } from './components/not404/not404.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    Not404Component,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    Not404Component,
    FilterPipe
  ]
})
export class SharedModule { }
