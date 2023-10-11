import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrandComponent } from './pages/brand/brand.component';
import { Not404Component } from './shared/components/not404/not404.component';

const routes: Routes = [
    {path:"",pathMatch:"full",component:CarComponent},
    {path:"cars/:id",pathMatch:"full",component:CarComponent},
    {path:"deniz",component:BrandComponent},
  //{path:"serap",component:CarComponent}, //bunların sırası önemliiymişş👌
  {path:"**",component:Not404Component}  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
