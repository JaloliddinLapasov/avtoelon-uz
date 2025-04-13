import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:5235/api/Contact/create-message'; // API manzili

  constructor(private http: HttpClient) {}

  sendMessage(contactMessage: ContactMessage): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactMessage);
  }
}
