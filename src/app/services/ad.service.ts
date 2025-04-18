// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Ad } from '../ad/ad.module';
// // import { Ad } from './ad.model';  // Ad modelini import qilish

// @Injectable({
//   providedIn: 'root'
// })
// export class AdService {
//   private apiUrl = 'https://localhost:5001/api/Ad';  // API manzili

//   constructor(private http: HttpClient) { }

//   // Barcha e'lonlarni olish
//   getAds(): Observable<Ad[]> {
//     return this.http.get<Ad[]>(this.apiUrl);
//   }

//   // Bitta e'lonni olish
//   getAd(id: number): Observable<Ad> {
//     return this.http.get<Ad>(`${this.apiUrl}/${id}`);
//   }

//   // Yangi e'lon yaratish
//   // createAd(ad: Ad): Observable<Ad> {
//   //   return this.http.post<Ad>(this.apiUrl, ad);
//   // }

//   // E'lonni yangilash
//   updateAd(id: number, ad: Ad): Observable<void> {
//     return this.http.put<void>(`${this.apiUrl}/${id}`, ad);
//   }

//   // E'lonni o'chirish
//   deleteAd(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
//   createAd(adData: FormData) {
//     return this.http.post('/api/ads', adData, {
//       headers: { 'enctype': 'multipart/form-data' }
//     });
//   }
  
// }


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdService {
//   private apiUrl = 'http://localhost:5235/api/Car'; // API manzilingiz

//   constructor(private http: HttpClient) { }

//   createAd(formData: FormData): Observable<any> {
//     // JWT tokenini olish (haqiqiy ilovada boshqacha bo'lishi mumkin)
//     const token = localStorage.getItem('authToken');
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });

//     return this.http.post(this.apiUrl, formData, { headers });
//   }

//   // Barcha e'lonlarni olish (agar kerak bo'lsa)
//   getAllAds(query?: any): Observable<any> {
//     const token = localStorage.getItem('authToken');
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });
//     return this.http.get(this.apiUrl, { headers, params: query });
//   }

//   // Bitta e'lonni ID bo'yicha olish (agar kerak bo'lsa)
//   getAdById(id: number): Observable<any> {
//     const token = localStorage.getItem('authToken');
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });
//     return this.http.get(`${this.apiUrl}/${id}`, { headers });
//   }
// }