import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // ✅ Use NodePort + no extra /contact suffix
  private baseUrl = "http://52.23.187.175:31062";

  constructor(private httpClient: HttpClient) { }

  createContact(contact: Contact): Observable<string> {
    // Backend endpoint -> POST /contact
    return this.httpClient.post(`${this.baseUrl}/contact`, contact, { responseType: "text" });
  }

  getContacts(): Observable<Contact[]> {
    // Backend endpoint -> GET /contacts
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findContactById(id: number): Observable<Contact> {
    // Backend endpoint -> GET /contact/{id}
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }

  deleteContactByid(id: number): Observable<string> {
    // Backend endpoint -> DELETE /contact/{id}
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`, { responseType: "text" });
  }
}
