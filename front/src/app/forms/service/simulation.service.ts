<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Simulation } from '../class/simulation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private baseUrl = 'http://localhost:8080/benks/api/rates';

  constructor(private httpClient: HttpClient) {}

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return {
      headers
    };
  }

  // Méthode pour envoyer les informations et récupérer le taux d'intérêt calculé en java
  /* postSimulation(simulation: Object): Object {
    return this.httpClient
      .post<Simulation>(
        `${this.baseUrl}`,
        JSON.stringify(simulation),
        this.httpOptions
      )
      .subscribe(response => console.log(response));
  }*/

  // Méthode pour envoyer les informations de la simulation en java
  getLoanValue(category: string, amount: number, durationLoan: number) {
    return this.httpClient
      .get(
        `${this.baseUrl}?categorie=${category}&montant=${amount}&duree=${durationLoan}`,
        this.httpOptions
      );
  }
}
=======
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
>>>>>>> 56f3dac0e4e659d829df9e61b7e309c4df6cb249
