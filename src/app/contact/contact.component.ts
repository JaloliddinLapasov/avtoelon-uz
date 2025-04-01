import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormsModule } from '@angular/forms'; // Import qilish

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ReactiveFormsModule qo'shildi
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup; // FormGroup tipida o'zgaruvchi e'lon qilindi

  constructor(private fb: FormBuilder) {
    // Obyekt constructor ichida yaratilmoqda
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('Xabaringiz uchun rahmat!');
      this.contactForm.reset();
    } else {
      alert('Iltimos, barcha maydonlarni to‘ldiring.');
    }
  }
}
