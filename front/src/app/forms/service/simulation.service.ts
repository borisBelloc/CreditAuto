import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Simulation } from "../class/simulation";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SimulationService {
  private baseUrl = "http://localhost:8080/CreditAuto/loanSimulation";

  constructor(private httpClient: HttpClient) {}

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return {
      headers
    };
  }
  // Méthode pour envoyer les informations de la simulation et récupérer le taux d'intérêt calculé en java
  postSimulation(simulation: Object): Object {
    return this.httpClient
      .post<Simulation>(
        `${this.baseUrl}`,
        JSON.stringify(simulation),
        this.httpOptions
      )
      .subscribe(response => console.log(response));
  }
}
