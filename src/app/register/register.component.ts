import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
    import { RouterLink } from '@angular/router';

    // Custom Validator for matching passwords
    export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      if (password && confirmPassword && password.value !== confirmPassword.value) {
        return { passwordMismatch: true };
      }
      return null;
    }

    @Component({
      selector: 'app-register',
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, RouterLink],
      templateUrl: './register.component.html',
      styleUrls: ['./register.component.css']
    })
    export class RegisterComponent {
      registerForm: FormGroup;

      constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
          username: ['', [Validators.required, Validators.minLength(3)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
        }, { validators: passwordMatchValidator }); // Apply custom validator to the group
      }

      onSubmit() {
        if (this.registerForm.valid) {
          console.log('Register attempt:', this.registerForm.value);
          // TODO: Implement actual registration logic (call API, handle response)
          // Remove confirmPassword before sending to backend
          const { confirmPassword, ...userData } = this.registerForm.value;
          console.log('User data to send:', userData);
          alert('Ro\'yxatdan o\'tishga urinish (konsolga qarang). Haqiqiy ro\'yxatdan o\'tish hali yo\'q.');
          // On success, maybe navigate to login page or show success message
          // this.router.navigate(['/login']);
        } else {
          alert('Iltimos, formani to\'g\'ri to\'ldiring.');
          this.registerForm.markAllAsTouched();
        }
      }

       get f() { return this.registerForm.controls; }
       get formErrors() { return this.registerForm.errors; }
    }
