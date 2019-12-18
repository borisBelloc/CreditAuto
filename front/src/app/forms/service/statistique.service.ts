import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private baseUrl = 'http://localhost:8080/benks/api/contracts';



  constructor(private httpClient: HttpClient) { }

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return {
      headers
    };
  }

  //http://localhost:8080/benks/api/contracts?start=1990-01-01&end=2019-12-31
  // Méthode pour envoyer les dates sous java
  getTotalStat(start: string, end: string) {
    return this.httpClient
      .get(
        `${this.baseUrl}?start=${start}&end=${end}`,
        this.httpOptions
      );
  }

}
