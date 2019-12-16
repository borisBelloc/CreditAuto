import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerResearchService {
  private baseUrl = 'http://localhost:8080/benks/api/clients';

  constructor(private httpClient: HttpClient) {}

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return {
      headers
    };
  }

  getCustomers(lastName: string, firstName: string, email: string) {
    return this.httpClient
    .get(
      `${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&email=${email}`,
      this.httpOptions
    );
  }
}
