import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Rate } from '../class/rate';

@Injectable({
  providedIn: 'root'
})
export class RatesService {
  private baseUrl = 'http://localhost:8080/benks/api/rates';

  constructor(private httpClient: HttpClient) {}

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return {
      headers
    };
  }
  getRatesValue(): Observable<Rate[]> {
    return this.httpClient
      .get<Rate[]>(
        `${this.baseUrl}`,
        this.httpOptions
      );
  }
  putRatesValue(ratesArray: Rate[]): Observable<Rate[]> {
    return this.httpClient
    .put<Rate[]>(
      `${this.baseUrl}`,
      ratesArray,
      this.httpOptions
    );

  }
}

