import { Component, OnInit } from '@angular/core';
import { Client } from '../class/client';
import { Simulation } from '../class/simulation';
import { ContractsearchComponent } from '../contractsearch/contractsearch.component';
import { Contrat } from '../class/contrat';

@Component({
  selector: 'app-create-contrat',
  templateUrl: './create-contrat.component.html',
  styleUrls: ['./create-contrat.component.scss']
})
export class CreateContratComponent implements OnInit {
  newSimulation: Simulation;
  newClient: Client;
  contract: Contrat;

  constructor() {}

  ngOnInit() {
    this.newSimulation = window.history.state.simu;
    this.newClient = window.history.state.data;

    this.contract = new Contrat();

    console.log(this.newClient);
  }
}
