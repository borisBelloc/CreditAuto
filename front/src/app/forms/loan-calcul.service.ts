import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanCalculService {

  private baseUrl = 'http://localhost:8080/api/loans';

  constructor(private http: HttpClient) { }

  LoanCalcul(loanSimulationDetails: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, loanSimulationDetails);
  }

}
