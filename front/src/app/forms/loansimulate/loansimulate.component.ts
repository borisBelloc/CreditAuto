import { Component, OnInit } from '@angular/core';

import { SimulateLoanContract } from 'src/model/model-simulateloancontract';
// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Simulation } from '../class/simulation';
import { Observable, Subject, BehaviorSubject, merge } from 'rxjs';
import { SimulationService } from '../service/simulation.service';

@Component({
  selector: 'app-loansimulate',
  templateUrl: './loansimulate.component.html',
  styleUrls: ['./loansimulate.component.scss']
})
export class LoansimulateComponent implements OnInit {
  dataSimulate: string;
  lastUpdate = new Date();
  submitted = false;
  simulateForm: FormGroup;

  simulation: Simulation;

  isBtnsVisible = true;

  /**
   * Used to swap btn 'Calculer crédit' & 'Créer contrat'
   */
  toggleDisplayBtn() {
    this.isBtnsVisible = !this.isBtnsVisible;
  }

  constructor(
    private formBuilder: FormBuilder,
    private simulationService: SimulationService,
  ) {}

  ngOnInit() {
    this.simulateForm = this.formBuilder.group({
      amountPurchase: ['', Validators.required],
      amountLoan: ['', Validators.required],
      category: ['A', Validators.required],
      durationLoan: ['', Validators.required],
      loanCost: ['']
    });
  }

  onSubmit(formData) {
    console.warn('FORM ICI -> ', formData);

    this.simulation = new Simulation(
      formData.amountPurchase,
      formData.amountLoan,
      formData.category,
      formData.durationLoan
    );

    this.simulationService.postSimulation(this.simulation);

    console.log(this.simulation);

    // if toggleDisplayBtn() used on html, it block the btn onSubmit (form)
    this.toggleDisplayBtn();
    this.simulateForm.disable();
    //this.simulateLoanContract.amountLoan = formData.amountLoan;
    //console.warn("TON OBJET ICI -> ", this.simulateLoanContract);
  }
  reset() {
    this.simulateForm.enable();
    this.toggleDisplayBtn();
    //  use this if loanCost is inside the form
    // this.simulateForm.get('amountPurchase').enable();
    // this.simulateForm.get('amountLoan').enable();
    // this.simulateForm.get('category').enable();
    // this.simulateForm.get('durationLoan').enable();
  }
}
