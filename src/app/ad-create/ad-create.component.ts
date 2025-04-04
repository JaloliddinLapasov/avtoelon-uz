import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdService } from '../services/ad.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Kategoriyalar
enum Category {
  LightVehicles = 'Yengil avtomobillar',
  SpareParts = 'Ehtiyot qismlar',
  Services = 'Xizmatlar'
}

// Valyutalar
enum Currency {
  USD = 'USD',
  UZB = 'UZB',
  RUB = 'RUB'
}

// Joylashuvlar
enum Location {
  Andijan = 'Andijon',
  Bukhara = 'Buxoro',
  Fergana = 'Fargona',
  Jizzakh = 'Jizzax',
  Khorezm = 'Xorazm',
  Navoi = 'Navoiy',
  Namangan = 'Namangan',
  Samarkand = 'Samarqand',
  Syrdarya = 'Sirdaryo',
  Tashkent = 'Toshkent',
  TashkentRegion = 'Qoraqalpogiston Res',
  Surkhandarya = 'Surxandaryo'
}

@Component({
  selector: 'app-ad-create',
  templateUrl: './ad-create.component.html',
  styleUrls: ['./ad-create.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule] // Standalone component
})
export class AdCreateComponent implements OnInit {
  adForm!: FormGroup;
  categories = Object.values(Category);
  currencies = Object.values(Currency);
  locations = Object.values(Location);
  selectedFile: File | null = null; // Faylni saqlash

  constructor(
    private fb: FormBuilder,
    private adService: AdService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.adForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+([,.][0-9]{1,2})?$')]],
      currency: [Currency.USD, Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      location: ['', Validators.required],
      contactName: ['', Validators.required],
      contactPhone: ['', [Validators.required, Validators.pattern('^[+]?[0-9]{1,3}?[-.\s]?([0-9]{1,3}){2}([0-9]{1,4})$')]],
      images: ['']
    });
  }

  get f() {
    return this.adForm.controls;
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.adForm.valid) {
      const formData = new FormData();
      formData.append('title', this.adForm.value.title);
      formData.append('category', this.adForm.value.category);
      formData.append('price', this.adForm.value.price);
      formData.append('currency', this.adForm.value.currency);
      formData.append('description', this.adForm.value.description);
      formData.append('location', this.adForm.value.location);
      formData.append('contactName', this.adForm.value.contactName);
      formData.append('contactPhone', this.adForm.value.contactPhone);
      
      if (this.adForm.value.images) {
        formData.append('images', this.adForm.value.images); 
      }
  
      this.adService.createAd(formData).subscribe(
        response => {
          alert("E'lon muvaffaqiyatli joylashtirildi!");
          this.router.navigate(['/ads']);
        },
        error => {
          alert("Xatolik yuz berdi, iltimos qayta urinib ko'ring.");
        }
      );
    } else {
      alert("Iltimos barcha maydonlarni to'g'ri to'ldiring.");
    }
  }
}
