import { CarService } from './../../shared/services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  textFilterx: string;
  constructor(
    private router: Router,
    private carService: CarService,
    private activatedRoot: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoot.params.subscribe((params) => {
      if (params['id']) {
        console.log(params['id']);
        this.getCarByBrandId(params['id']);
      } else {
        this.getAllCars();
      }
    });
  }

  getAllCars() {
    this.carService.getAllCar().subscribe((res) => {
      this.cars = res;
    });
  }

  btnClick() {
    this.router.navigate(['serap']);
  }

  getCarByBrandId(brandId: number) {
    this.carService.getCarByBrand(brandId).subscribe((res) => {
      this.cars = res;
    });
  }
}
