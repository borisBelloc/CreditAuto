import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoanCalculService {
  private baseUrl = "http://localhost:8080/CreditAuto/api/loans";

  constructor(private http: HttpClient) {}

  createSimulation(simulation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, simulation);
  }
}
