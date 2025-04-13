
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Category, Currency, Location } from '../../models/car';//


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class CarEditComponent implements OnInit {
  form!: FormGroup;
  id: number | null = null;
  categories = Object.keys(Category);
  currencies = Object.keys(Currency);
  locations = Object.keys(Location); // Location enumini import qilish kerak
  car: any; // Backenddan kelgan avtomobil ma'lumotlari
Category: any;
selectedImage: string | null = null;
  imageFile: File | null = null;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formniYarat();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.malumotniYukla(this.id);
      }
    });
  }

  formniYarat(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      contactPhone: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      currency: ['', Validators.required],
      image: [null],
      imageUrl: [[]], // Rasm URL'i uchun forma kontroli (taxminiy)
    });
  }

  malumotniYukla(id: number): void {
    this.http.get<any>(`http://localhost:5235/api/Car/${id}`).subscribe({
      next: (car) => {
        this.car = car; // Ma'lumotlarni saqlab qo'yamiz
        this.form.patchValue({
          name: car.name,
          description: car.description,
          price: car.price,
          contactPhone: car.contactPhone,
          category: car.category,
          location: car.location,
          currency: car.currency,
          carPicturesNames: car.carPicturesNames,
        });
      },
      error: (error) => {
        console.error('Ma\'lumot yuklashda xato:', error);
        alert('Ma\'lumot yuklashda xato!');
      },
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      this.form.get('image')?.setValue(file); // Form kontroliga faylni o'rnatish
    }
  }


  saqlash(): void {
    if (this.form.invalid) return;

    const formData = new FormData();
    formData.append('name', this.form.get('name')?.value);
    formData.append('description', this.form.get('description')?.value);
    formData.append('price', this.form.get('price')?.value);
    formData.append('contactPhone', this.form.get('contactPhone')?.value);
    formData.append('category', this.form.get('category')?.value);
    formData.append('location', this.form.get('location')?.value);
    formData.append('currency', this.form.get('currency')?.value);

    if (this.imageFile) {
      formData.append('image', this.imageFile, this.imageFile.name); // 'image' backend kutayotgan nom bo'lishi kerak
    }

    const request = this.id
      ? this.http.put(`http://localhost:5235/api/Car/${this.id}`, formData)
      : this.http.post(`http://localhost:5235/api/Car`, formData);

    request.subscribe({
      next: () => {
        alert(`Avtomobil ${this.id ? 'tahrirlandi' : 'qo\'shildi'}!`);
        this.router.navigate(['/cars', this.id]);
      },
      error: (error) => {
        console.error('Saqlashda xato:', error);
        alert('Saqlashda xato!');
      },
    });
  }

  bekorQilish(): void {
    this.router.navigate(['/cars']);
  }
}


// Foydalanuvchi o'zi yaratgan  elonnni o'chirishi va edit qilishi mumkin. 
// filter qilish kerak 3 xil
