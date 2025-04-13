import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car.service';
import { Category, Currency, Location } from '../../shared/car';
import { Car } from '../../models/car';
import { ReactiveFormsModule } from '@angular/forms';
// import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class CarDetailComponent implements OnInit {
  car: Car | null = null;
  carId: number = 0;

  currencyEnum = Currency;
  categoryEnum = Category;
  locationEnum = Location;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCarDetail();
  }

  loadCarDetail(): void {
    this.carService.getCar(this.carId).subscribe({
      next: (res) => this.car = res,
      error: (err) => console.error('Xatolik:', err)
    });
  }

  getEnumKey(enumObj: any, value: number): string {
    return enumObj[value];
  }

  deleteCar(): void {
    if (confirm('Rostdan ham ushbu avtomobil o‘chirilsinmi?')) {
      this.carService.deleteCar(this.carId).subscribe({
        next: () => {
          alert('Avtomobil o‘chirildi');
          this.router.navigate(['/cars']);
        },
        error: (err) => console.error('Delete error', err)
      });
    }
  }

  editCar(): void {
    this.router.navigate(['/car-edit', this.carId]);
  }
}
