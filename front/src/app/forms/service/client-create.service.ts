import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../class/client';

@Injectable({
  providedIn: 'root'
})
export class ClientCreateService {
  private baseUrl = 'http://localhost:8080/benks/api/clients';

  constructor(private httpClient: HttpClient) {}

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return {
      headers
    };
  }

  createNewClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(
      `${this.baseUrl}`,
      client,
      this.httpOptions
    );
  }
}
