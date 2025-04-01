import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
    import { RouterLink } from '@angular/router'; // Import RouterLink

    @Component({
      selector: 'app-login',
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, RouterLink], // Add RouterLink
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
    })
    export class LoginComponent {
      loginForm: FormGroup;

      constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
        });
      }

      onSubmit() {
        if (this.loginForm.valid) {
          console.log('Login attempt:', this.loginForm.value);
          // TODO: Implement actual login logic (call auth service, handle tokens, etc.)
          alert('Tizimga kirishga urinish (konsolga qarang). Haqiqiy autentifikatsiya hali yo\'q.');
          // On success, navigate to a protected area or home page
          // this.router.navigate(['/']);
        } else {
          alert('Email yoki parol noto\'g\'ri yoki kiritilmagan.');
          this.loginForm.markAllAsTouched();
        }
      }

      get f() { return this.loginForm.controls; }
    }
