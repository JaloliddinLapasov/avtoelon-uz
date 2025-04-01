import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms'; // Import forms modules

    @Component({
      selector: 'app-create-ad',
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule], // Add ReactiveFormsModule
      templateUrl: './create-ad.component.html',
      styleUrls: ['./create-ad.component.css']
    })
    export class CreateAdComponent {
      adForm: FormGroup;

      // Placeholder options - these should ideally come from a service or config
      categories = ['Yengil Avtomobillar', 'Yuk Avtomobillari', 'Ehtiyot Qismlar', 'Xizmatlar', 'Boshqalar'];
      locations = ['Toshkent', 'Samarqand', 'Buxoro', 'Andijon', 'Farg\'ona', 'Namangan', 'Qashqadaryo', 'Surxondaryo', 'Xorazm', 'Navoiy', 'Jizzax', 'Sirdaryo', 'Qoraqalpog\'iston'];
      currencies = ['USD', 'UZS'];

      constructor(private fb: FormBuilder) {
        this.adForm = this.fb.group({
          title: ['', [Validators.required, Validators.minLength(5)]],
          category: ['', Validators.required],
          price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]], // Number or decimal
          currency: ['USD', Validators.required],
          description: ['', [Validators.required, Validators.minLength(20)]],
          location: ['', Validators.required],
          // Image upload is complex, starting with a simple file input placeholder
          images: [null],
          contactName: ['', Validators.required],
          contactPhone: ['', [Validators.required, Validators.pattern(/^\+?\d{9,15}$/)]] // Basic phone pattern
        });
      }

      onSubmit() {
        if (this.adForm.valid) {
          console.log('Form Submitted! Ad Data:', this.adForm.value);
          // TODO: Implement actual ad submission logic (e.g., send data to backend API)
          alert('E\'loningiz muvaffaqiyatli qabul qilindi (hozircha konsolga chiqarildi)!');
          this.adForm.reset({ currency: 'USD' }); // Reset form, keep default currency
        } else {
          alert('Iltimos, barcha kerakli maydonlarni to\'g\'ri to\'ldiring.');
          this.adForm.markAllAsTouched(); // Show validation errors on all fields
        }
      }

      // Helper function to easily access form controls in the template
      get f() { return this.adForm.controls; }

      onFileChange(event: any) {
        // Basic file handling example (logs file info)
        // Real implementation would involve uploading files
        if (event.target.files.length > 0) {
          const files = event.target.files;
          console.log(files);
          // You might want to store file names or prepare them for upload
          // this.adForm.patchValue({ images: files }); // Storing FileList might not be ideal, depends on upload strategy
        }
      }
    }
