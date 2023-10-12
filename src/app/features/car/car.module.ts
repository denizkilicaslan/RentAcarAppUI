import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './component/car-list/car.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CarsAbstractService } from './services/abstracts/cars-abstract.service';
import { CarMockService } from './services/concretes/car-mock.service';



@NgModule({
  declarations: [CarComponent,  
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    CarComponent
  ],
  providers: [
    {
      provide: CarsAbstractService,
      useClass: CarMockService
    }
  ],
})
export class CarModule { }
