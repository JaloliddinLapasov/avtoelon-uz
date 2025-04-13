import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [CommonModule, ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    errorMessage = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit(): void {}

    get f() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        this.authService.register(this.registerForm.value).subscribe({
            next: (response) => {
                this.authService.saveToken(response.token);
                console.log('Ro\'yxatdan o\'tish muvaffaqiyatli:', response);
                alert('Ro‘yxatdan muvaffaqiyatli o‘tdingiz!');
                this.router.navigate(['/new']);
            },
            error: (error) => {
                this.errorMessage = 'Ro\'yxatdan o\'tishda xatolik: ' + error.message;
                console.error('Ro\'yxatdan o\'tish xatoligi:', error);
            },
        });
    }
}