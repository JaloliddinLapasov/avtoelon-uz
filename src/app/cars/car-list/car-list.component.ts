import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Category, Currency,Location } from '../../shared/car';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class CarListComponent implements OnInit {
  cars: any[] = [];

  // enumlarni componentga qo‘shamiz
  currencyEnum = Currency;
  categoryEnum = Category;
  locationEnum = Location;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.http.get<any[]>('http://localhost:5235/api/Car').subscribe({
      next: res => this.cars = res,
      error: err => console.error('Xatolik:', err)
    });
  }

 
  getEnumKey(enumObj: any, value: number): string {
    return enumObj[value];
  }

  // viewDetails(car: Car): void {
  //   if (!car.id) {
  //     console.error("Car ID is undefined");
  //     return;
  //   }
  //   this.router.navigate(['/car-detail', car.id]);
  // }

  viewDetails(car: any): void {
    if (!car || !car.id) {
      console.error("Car yoki car.id mavjud emas:", car);
      return;
    }
    this.router.navigate(['/car-detail', car.id]);
  }
  
}
