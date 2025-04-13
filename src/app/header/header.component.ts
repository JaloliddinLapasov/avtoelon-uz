// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterLink, RouterLinkActive } from '@angular/router';
// // import { AuthService } from '../auth/auth.service';
// import { Observable } from 'rxjs';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule, RouterLink, RouterLinkActive],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   isLoggedIn$: Observable<boolean>;

//   constructor(private authService: AuthService, private router: Router) {
//     this.isLoggedIn$ = this.authService.isLoggedIn$;
//   }

//   onAdCreate() {
//     this.isLoggedIn$.subscribe(isAuthenticated => {
//       if (isAuthenticated) {
//         this.router.navigate(['/new']); // 🔥 E’lon yaratish sahifasiga o‘tish (sizda '/new' yo'q edi)
//       } else {
//         alert("E’lon berish uchun avval tizimga kiring!"); // 🔥 Ogohlantirish (ro'yxatdan o'tish emas, tizimga kirish)
//         this.router.navigate(['/auth/login']); // 🔥 Tizimga kirish sahifasiga o‘tish
//       }
//     });
//   }

//   logout() {
//     this.authService.logout(); // ✅ Tokenni o‘chirish
//     this.router.navigate(['/auth/login']); // ✅ Login sahifasiga yo‘naltirish
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  private authSubscription: Subscription | undefined;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
    this.isLoggedIn = this.authService.isAuthenticated(); // Initial check on component load
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  onAdCreate(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/create-car']); // E’lon yaratish sahifasiga o‘tish
    } else {
      alert("E'lon berish uchun avval tizimga kiring!");
      this.router.navigate(['/auth/login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}