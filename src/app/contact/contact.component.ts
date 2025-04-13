import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, ReactiveFormsModule], // Agar sizda boshqa modullar bo'lsa, ularni qo'shing
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  private apiUrl = environment.apiUrl; // Backend API manzili

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['Jaloliddin10', Validators.required],
      email: ['jaloliddim10@gmail.com', [Validators.required, Validators.email]],
      subject: ['25', Validators.required],
      message: ['Saytni yanada rivojlantirish kerak!!!', Validators.required],
      fullname: ['Lapasov Jaloliddin', Validators.required], // Qo'shildi
      theme: ['Sayt dizayni', Validators.required]     // Qo'shildi
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    const formData = this.contactForm.value;

    this.http.post(`${this.apiUrl}/api/Contact/create-message`, formData)
      .subscribe({
        next: (response) => {
          console.log('Xabar muvaffaqiyatli yuborildi:', response);
          this.successMessage = 'Xabaringiz muvaffaqiyatli yuborildi!';
          this.errorMessage = '';
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          console.error('Xabar yuborishda xatolik yuz berdi:', error);
          this.errorMessage = 'Xabar yuborishda xatolik yuz berdi.';
          this.successMessage = '';
        }
      });
  }
}