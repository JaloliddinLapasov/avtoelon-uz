import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:5001/api/Auth'; // API manzili
  baseUrl: any;

  constructor(private http: HttpClient) {}

  register(registerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerData);
  }

  // Kirish
  login(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
  // Tokenni saqlash
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Tokenni olish
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Tizimdan chiqish
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
