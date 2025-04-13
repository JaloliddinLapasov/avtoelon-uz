import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
  loginForm: FormGroup; // Bu yerda e'lon qilingan
  submitted = false;   // Bu yerda e'lon qilingan
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true; // Bu yerda ishlatilyapti

    if (this.loginForm.invalid) { // Bu yerda ishlatilyapti
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({ // Bu yerda ishlatilyapti
      next: (response) => {
        this.authService.saveToken(response.token);
        alert("Tizimga muvaffaqiyatli kirdingiz!");
        this.router.navigate(['/new']);
      },
      error: (error) => {
        this.errorMessage = "Login yoki parol noto‘g‘ri!";
      }
    });
  }
}