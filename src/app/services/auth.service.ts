// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
// })
// export class AuthService {
//     private apiUrl = 'http://localhost:5235/api/Account'; // Backend API URLni to'g'rilang

//     constructor(private http: HttpClient) { }

//     login(credentials: any): Observable<any> {
//         return this.http.post(`${this.apiUrl}/login`, credentials);
//     }

//     register(userData: any): Observable<any> {
//         return this.http.post(`${this.apiUrl}/register`, userData);
//     }

//     saveToken(token: string): void {
//         localStorage.setItem('authToken', token);
//     }

//     getToken(): string | null {
//         return localStorage.getItem('authToken');
//     }

//     isAuthenticated(): boolean {
//         return !!this.getToken();
//     }

//     logout(): void {
//         localStorage.removeItem('authToken');
//         // Boshqa tozalash ishlari (agar kerak bo'lsa)
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5235/api/Account'; // Backend API URLni to'g'rilang
  private tokenSubject = new BehaviorSubject<string | null>(this.getToken());
  public token$ = this.tokenSubject.asObservable();
  public isLoggedIn$ = this.token$.pipe(
    map((token: string | null) => !!token)
  );

  constructor(private http: HttpClient, private router: Router) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.tokenSubject.next(null);
    this.router.navigate(['/auth/login']); // Tizimdan chiqqandan so'ng login sahifasiga yo'naltirish
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}