// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Ad } from '../ad/ad.module';


// @Injectable({
//   providedIn: 'root'
// })
// export class ListingService {
//   private apiUrl = 'https://localhost:5235/api/';

//   constructor(private http: HttpClient) {}

//   getUserAds(userId: number): Observable<Ad[]> {
//     return this.http.get<Ad[]>(`${this.apiUrl}/user/${userId}`);
//   }
// }