import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
  getRatesValue() {
    return this.httpClient
      .get(
        `${this.baseUrl}`,
        this.httpOptions
      );
  }
  putRatesValue(ratesarray: Array<any>[][]): Observable<Array<any>[][]> {
    return this.httpClient
    .put<Array<any>[][]>(
      `${this.baseUrl}`,
      ratesarray,
      this.httpOptions


    );

  }
}

