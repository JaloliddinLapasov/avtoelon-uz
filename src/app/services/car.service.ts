import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getCars(query: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/Car`, { headers: this.getAuthHeaders(), params: query });
  }

  getCar(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/Car/${id}`, { headers: this.getAuthHeaders() });
  }

  createCar(car: FormData, params?: HttpParams): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Car`, car, {
      headers: this.getAuthHeaders(),
      params
    });
  }

  updateCar(id: number, car: FormData, params?: HttpParams): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/Car/${id}`, car, {
      headers: this.getAuthHeaders(),
      params
    });
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/Car/${id}`, { headers: this.getAuthHeaders() });
  }
}
