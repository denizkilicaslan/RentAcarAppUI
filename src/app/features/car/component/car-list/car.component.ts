import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';
import { CarsAbstractService } from '../../services/abstracts/cars-abstract.service';

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
    private activatedRoot: ActivatedRoute,
    private carAbstractService: CarsAbstractService
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
    this.carAbstractService.getCarList().subscribe((res) => {
      this.cars = res;
    });
  }

  btnClick() {
    this.router.navigate(['serap']);
  }

  getCarByBrandId(brandId: number) {
    this.carAbstractService.getCarByBrandId(brandId).subscribe((res) => {
      this.cars = res;
    });
  }
}
