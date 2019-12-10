import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Simulation } from '../class/simulation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private baseUrl = "http://localhost:8080/CreditAuto/loanSimulation";

  constructor(private httpClient: HttpClient) { }

  // Méthode pour envoyer les informations de la simulation et récupérer le taux d'intérêt calculé en java
  postSimulation(dataSimulate: String): Observable<Simulation> {
    return this.httpClient.post<Simulation>(`${this.baseUrl}`, dataSimulate);
  }

}


