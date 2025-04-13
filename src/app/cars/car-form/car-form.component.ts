// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-car-form',
//   templateUrl: './car-form.component.html',
//   styleUrls: ['./car-form.component.css'],
//   imports:[CommonModule, ReactiveFormsModule],
// })
// export class CarFormComponent {
//   carForm: FormGroup;
//   selectedFiles: File[] = [];
//   imagePreviews: string[] = [];
//   isSubmitting = false;

//   categories = [
//     { label: 'Yengil avtomobillar', value: 'yengil_avtomobillar' },
//     { label: 'Ehtiyot qismlar', value: 'extiyot_qisimlar' },
//     { label: 'Xizmatlar', value: 'xizmatlar' }
//   ];

//   locations = [
//     'Andijon', 'Buxoro', "Farg'ona", 'Jizzax', 'Xorazm',
//     'Navoiy', 'Namangan', 'Samarkand', 'Sirdaryo',
//     'Toshkent', 'Surxandaryo', 'Qashqadaryo'
//   ];

//   currencies = ['usd', 'uzs', 'rub'];

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.carForm = this.fb.group({
//       carName: ['Sonata', Validators.required],
//       description: ['Gozal mashina', Validators.required],
//       carPrice: ['20000', Validators.required],
//       contactPhone: ['+998941234567', Validators.required],
//       category: ['xizmatlar', Validators.required],
//       location: ['Toshkent', Validators.required],
//       currency: ['usd', Validators.required]
//     });
//   }

//   onFileSelected(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files) {
//       const files = Array.from(input.files);

//       if (this.selectedFiles.length + files.length > 5) {
//         alert('Eng ko‘pi bilan 5 ta rasm yuklash mumkin.');
//         return;
//       }

//       files.forEach(file => {
//         this.selectedFiles.push(file);
//         const reader = new FileReader();
//         reader.onload = () => this.imagePreviews.push(reader.result as string);
//         reader.readAsDataURL(file);
//       });
//     }
//   }

//   onSubmit(): void {
//     if (this.carForm.invalid) return;

//     this.isSubmitting = true;

//     const formData = new FormData();
//     formData.append('CarName', this.carForm.value.carName);
//     formData.append('Description', this.carForm.value.description);
//     formData.append('CarPrice', this.carForm.value.carPrice);
//     formData.append('ContactPhone', this.carForm.value.contactPhone);
//     formData.append('Category', this.carForm.value.category);
//     formData.append('Location', this.carForm.value.location);
//     formData.append('Currency', this.carForm.value.currency);

//     this.selectedFiles.forEach(file => {
//       formData.append('CarPictures', file);
//     });

//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`
//     });

//     this.http.post('http://localhost:5235/api/Car', formData, { headers })
//       .subscribe({
//         next: () => {
//           this.isSubmitting = false;
//           alert('Mashina muvaffaqiyatli yaratildi!');
//           this.router.navigate(['/car-list']);
//         },
//         error: err => {
//           this.isSubmitting = false;
//           console.error(err);
//           alert('Xatolik yuz berdi.');
//         }
//       });
//   }
// }


import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-form',
  standalone: true,
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  isSubmitting = false;
  carId: string | null = null;
  isEditMode = false;

  categories = [
    { label: 'Yengil avtomobillar', value: 'yengil_avtomobillar' },
    { label: 'Ehtiyot qismlar', value: 'extiyot_qisimlar' },
    { label: 'Xizmatlar', value: 'xizmatlar' }
  ];

  locations = [
    'Andijon', 'Buxoro', "Farg'ona", 'Jizzax', 'Xorazm',
    'Navoiy', 'Namangan', 'Samarkand', 'Sirdaryo',
    'Toshkent', 'Surxandaryo', 'Qashqadaryo'
  ];

  currencies = ['usd', 'uzs', 'rub'];

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
previewImages: any;

  constructor() {
    this.carForm = this.fb.group({
      carName: ['Malibu', Validators.required],
      description: ['Zo\'r moshina', Validators.required],
      carPrice: ['2000', Validators.required],
      contactPhone: ['+998940214568', Validators.required],
      category: ['Yengil avtomobillar', Validators.required],
      location: ['Jizzax', Validators.required],
      currency: ['USD', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id');
    if (this.carId) {
      this.isEditMode = true;
      this.loadCarData(this.carId);
    }
  }

  loadCarData(id: string): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http.get<any>(`http://localhost:5235/api/Car/${id}`, { headers })
      .subscribe({
        next: car => {
          this.carForm.patchValue({
            carName: car.carName,
            description: car.description,
            carPrice: car.carPrice,
            contactPhone: car.contactPhone,
            category: car.category,
            location: car.location,
            currency: car.currency
          });

          if (car.carPictures?.length) {
            this.imagePreviews = car.carPictures.map((pic: string) => `http://localhost:5235/${pic}`);
          }
        },
        error: err => {
          console.error('Ma’lumot yuklashda xatolik:', err);
        }
      });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);

      if (this.selectedFiles.length + files.length > 5) {
        alert('Eng ko‘pi bilan 5 ta rasm yuklash mumkin.');
        return;
      }

      files.forEach(file => {
        this.selectedFiles.push(file);
        const reader = new FileReader();
        reader.onload = () => this.imagePreviews.push(reader.result as string);
        reader.readAsDataURL(file);
      });
    }
  }

  onSubmit(): void {
    if (this.carForm.invalid) return;
    this.isSubmitting = true;

    const formData = new FormData();
    formData.append('CarName', this.carForm.value.carName);
    formData.append('Description', this.carForm.value.description);
    formData.append('CarPrice', this.carForm.value.carPrice);
    formData.append('ContactPhone', this.carForm.value.contactPhone);
    formData.append('Category', this.carForm.value.category);
    formData.append('Location', this.carForm.value.location);
    formData.append('Currency', this.carForm.value.currency);

    this.selectedFiles.forEach(file => {
      formData.append('CarPictures', file);
    });

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const request$ = this.isEditMode
      ? this.http.put(`http://localhost:5235/api/Car/${this.carId}`, formData, { headers })
      : this.http.post('http://localhost:5235/api/Car', formData, { headers });

    request$.subscribe({
      next: () => {
        this.isSubmitting = false;
        alert(`Mashina ${this.isEditMode ? 'tahrirlandi' : 'yaratildi'}!`);
        this.router.navigate(['/car-list']);
      },
      error: err => {
        this.isSubmitting = false;
        console.error('Saqlashda xatolik:', err);
        alert('Xatolik yuz berdi.');
      }
    });
  }
}
