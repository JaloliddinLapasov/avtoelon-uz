// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdsService {
//   private apiUrl = 'https://localhost:5235/api/Ads'; // Backend API manzili

//   constructor(private http: HttpClient) {}

//   createAd(formData: FormData): Observable<any> {
//     return this.http.post(this.apiUrl, formData);
//   }

//   getAds(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   getAd(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`);
//   }

//   updateAd(id: number, formData: FormData): Observable<void> {
//     return this.http.put<void>(`${this.apiUrl}/${id}`, formData);
//   }

//   deleteAd(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }