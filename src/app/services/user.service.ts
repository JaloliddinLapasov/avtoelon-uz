// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private apiUrl = 'http://localhost:5235/api/Users';

//   constructor(private http: HttpClient) {}

//   getUserProfile(userId: string): Observable<any> {
//     return this.http.get(`${this.apiUrl}/${userId}`);
//   }

//   updateUserProfile(user: any): Observable<any> {
//     return this.http.put(`${this.apiUrl}/${user.id}`, user);
//   }
// }
